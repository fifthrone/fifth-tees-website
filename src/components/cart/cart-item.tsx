"use client";

import { useDispatch } from "react-redux";
import { addItems, removeItems, closeCart } from "../../store/cart/cart.slice";

import Image from "next/image";
import Link from "next/link";
import { AppDispatch } from "../../store/store";
import { CartItem, Product } from "../../ts/types";

interface CartItemProps {
	item: CartItem;
}

const CartItem = ({ item }: CartItemProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const {
		id,
		imageUrl,
		imageModelUrl,
		price,
		title,
		description,
		type,
		size,
		otherTypeId,
		relatedId,
		qty,
	} = item;

	return (
		<div className="flex flex-row space-x-3">
			<Link
				href={`/${id}`}
				onClick={() => {
					dispatch(closeCart());
				}}
			>
				<Image
					className="w-24 h-auto rounded-md hover:scale-105 duration-300"
					src={`/${imageUrl}`}
					alt=""
					width={200}
					height={200}
				/>
			</Link>
			<div className="w-36 text-md space-y-2">
				<Link
					href={`/${id}`}
					className="hover:underline text-black dark:text-white"
					onClick={() => {
						dispatch(closeCart());
					}}
				>
					{title}
				</Link>
				<p className="text-sm text-gray-500 dark:text-neutral-300 font-bold">
					HK${price}
				</p>
				<p className="text-xs  text-black dark:text-white">Size: {size}</p>
			</div>
			<div className="flex flex-col items-center justify-center space-y-2">
				<button
					onClick={() => {
						dispatch(addItems({ ...item, qty: 1 }));
					}}
					className="bg-gray-100 dark:bg-neutral-700 w-8 h-8 p-1 rounded-full  text-black dark:text-white flex items-center justify-center"
				>
					+
				</button>
				<div className="text-black text-lg dark:text-white">{qty}</div>
				<button
					onClick={() => {
						dispatch(removeItems(item));
					}}
					className="bg-gray-100 dark:bg-neutral-700 w-8 h-8 p-1 rounded-full text-black dark:text-white flex items-center justify-center"
				>
					-
				</button>
			</div>
		</div>
	);
};

export default CartItem;
