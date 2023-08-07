import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Ratings from "./Ratings";

const Filters = () => {
	const [rate, setRate] = useState(4);
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
				/>
			</span>
			<span>
				<Form.Check
					inline
					label="Low to high prices"
					name="group1"
					type="radio"
					id={"inline-2"}
				/>
			</span>
			<span>
				<Form.Check
					inline
					label="include out of stock"
					name="group1"
					type="checkbox"
					id={"inline-3"}
				/>
			</span>
			<span>
				<Form.Check
					inline
					label="Fast delivery only"
					name="group1"
					type="checkbox"
					id={"inline-4"}
				/>
			</span>
			<span>
				<label style={{ paddingRight: 10 }}>Ratings: </label>
				<Ratings
					rating={rate}
					onClick={(i) => setRate(i + 1)}
					style={{ cursor: "pointer" }}
				/>
			</span>
			<Button variant="light">Clear Filters</Button>
		</div>
	);
};

export default Filters;
