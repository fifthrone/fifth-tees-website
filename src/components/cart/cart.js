import { useSelector } from "react-redux";
import { selectItems, selectTotalPrice } from "../../store/cart/cart.slice";

import CartItem from "./cart-item";

const Cart = () => {
	const items = useSelector(selectItems);
	const totalPrice = useSelector(selectTotalPrice);

	return (
		<>
			{items.length ? (
				<div className="space-y-3 pb-1">
					<h2 className="p-2 text-black">My Cart</h2>
					{items.map((item) => (
						<CartItem key={item.id} item={item} />
					))}
					<p className="text-right w-full p-2 px-4 text-gray-500 font-md">
						Total: HK${totalPrice}
					</p>
					<button
						className="w-full bg-orange-400 p-3 rounded-xl text-white text-center hover:bg-orange-200 hover:text-orange-600 duration-200 shadow-lg"
					>
						Check Out
					</button>
				</div>
			) : (
				<div className="flex items-center justify-center flex-col w-60 h-60 space-y-4">
					<div className="">Your Cart is empty.</div>
					<button className="bg-orange-500 rounded-full p-2 px-3 text-white shadow-xl">Shop Now</button>
				</div>
			)}
		</>
	);
};

export default Cart;
