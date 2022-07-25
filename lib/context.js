import React, { createContext, useContext, useState } from "react";
import { Context } from "urql";

const ShopContext = createContext();

export const StateContext = (props) => {
	//State
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [qty, setQty] = useState(1);
	const [totalQuantities, setTotalQuantities] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	//Increase product quantity

	const increaseQty = () => {
		setQty((prevQty) => prevQty + 1);
	};

	//Decrease product quantity

	const decreaseQty = () => {
		setQty((prevQty) => {
			if (prevQty - 1 < 1) {
				return 1;
			} else {
				return prevQty - 1;
			}
		});
	};

	//Add product to Cart
	const onAdd = (product, quantity) => {
		//Total Price
		setTotalPrice((prevTotal) => prevTotal + product.price * quantity);

		//Increase total quantity
		setTotalQuantities((prevState) => prevState + quantity);

		//Check if the product is already in the cart
		const exist = cartItems.find((item) => item.slug === product.slug);
		if (exist) {
			setCartItems(
				cartItems.map((item) =>
					item.slug === product.slug
						? { ...exist, quantity: exist.quantity + quantity }
						: item
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, quantity: quantity }]);
		}
	};

	//Remove product
	const onRemove = (product) => {
		//Total Price
		setTotalPrice((prevTotal) => prevTotal - product.price);

		//Decrease total quantity
		setTotalQuantities((prevState) => prevState - 1);

		const exist = cartItems.find((item) => item.slug === product.slug);
		if (exist.quantity === 1) {
			setCartItems(cartItems.filter((item) => item.slug !== product.slug));
		} else {
			setCartItems(
				cartItems.map((item) =>
					item.slug === product.slug
						? { ...exist, quantity: exist.quantity - 1 }
						: item
				)
			);
		}
	};

	return (
		<ShopContext.Provider
			value={{
				qty,
				increaseQty,
				decreaseQty,
				showCart,
				setShowCart,
				cartItems,
				onAdd,
				onRemove,
				totalQuantities,
				totalPrice,
				setQty,
			}}
		>
			{props.children}
		</ShopContext.Provider>
	);
};
export const useStateContext = () => useContext(ShopContext);
