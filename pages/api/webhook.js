import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require("stripe")(process.env.STRIPE_SK);
import { buffer } from "micro";

const endpointSecret =
	"whsec_007d5a26b29038e96534ace5c1d153e069913aceb85233d625e9b27c649f6d3b";

export default async function handler(req, res) {
	await mongooseConnect();

	const sig = req.headers["stripe-signature"];

	let event;

	try {
		event = stripe.webhooks.constructEvent(
			await buffer(req),
			sig,
			endpointSecret
		);
	} catch (err) {
		res.status(400).send(`Webhook Error: ${err.message}`);
		return;
	}

	// Handle the event
	switch (event.type) {
		case "checkout.session.completed":
			const data = event.data.object;
			const orderId = data.metadata.orderId;
			const paid = data.payment_status === "paid";
			if (orderId && paid) {
				await Order.findByIdAndUpdate(orderId, {
					paid: true,
				});
			}
			break;
		default:
			console.log(`Unhandled event type ${event.type}`);
	}

	res.status(200).send("OK");
}

export const config = {
	api: { bodyParser: false },
};

// charm-openly-favor-galore
// acct_1NFKJ6IP3sr3bXD6
