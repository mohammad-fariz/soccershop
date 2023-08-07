import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Ratings from "./Ratings";
import { CartState } from "../context/Context";

const Filters = () => {
	const {
		productDispatch,
		productState: { byStock, byFastDelivery, sort, byRating },
	} = CartState();
	return (
		<div className="filters">
			<span className="title">Filter Products</span>
			<span>
				<Form.Check
					inline
					label="High to low prices"
					name="group1"
					type="radio"
					id={"inline-1"}
					onChange={() =>
						productDispatch({
							type: "SORT_BY_PRICE",
							payload: "lowToHigh",
						})
					}
					checked={sort === "lowToHigh" ? true : false}
				/>
			</span>
			<span>
				<Form.Check
					inline
					label="Low to high prices"
					name="group1"
					type="radio"
					id={"inline-2"}
					onChange={() =>
						productDispatch({
							type: "SORT_BY_PRICE",
							payload: "highToLow",
						})
					}
					checked={sort === "highToLow" ? true : false}
				/>
			</span>
			<span>
				<Form.Check
					inline
					label="include out of stock"
					name="group1"
					type="checkbox"
					id={"inline-3"}
					onChange={() =>
						productDispatch({
							type: "FILTER_BY_STOCK",
						})
					}
					checked={byStock}
				/>
			</span>
			<span>
				<Form.Check
					inline
					label="Fast delivery only"
					name="group1"
					type="checkbox"
					id={"inline-4"}
					onChange={() =>
						productDispatch({
							type: "FILTER_BY_DELIVERY",
						})
					}
					checked={byFastDelivery}
				/>
			</span>
			<span>
				<label style={{ paddingRight: 10 }}>Ratings: </label>
				<Ratings
					rating={byRating}
					onClick={(i) =>
						productDispatch({
							type: "FILTER_BY_RATING",
							payload: i + 1,
						})
					}
					style={{ cursor: "pointer" }}
				/>
			</span>
			<Button
				variant="light"
				onClick={() =>
					productDispatch({
						type: "CLEAR_FILTERS",
					})
				}
			>
				Clear Filters
			</Button>
		</div>
	);
};

export default Filters;
