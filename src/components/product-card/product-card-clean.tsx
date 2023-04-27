import { useDispatch, useSelector } from "react-redux";
import {
	addWishListItems,
	removeWishListItems,
	selectWishListItemIds,
} from "../../store/wish-list/wish-list.slice";
import Link from "next/link";
import Image from "next/image";
import { AppDispatch } from "../../store/store";
import { Product } from "../../ts/types";

interface ProductCardCleanProps {
	product: Product;
}

const ProductCardClean = ({ product }: ProductCardCleanProps) => {
	// const product = useSelector(selectProductById(productId));
	const { id, imageMaskedUrl, price, title, type } = product;

	const dispatch = useDispatch<AppDispatch>();
	const wishListItemsIndex = useSelector(selectWishListItemIds);
	const isInWishList = wishListItemsIndex.includes(id);

	return (
		<div className="relative p-3 sm:p-5 w-full h-full rounded-xl sm:rounded-3xl shadow-xl -z-20 bg-gray-700">
			<Image
				className="absolute bottom-5 sm:bottom-0 -right-5 rotate-2 -z-10 xw-[530px] w-auto h-auto max-h-52 tall:max-h-full"
				src={`/${imageMaskedUrl}`}
				height={300}
				width={300}
				alt=""
			/>
			<button
				onClick={() => {
					isInWishList
						? dispatch(removeWishListItems(product))
						: dispatch(addWishListItems(product));
				}}
				className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50"
			>
				{isInWishList ? (
					<i className="text-red-400 fa-solid fa-heart scale-100 hover:scale-110 duration-200"></i>
				) : (
					<i className="text-white fa-solid fa-heart scale-100 hover:scale-110 duration-200"></i>
				)}
			</button>
			<div className="w-[calc(100%-25px)]">
				<Link href={`/${id}`}>
					<p className="text-white font-poppins font-semibold leading-tight text-xs sm:text-base w-[calc(100%-25px)] hover:underline">
						{title}
					</p>
				</Link>
			</div>
			<h3 className="text-white pt-2 text-xs font-poppins font-extralight">
				{type}
			</h3>
			<h3 className="text-white pt-2 font-poppins font-semibold text-xs sm:text-sm">
				{`$${price}`}
			</h3>
			<Link href={`/${id}`}>
				<p className="absolute p-1 px-3 sm:px-5 bg-white bottom-3 sm:bottom-5 left-3 sm:left-5 rounded-full font-poppins text-black font-semibold text-md hover:-translate-y-0.5 duration-200 shadow-xl hover:shadow-2xl">
					Buy
				</p>
			</Link>
		</div>
	);
};

export default ProductCardClean;
