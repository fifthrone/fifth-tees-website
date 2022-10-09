import { useSelector } from "react-redux";
import { selectWishListItems } from "../../store/wish-list/wish-list.slice";

import WishListItem from "./wish-list-item";

const wishList = () => {
	const items = useSelector(selectWishListItems);

	return (
		<>
			{items.length ? (
				<div className="space-y-3 pb-1">
					<h2 className="p-2 text-black">Wish List</h2>
					{items.map((item) => (
						<WishListItem key={item.id} item={item} />
					))}
				</div>
			) : (
				<div className="flex items-center justify-center flex-col w-60 h-60 space-y-4">
					<div className="">Your Wish List is empty.</div>
					<button className="bg-orange-500 rounded-full p-2 px-3 text-white shadow-xl">Shop Now</button>
				</div>
			)}
		</>
	);
};

export default wishList;
