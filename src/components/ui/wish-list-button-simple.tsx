"use client";

import { useDispatch, useSelector } from "react-redux";
import {
	addWishListItems,
	removeWishListItems,
	selectWishListItemIds,
} from "../../store/wish-list/wish-list.slice";

import { Product } from "../../ts/types";

interface WishListButtonSimpleProps {
	product: Product;
}

const WishListButtonSimple = ({ product }: WishListButtonSimpleProps) => {
	const dispatch = useDispatch();
	const wishListItemIds = useSelector(selectWishListItemIds);
	const isInWishList = wishListItemIds.includes(product.id);

	return (
		<button
			onClick={() => {
				isInWishList
					? dispatch<any>(removeWishListItems(product))
					: dispatch<any>(addWishListItems(product));
			}}
			className="bg-white dark:bg-neutral-600 absolute top-5 right-5 h-10 w-10 rounded-full flex items-center justify-center shadow-md hover:-translate-y-0.5 duration-200 group-heart z-10"
		>
			{isInWishList ? (
				<i className="text-red-200 fa-lg fa-solid fa-heart group-heart-hover:scale-110 group-heart-hover:text-red-200 duration-200"></i>
			) : (
				<i className="text-gray-400 fa-lg fa-regular fa-heart group-heart-hover:scale-110 group-heart-hover:text-red-200 duration-200"></i>
			)}
		</button>
	);
};

export default WishListButtonSimple;
