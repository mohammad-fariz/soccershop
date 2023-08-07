import React from "react";
import {
	Badge,
	Button,
	Container,
	Dropdown,
	FormControl,
	Nav,
	Navbar,
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

function Header() {
	const {
		state: { cart },
		dispatch,
	} = CartState();
	return (
		<Navbar bg="dark" variant="dark" style={{ height: 80 }}>
			<Container>
				<Navbar.Brand>
					<Link to="/">Soccer Shop</Link>
				</Navbar.Brand>
				<Navbar.Text className="search">
					<FormControl
						style={{ width: 600 }}
						placeholder="Search a product"
						className="m-auto"
					/>
				</Navbar.Text>
				<Nav>
					<Dropdown alignRight>
						<Dropdown.Toggle variant="success">
							<FaShoppingCart color="white" fontSize="25px" />
							<Badge bg="green">{cart.length}</Badge>
						</Dropdown.Toggle>
						<Dropdown.Menu style={{ minWidth: 400 }}>
							{cart.length > 0 ? (
								<>
									{cart.map((prod) => (
										<span
											className="cartItem"
											key={prod.id}
										>
											<img
												src={prod.image}
												className="cartItemImg"
												alt={prod.name}
											/>
											<div className="cartItemDetail">
												<span>{prod.name}</span>
												<span>₹ {prod.price}</span>
												<AiFillDelete
													fontSize="20px"
													style={{
														cursor: "pointer",
													}}
													onClick={() =>
														dispatch({
															type: "REMOVE_FROM_CART",
															payload: prod,
														})
													}
												/>
											</div>
										</span>
									))}
									<Link to="/cart">
										<Button
											style={{
												width: "95%",
												margin: "0 10px",
												alignContent: "center",
											}}
										>
											Go to cart
										</Button>
									</Link>
								</>
							) : (
								<span style={{ padding: 10 }}>
									Cart is Empty!
								</span>
							)}
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Header;
