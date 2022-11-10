import { useDispatch } from "react-redux";
import { removeWishListItems } from "../../store/wish-list/wish-list.slice";

const WishListItem = ({ item }) => {
	const dispatch = useDispatch();

	const { id, imageUrl, imageUrl2, title, price } = item;

	return (
		<div className="flex flex-row space-x-3">
			<img className="w-24 rounded-md" src={imageUrl} alt="" />
			<div className="w-36 text-sm space-y-2 text-black dark:text-white">
				<h2>{title}</h2>
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
