"use client";

import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

import {
	addItems,
	// postData,
	selectItems,
	openCart,
	toggleCart,
} from "../../store/cart/cart.slice";
import { selectSize } from "../../store/size/size.slice";

// import { updateUserCart } from "../../utils/firebase/firebase.utils";
import { selectUser } from "../../store/account/account.slice";
import { AppDispatch, AppThunk } from "../../store/store";
import { Product } from "../../ts/types";

interface AddToCartButtonProps {
	product: Product;
	className: string;
}

const wait = async (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

const AddToCartButton = (props: AddToCartButtonProps) => {
	const { product, className } = props;

	const dispatch = useDispatch<AppDispatch>();
	const { type, size } = product;
	const tShirtSize = useSelector(selectSize);

	const [buttonState, setButtonState] = useState("await");

	const user = useSelector(selectUser);
	const cartItems = useSelector(selectItems);

	const clickHandler = async () => {
		setButtonState("loading");
		await wait(700);

		dispatch(
			addItems({
				...product,
				size: type === "T-Shirt" ? tShirtSize : size,
				qty: 1,
			})
		);
		dispatch(openCart());
		// dispatch(postData());

		setButtonState("added");
		await wait(1000);
		// if (user) {
		// 	try {
		// 		await updateUserCart(user.uid, cartItems);
		// 		console.log("updated cart");
		// 	} catch (error) {
		// 		console.log("error updating the cart", error.message);
		// 	}
		// }
		setButtonState("await");
	};

	return (
		<div className={`${className} h-12 bg-blueGray rounded-xl overflow-hidden`}>
			{buttonState === "await" && (
				<button
					onClick={clickHandler}
					className="flex flex-row items-center justify-center w-full text-white py-3 space-x-2 px-2 hover:bg-lightBlueGray"
				>
					<i className="pl-1 fa-solid fa-shopping-cart border1"></i>
					<p>Add to Cart</p>
				</button>
			)}
			<div className="flex flex-row items-center justify-center w-full text-white py-3 space-x-2 px-2">
				{buttonState === "loading" && (
					<>
						<div className="animate-spin h-4 w-1 bg-white rounded-full pl-2"></div>
						<p>Adding</p>
					</>
				)}
				{buttonState === "added" && (
					<>
						<i className="fa-solid fa-check border1 text-green-300 text-xl"></i>
						<p>Added</p>
					</>
				)}
			</div>
		</div>
	);
};

export default AddToCartButton;
