import { useDispatch, useSelector } from "react-redux";
import {
	addWishListItems,
	removeWishListItems,
	selectWishListItemsIndex,
} from "../../store/wish-list/wish-list.slice";

const ProductCardClean = (props) => {
	const {
		id,
		imageUrl,
		imageUrl2,
		price,
		titleLine1,
		titleLine2,
		productType,
	} = props;

	const product = {
		id: id,
		imageUrl: imageUrl,
		imageUrl2: imageUrl2,
		price: price,
		title: titleLine1 + " " + titleLine2 + " " + productType,
	};

	const dispatch = useDispatch();
	const wishListItemsIndex = useSelector(selectWishListItemsIndex);
	const isInWishList = wishListItemsIndex.includes(id);

	return (
		<div className="relative p-5 w-full h-full rounded-3xl shadow-xl -z-20 bg-gray-700">
			<img
				className="absolute bottom-0 -right-5 rotate-2 -z-10 w-[230px]"
				src={imageUrl2}
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
			<h2 className="text-white font-poppins font-semibold  leading-tight text-md">
				{titleLine1}
			</h2>
			<h2 className="text-white font-poppins pt-0.5 font-semibold leading-tight text-md">
				{titleLine2}
			</h2>
			<h3 className="text-white pt-2 text-xs font-poppins font-extralight">
				{productType}
			</h3>
			<h3 className="text-white pt-2 font-poppins font-semibold text-sm">
				{`$${price}`}
			</h3>
			<button className="absolute p-1 px-5 bg-white bottom-5 left-5 rounded-full font-poppins text-black font-semibold text-md hover:-translate-y-0.5 duration-200 shadow-xl hover:shadow-2xl">
				Buy
			</button>
		</div>
	);
};

export default ProductCardClean;
