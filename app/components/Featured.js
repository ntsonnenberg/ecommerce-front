"use client";
import { styled } from "styled-components";
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

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 0.8fr 1.2fr;
	gap: 40px;
	img {
		max-width: 100%;
	}
`;

const Column = styled.div`
	display: flex;
	align-items: center;
`;

export default function Featured() {
	return (
		<Bg>
			<Center>
				<Wrapper>
					<Column>
						<div>
							<Title>Pro anywhere</Title>
							<Desc>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
							</Desc>
							<Button white size="l">
								Read More
							</Button>
							<Button primary size="l">
								Add to Cart
							</Button>
						</div>
					</Column>
					<Column>
						<img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_heros/hero-banner-macbook-pro.image.large_2x.jpg" />
					</Column>
				</Wrapper>
			</Center>
		</Bg>
	);
}
