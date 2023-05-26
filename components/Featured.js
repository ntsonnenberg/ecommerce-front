import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";

const Bg = styled.div`
	background-color: #222;
	color: #fff;
	padding: 50px 0;
`;

const Title = styled.h1`
	margin: 0;
	font-weight: normal;
`;

const Desc = styled.p`
	color: #aaa;
	font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
	display: grid;
	grid-template-columns: 0.9fr 1.1fr;
	gap: 40px;
	img {
		max-width: 100%;
		max-height: 250px;
	}
`;

const Column = styled.div`
	display: flex;
	align-items: center;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	gap: 5px;
`;

export default function Featured() {
	return (
		<Bg>
			<Center>
				<ColumnsWrapper>
					<Column>
						<div>
							<Title>Pro anywhere</Title>
							<Desc>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
							</Desc>
							<ButtonsWrapper>
								<Button outline white size={"l"}>
									Read More
								</Button>
								<Button primary size={"l"}>
									Add to Cart
								</Button>
							</ButtonsWrapper>
						</div>
					</Column>
					<Column>
						<img
							src="https://nate-next-ecommerce.s3.amazonaws.com/1683475620408.jpg"
							alt="Macbook Pro"
						/>
					</Column>
				</ColumnsWrapper>
			</Center>
		</Bg>
	);
}
