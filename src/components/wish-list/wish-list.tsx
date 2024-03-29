"use client";

import { useRef, useEffect, MutableRefObject } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	closeWishListTab,
	selectWishListItems,
	toggleWishList,
} from "../../store/wish-list/wish-list.slice";

import WishListItem from "./wish-list-item";
import Link from "next/link";

interface WishListProps {
	wishListButtonRef: MutableRefObject<HTMLButtonElement>;
	themeButtonRef: MutableRefObject<HTMLButtonElement>;
}

const WishList = (props: WishListProps) => {
	const { wishListButtonRef, themeButtonRef } = props;

	const items = useSelector(selectWishListItems);
	const dispatch = useDispatch();
	const ref = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			// console.log("wishref", wishListButtonRef);
			if (
				ref.current &&
				!ref.current.contains(event.target) &&
				!wishListButtonRef.current.contains(event.target) &&
				!themeButtonRef.current.contains(event.target)
			) {
				dispatch(closeWishListTab());
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, dispatch, themeButtonRef, wishListButtonRef]);

	return (
		<div ref={ref} className="p-4">
			{items.length ? (
				<div className="space-y-3 pb-1 max-h-[calc(100vh-7rem)] overflow-scroll scrollbar-hide rounded-xl">
					<h2 className="p-2 text-black dark:text-white">Wish List</h2>
					{items.map((item) => (
						<WishListItem key={item.id} item={item} />
					))}
				</div>
			) : (
				<div className="flex items-center justify-center flex-col w-60 h-60 space-y-4">
					<div className="">Your wish List is empty.</div>
					<Link href="/products">
						<p
							className="bg-black rounded-full p-2 px-3 text-white shadow-xl"
							onClick={() => {
								dispatch(toggleWishList());
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

export default WishList;
