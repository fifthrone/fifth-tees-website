import Link from "next/link";

import { useRef, useState } from "react";

import Cart from "../cart/cart";
import WishList from "../wish-list/wish-list";
import { Transition } from "react-transition-group";

import { useSelector, useDispatch } from "react-redux";
import { selectIsOpen, toggleCart } from "../../store/cart/cart.slice";
import {
	selectWishListIsOpen,
	toggleWishList,
} from "../../store/wish-list/wish-list.slice";

const transitionStyles = {
	entering: { transform: "translateX(0%)" },
	entered: { transform: "translateX(0%)" },
	exiting: { transform: "translateX(100%)" },
	exited: { transform: "translateX(100%)" },
};

const NavBar = () => {
	const dispatch = useDispatch();

	const cartIsOpen = useSelector(selectIsOpen);
	const wishListIsOpen = useSelector(selectWishListIsOpen);

	const wishListButtonRef = useRef(null);
	const cartButtonRef = useRef(null);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="bg-white shadow-lg shadow-gray-9001">
			<div className="max-w-6xl w-full flex justify-between items-center flex-row mx-auto px-10">
				<Link href="/">
					<a>
						<img className="h-16 p-2" src="./fifthTees.png" alt="" />
					</a>
				</Link>
				<button
					className="flex md:hidden border1 flex-col space-y-1 p-4"
					onClick={() => {
						setIsMobileMenuOpen(!isMobileMenuOpen);
					}}
				>
					<span className="bg-orange-900 h-0.5 rounded-full w-5"></span>
					<span className="bg-orange-900 h-0.5 rounded-full w-5"></span>
					<span className="bg-orange-900 h-0.5 rounded-full w-5"></span>
				</button>
				<Transition
					in={isMobileMenuOpen}
					timeout={500}
					mountOnEnter={true}
					unmountOnExit={true}
				>
					{(state) => (
						<div
							style={{
								transitionProperty: "all",
								transitionDuration: "500ms",
								...transitionStyles[state],
							}}
							className="fixed right-0 top-0 h-screen1 bg-gray-100 rounded-xl shadow-xl z-40 md:hidden"
						>
							<div className="flex flex-col space-y-4 p-8 font-poppins">
								<button
									onClick={() => {
										setIsMobileMenuOpen(false);
									}}
									className="border1 flex p-2 justify-end"
								>
									<i className="fa-lg fa-solid fa-xmark"></i>
								</button>
								<Link href="/products">
									<a className="p-2 text-black hover:bg-gray-300 rounded-xl">
										<p>All Products</p>
									</a>
								</Link>
								<Link href="/t-shirts">
									<a className="p-2 text-black">
										<p>T-Shirts</p>
									</a>
								</Link>
								<Link href="/stickers">
									<a className="p-2 text-black">
										<p>Stickers</p>
									</a>
								</Link>
								<Link href="/cart">
									<a className="p-2 text-black flex flex-row items-center space-x-2 text-sm">
										<i className="fa-lg fa-solid fa-cart-shopping"></i>
										<p className="text-base">My Cart</p>
									</a>
								</Link>
								<Link href="/wish-list">
									<a className="p-2 text-black flex flex-row items-center space-x-2 text-sm">
										<i className="fa-lg fa-solid fa-heart"></i>
										<p className="text-base">Wish List</p>
									</a>
								</Link>
								<Link href="/account">
									<a className="p-2 text-black flex flex-row items-center space-x-2 text-sm">
										<i className="fa-lg fa-solid fa-user"></i>
										<p className="text-base">Account</p>
									</a>
								</Link>
							</div>
						</div>
					)}
				</Transition>
				<div className="hidden md:flex items-center">
					<div className="font-medium text-orange-900 flex items-center space-x-2 mr-4">
						<Link href="/products">
							<a className="relative flex px-5 items-center justify-center h-12 rounded-full hover:bg-gray-100 group duration-300 font-poppins text-sm">
								All Products
							</a>
						</Link>
						<Link href="/t-shirts">
							<a className="relative flex px-5 items-center justify-center h-12 rounded-full hover:bg-gray-100 group duration-300 font-poppins text-sm">
								T-Shirts
							</a>
						</Link>
						<Link href="/stickers">
							<a className="relative flex px-5 items-center justify-center h-12 rounded-full hover:bg-gray-100 group duration-300 font-poppins text-sm">
								Stickers
							</a>
						</Link>
					</div>
					<div className="text-orange-800 flex items-center space-x-2">
						<div className="relative">
							<button
								ref={wishListButtonRef}
								onClick={() => {
									dispatch(toggleWishList());
								}}
								className="relative flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 group duration-300"
							>
								<i className="fa-lg fa-solid fa-heart"></i>
								<div className="opacity-0 text-center w-max p-1 px-2 text-xs top-12 absolute bg-yellow-900 text-white rounded-xl group-hover:opacity-100 duration-300">
									Wish List
								</div>
							</button>
							{wishListIsOpen && (
								<div className="bg-white top-16 right-0 absolute w-max z-50 rounded-md shadow-2xl">
									<WishList wishListButtonRef={wishListButtonRef} />
								</div>
							)}
						</div>
						<div className="relative">
							<button
								ref={cartButtonRef}
								onClick={() => {
									dispatch(toggleCart());
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
									<Cart cartButtonRef={cartButtonRef} />
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
