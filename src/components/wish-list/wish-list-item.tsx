"use client";

import { useDispatch } from "react-redux";
import {
	removeWishListItems,
	closeWishListTab,
} from "../../store/wish-list/wish-list.slice";

import Image from "next/image";
import Link from "next/link";
import { AppDispatch } from "../../store/store";
import { Product } from "../../ts/types";

interface WishListItemProps {
	item: Product;
}

const WishListItem = ({ item }: WishListItemProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const { id, imageUrl, title } = item;

	return (
		<div className="flex flex-row space-x-3">
			<Link
				href={`/${id}`}
				onClick={() => {
					dispatch(closeWishListTab());
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
			<div className="w-36 text-sm space-y-2 text-black dark:text-white">
				<Link
					href={`/${id}`}
					className="hover:underline"
					onClick={() => {
						dispatch(closeWishListTab());
					}}
				>
					<h2>{title}</h2>
				</Link>
				<button
					onClick={() => {
						dispatch(removeWishListItems(item));
					}}
					className="text-red-800 dark:text-red-300 text-xs font-light"
				>
					remove
				</button>
			</div>
		</div>
	);
};

export default WishListItem;
