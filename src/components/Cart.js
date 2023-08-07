import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import {
	Button,
	Col,
	Form,
	FormControl,
	Image,
	ListGroup,
	Row,
} from "react-bootstrap";
import Rating from "./Ratings";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
	const {
		state: { cart },
		dispatch,
	} = CartState();
	const [total, setTotal] = useState();
	useEffect(() => {
		setTotal(
			cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
		);
	}, [cart]);

	return (
		<div className="home">
			<div className="productContainer">
				<ListGroup>
					{cart.map((prod) => (
						<ListGroup>
							<Row>
								<Col md={3}>
									<Image
										src={prod.image}
										alt={prod.image}
										fluid
										rounded
									/>
								</Col>
								<Col md={3}>
									<span>{prod.name}</span>
								</Col>
								<Col md={2}>₹ {prod.price}</Col>
								<Col md={5}>
									<Rating rating={prod.rating} />
								</Col>
								<Col md={1}>
									<Form.Control as="select" value={prod.qty}>
										{[...Array(prod.inStock).keys()].map(
											(x) => (
												<option key={x + 1}>
													{x + 1}
												</option>
											)
										)}
									</Form.Control>
								</Col>
								<Col md={2}>
									<Button
										type="button"
										variant="light"
										onClick={() =>
											dispatch({
												type: "REMOVE_FROM_CART",
												payload: prod,
											})
										}
									>
										<AiFillDelete fontSize="20px" />
									</Button>
								</Col>
							</Row>
						</ListGroup>
					))}
				</ListGroup>
			</div>
			<div className="filters summary">
				<span className="title">Subtotal ({cart.length}) items</span>
				<span style={{ fontSize: 20, fontWeight: 700 }}>
					Total: ₹ {total}
				</span>
				<Button type="button" disabled={cart.length === 0}>
					{" "}
					Proceed to checkout{" "}
				</Button>
			</div>
		</div>
	);
};

export default Cart;
