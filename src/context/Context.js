import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";

const cart = createContext();

export const Context = ({ children }) => {
	let products = [
		{
			id: "1",
			name: "Nike Football Shoes",
			price: 2000,

			image: "images/product.jpeg",
			inStock: 7,
			fastDelivery: true,
			rating: 5,
		},
		{
			id: "2",
			name: "Vector-x studds",
			price: 1200,

			image: "images/acura-vector-x-black-green-original-imafvdarswsm7rg5.webp",
			inStock: 3,
			fastDelivery: false,
			rating: 5,
		},
		{
			id: "3",
			name: "Adidas Football Shoes",
			price: 2200,

			image: "images/images.jpg",
			inStock: 0,
			fastDelivery: true,
			rating: 3,
		},

		{
			id: "4",
			name: "Barcelona Home-kit",
			price: 600,

			image: "images/barcelona-20-21-away-kit (4).jpg",
			inStock: 6,
			fastDelivery: true,
			rating: 4,
		},
		{
			id: "5",
			name: "Real Madrid Away-kit",
			price: 600,

			image: "images/i.jpg",
			inStock: 7,
			fastDelivery: true,
			rating: 4,
		},
		{
			id: "6",
			name: "Cosco Football",
			price: 500,

			image: "images/platina2019-front_27672466447.png",
			inStock: 6,
			fastDelivery: false,
			rating: 3,
		},
	];

	const [state, dispatch] = useReducer(cartReducer, {
		products: products,
		cart: [],
	});

	return (
		<cart.Provider value={{ state, dispatch }}>{children}</cart.Provider>
	);
};

// export const Context;
export const CartState = () => {
	return useContext(cart);
};
