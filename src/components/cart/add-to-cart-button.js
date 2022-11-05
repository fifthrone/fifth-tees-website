"use client";

import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

import { addItems, toggleCart } from "../../store/cart/cart.slice";
import { selectSize } from "../../store/size/size.slice";

const wait = async (ms) => (
	new Promise((resolve) => setTimeout(resolve, ms))
);

const AddToCartButton = (props) => {
	const { product, className } = props;
	const { type, size } = product;
	const tShirtSize = useSelector(selectSize);

	const [buttonState, setButtonState] = useState("await");
	const dispatch = useDispatch();

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
		dispatch(toggleCart());
		setButtonState("added");
		await wait(1000);
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
