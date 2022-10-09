import Link from "next/link";

import Cart from "../cart/cart";
import WishList from "../wish-list/wish-list";

import { useSelector, useDispatch } from "react-redux";
import { selectIsOpen, toggleCart } from "../../store/cart/cart.slice";
import {
	selectWishListIsOpen,
	toggleWishList,
} from "../../store/wish-list/wish-list.slice";

const NavBar = () => {
	const dispatch = useDispatch();

	const cartIsOpen = useSelector(selectIsOpen);
	const wishListIsOpen = useSelector(selectWishListIsOpen);

	return (
		<div className="bg-white shadow-lg shadow-gray-9001">
			<div className="max-w-6xl w-screen flex justify-between items-center flex-row mx-auto">
				<Link href="/">
					<a>
						<img className="ml-10 h-16 p-2" src="./fifthTees.png" alt="" />
					</a>
				</Link>
				<div className="flex items-center mr-10">
					<div className="font-medium text-orange-900 flex items-center space-x-2 mr-4">
						<Link href="/t-shirts">
							<a className="relative flex px-5 items-center justify-center h-12 rounded-full hover:bg-gray-100 group duration-300">
								T-Shirts
							</a>
						</Link>
						<Link href="/stickers">
							<a className="relative flex px-5 items-center justify-center h-12 rounded-full hover:bg-gray-100 group duration-300">
								Stickers
							</a>
						</Link>
					</div>
					<div className="text-orange-800 flex items-center space-x-2">
						<div className="relative">
							<button
								onClick={() => {
									dispatch(toggleWishList());
									cartIsOpen && dispatch(toggleCart());
								}}
								className="relative flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 group duration-300"
							>
								<i className="fa-lg fa-solid fa-heart"></i>
								<div className="opacity-0 text-center w-max p-1 px-2 text-xs top-12 absolute bg-yellow-900 text-white rounded-xl group-hover:opacity-100 duration-300">
									Wish List
								</div>
							</button>
							{wishListIsOpen && (
								<div className="bg-white top-16 right-0 absolute p-4 w-max z-50 rounded-md shadow-2xl">
									<WishList />
								</div>
							)}
						</div>
						<div className="relative">
							<button
								onClick={() => {
									dispatch(toggleCart());
									wishListIsOpen && dispatch(toggleWishList());
								}}
								className="relative flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 group duration-300"
							>
								<i className="fa-lg fa-solid fa-cart-shopping"></i>
								<div className="opacity-0 text-center w-max p-1 px-2 text-xs top-12 absolute bg-yellow-900 text-white rounded-xl group-hover:opacity-100 duration-300">
									Cart
								</div>
							</button>
							{cartIsOpen && (
								<div className="bg-white top-16 right-0 absolute p-4 w-max z-50 rounded-md shadow-2xl">
									<Cart />
								</div>
							)}
						</div>
						<div className="relative flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 group duration-300">
							<i className="fa-lg fa-solid fa-user"></i>
							<div className="opacity-0 text-center w-max p-1 px-2 text-xs top-12 absolute bg-yellow-900 text-white rounded-xl group-hover:opacity-100 duration-300">
								Account
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
