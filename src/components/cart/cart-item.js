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
	console.log(item);

	return (
		<div className="flex flex-row space-x-3">
			<img className="w-24 rounded-md" src={imageUrl} alt="" />
			<div className="w-36 text-md text-black space-y-2">
				<h2>{title}</h2>
				<p className="text-sm text-gray-500 font-bold">HK${price}</p>
				<p className="text-xs">Size: {size}</p>
			</div>
			<div className="flex flex-col items-center justify-center space-y-2">
				<button
					onClick={() => {
						dispatch(addItems({ ...item, qty: 1 }));
					}}
					className="bg-gray-200 w-8 h-8 p-1 rounded-full"
				>
					+
				</button>
				<div>{qty}</div>
				<button
					onClick={() => {
						dispatch(removeItems(item));
					}}
					className="bg-gray-200 w-8 h-8 p-1 rounded-full"
				>
					-
				</button>
			</div>
		</div>
	);
};

export default CartItem;
