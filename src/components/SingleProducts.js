import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Ratings";
import { CartState } from "../context/Context";
import Cart from "./Cart";

const SingleProducts = ({ prod }) => {
	const {
		state: { cart },
		dispatch,
	} = CartState();
	console.log(cart);
	return (
		<div className="products">
			<Card>
				<Card.Img variant="top" src={prod.image} alt={prod.name} />
				<Card.Title>{prod.name}</Card.Title>
				<Card.Body>
					<Card.Subtitle style={{ paddingBottom: 10 }}>
						<span>₹ {prod.price}</span>
						{prod.fastDelivery ? (
							<div>Fast delivery</div>
						) : (
							<div>5 days delivery</div>
						)}
						<Rating rating={prod.rating} />
					</Card.Subtitle>
					{cart?.some((p) => p.id === prod.id) ? (
						<Button
							onClick={() => {
								dispatch({
									type: "REMOVE_FROM_CART",
									payload: prod,
								});
							}}
							variant="danger"
						>
							Remove from cart
						</Button>
					) : (
						<Button
							onClick={() => {
								dispatch({
									type: "ADD_TO_CART",
									payload: prod,
								});
							}}
							disabled={!prod.inStock}
						>
							{!prod.inStock ? "Out of Stock" : "Add to cart"}
						</Button>
					)}
				</Card.Body>
			</Card>
		</div>
	);
};

export default SingleProducts;
