import { useDispatch, useSelector } from "react-redux";
import {
	addWishListItems,
	removeWishListItems,
	selectWishListItemIds,
} from "../../store/wish-list/wish-list.slice";
import { selectProductById } from "../../store/products/products.slice";
import Link from "next/link";

const ProductCardClean = ({ product }) => {
	// const product = useSelector(selectProductById(productId));
	const { id, imageMaskedUrl, price, title, type } = product;

	const dispatch = useDispatch();
	const wishListItemsIndex = useSelector(selectWishListItemIds);
	const isInWishList = wishListItemsIndex.includes(id);

	return (
		<div className="relative p-5 w-full h-full rounded-3xl shadow-xl -z-20 bg-gray-700">
			<img
				className="absolute bottom-0 -right-5 rotate-2 -z-10 w-[230px]"
				src={imageMaskedUrl}
				alt=""
			/>
			<button
				onClick={() => {
					isInWishList
						? dispatch(removeWishListItems(product))
						: dispatch(addWishListItems(product));
				}}
				className="absolute top-5 right-5 z-50"
			>
				{isInWishList ? (
					<i className="text-red-400 fa-solid fa-heart scale-100 hover:scale-110 duration-200"></i>
				) : (
					<i className="text-white fa-solid fa-heart scale-100 hover:scale-110 duration-200"></i>
				)}
			</button>
			<div className="w-[calc(100%-25px)]">
				<Link href={`/${id}`}>
					<a className="text-white font-poppins font-semibold  leading-tight text-md w-[calc(100%-25px)] hover:underline">
						{title}
					</a>
				</Link>
			</div>
			<h3 className="text-white pt-2 text-xs font-poppins font-extralight">
				{type}
			</h3>
			<h3 className="text-white pt-2 font-poppins font-semibold text-sm">
				{`$${price}`}
			</h3>
			<Link href={`/${id}`}>
				<a className="absolute p-1 px-5 bg-white bottom-5 left-5 rounded-full font-poppins text-black font-semibold text-md hover:-translate-y-0.5 duration-200 shadow-xl hover:shadow-2xl">
					Buy
				</a>
			</Link>
		</div>
	);
};

export default ProductCardClean;
