"use client";

import { useSelector, useDispatch } from "react-redux";
import {
	selectItems,
	selectTotalPrice,
	toggleCart,
	closeCart,
} from "../../store/cart/cart.slice";

import { useRef, useEffect } from "react";

import CartItem from "./cart-item";
import Link from "next/link";

const Cart = (props) => {
	const { cartButtonRef, themeButtonRef } = props;

	const ref = useRef(null);
	const dispatch = useDispatch();

	const items = useSelector(selectItems);
	const totalPrice = useSelector(selectTotalPrice);

	useEffect(() => {
		function handleClickOutside(event) {
			// console.log("cartref", cartButtonRef);
			if (
				ref.current &&
				!ref.current.contains(event.target) &&
				!cartButtonRef.current.contains(event.target) &&
				!themeButtonRef.current.contains(event.target)
			) {
				// alert("You clicked outside of me!");
				dispatch(closeCart());
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<div ref={ref} className="p-4">
			{items.length ? (
				<div className="space-y-3 pb-1 max-h-[calc(100vh-7rem)] overflow-scroll scrollbar-hide rounded-xl">
					<h2 className="p-2 text-black dark:text-white">My Cart</h2>
					{items.map((item, index) => (
						<CartItem key={`${item.id}-${item.size}`} item={item} />
					))}
					<p className="text-right w-full p-2 px-4 text-gray-500 dark:text-white font-md font-poppins">
						Total: HK${totalPrice}
					</p>
					<button
						className="w-full bg-orange-400 p-3 rounded-xl text-white text-center hover:bg-orange-200 hover:text-orange-600 duration-200 shadow-lg"
						onClick={() => {
							alert("Checkout feature coming soon");
						}}
					>
						Check Out
					</button>
				</div>
			) : (
				<div className="flex items-center justify-center flex-col w-60 h-60 space-y-4">
					<div className="">Your cart is empty.</div>
					<Link href="/products">
						<p
							className="bg-black rounded-full p-2 px-3 text-white shadow-xl"
							onClick={() => {
								dispatch(toggleCart());
							}}
						>
							Shop Now
						</p>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
