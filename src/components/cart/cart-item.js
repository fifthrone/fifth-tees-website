import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../../store/cart/cart.slice";

const CartItem = ({ item }) => {
	const dispatch = useDispatch();

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
			<img className="w-24 rounded-md" src={imageUrl} alt="" />
			<div className="w-36 text-md space-y-2">
				<h2 className=" text-black dark:text-white">{title}</h2>
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
