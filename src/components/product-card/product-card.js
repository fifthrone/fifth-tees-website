import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../store/cart/cart.slice";
import {
	addWishListItems,
	removeWishListItems,
	selectWishListItemsIndex,
} from "../../store/wish-list/wish-list.slice";

const ProductCard = (props) => {
	const {product, className} = props;
	const { id, imageUrl, price, title, type } = product;

	const dispatch = useDispatch();
	const wishListItemsIndex = useSelector(selectWishListItemsIndex);
	const isInWishList = wishListItemsIndex.includes(id);

	return (
		<div className={`${className}`}>
			<div className="relative hover:scale-[101%] duration-500">
				<button
					onClick={() => {
						isInWishList
							? dispatch(removeWishListItems(product))
							: dispatch(addWishListItems(product));
					}}
					className="bg-white absolute top-5 right-5 h-10 w-10 rounded-full flex items-center justify-center shadow-md hover:-translate-y-0.5 duration-200 group-heart z-10"
				>
					{isInWishList ? (
						<i className="text-red-200 fa-lg fa-solid fa-heart group-heart-hover:scale-110 group-heart-hover:text-red-200 duration-200"></i>
					) : (
						<i className="text-gray-400 fa-lg fa-regular fa-heart group-heart-hover:scale-110 group-heart-hover:text-red-200 duration-200"></i>
					)}
				</button>
				<Link href={`/${id}`}>
					<a className="p-3 flex flex-col bg-white rounded-2xl shadow-lg space-y-3 relative">
						<img
							src={imageUrl}
							alt="t-shirt"
							className="rounded-xl object-contain hover:scale-100 duration-200"
						/>
						<div className="px-3 space-y-1">
							<h2 className="text-sm">{title} {type}</h2>
							<p className="text-gray-600 text-sm">HK${price}</p>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
