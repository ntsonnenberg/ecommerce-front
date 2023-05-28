import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ product }) {
	return (
		<div>
			<Header />
			<Featured product={product} />
			<NewProducts />
		</div>
	);
}

export async function getServerSideProps() {
	const featuredProductId = "6457ccb1f2cbb1fcfba5fe21";
	mongooseConnect();

	const product = await Product.findById(featuredProductId);

	return {
		props: { product: JSON.parse(JSON.stringify(product)) },
	};
}
