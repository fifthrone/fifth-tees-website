"use client"

import { useSelector, useDispatch } from "react-redux";
import {
	selectItems,
	selectTotalPrice,
	toggleCart,
} from "../../store/cart/cart.slice";

import { useRef, useEffect } from "react";

import CartItem from "./cart-item";
import Link from "next/link";

const Cart = (props) => {
	const { cartButtonRef } = props;

	const ref = useRef(null);
	const dispatch = useDispatch();

	const items = useSelector(selectItems);
	const totalPrice = useSelector(selectTotalPrice);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				ref.current &&
				!ref.current.contains(event.target) &&
				!cartButtonRef.current.contains(event.target)
			) {
				// alert("You clicked outside of me!");
				dispatch(toggleCart());
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<div ref={ref}>
			{items.length ? (
				<div className="space-y-3 pb-1">
					<h2 className="p-2">My Cart</h2>
					{items.map((item) => (
						<CartItem key={item.id} item={item} />
					))}
					<p className="text-right w-full p-2 px-4 text-gray-500 dark:text-white font-md font-poppins">
						Total: HK${totalPrice}
					</p>
					<button className="w-full bg-orange-400 dark:bg-orange-600 p-3 rounded-xl text-white text-center hover:bg-orange-200 hover:text-orange-600 duration-200 shadow-lg">
						Check Out
					</button>
				</div>
			) : (
				<div className="flex items-center justify-center flex-col w-60 h-60 space-y-4">
					<div className="">Your Cart is empty.</div>
					<Link href="/products">
						<p className="bg-black rounded-full p-2 px-3 text-white shadow-xl" onClick={()=>{dispatch(toggleCart())}}>
							Shop Now
						</p>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
