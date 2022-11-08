"use client";

import Link from "next/link";

import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "next-themes";

import Cart from "../cart/cart";
import WishList from "../wish-list/wish-list";
import Account from "../account/account";
import { Transition } from "react-transition-group";

import { selectIsOpen, toggleCart } from "../../store/cart/cart.slice";
import {
	selectAccountIsOpen,
	toggleAccount,
} from "../../store/account/account.slice";
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
	const { theme, setTheme } = useTheme();

	const cartIsOpen = useSelector(selectIsOpen);
	const wishListIsOpen = useSelector(selectWishListIsOpen);
	const accountIsOpen = useSelector(selectAccountIsOpen);

	const wishListButtonRef = useRef(null);
	const cartButtonRef = useRef(null);
	const accountButtonRef = useRef(null);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="bg-white dark:bg-neutral-800 shadow-lg shadow-gray-9001">
			<nav className="max-w-6xl w-full flex justify-between items-center flex-row mx-auto sm:px-10 px-2">
				<Link href="/">
					<img className="h-16 p-2" src="./fifthTees.png" alt="" />
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
									<p className="p-2 text-black hover:bg-gray-300 rounded-xl">
										<p>All Products</p>
									</p>
								</Link>
								<Link href="/t-shirts">
									<p className="p-2 text-black">
										<p>T-Shirts</p>
									</p>
								</Link>
								<Link href="/stickers">
									<p className="p-2 text-black">
										<p>Stickers</p>
									</p>
								</Link>
								<Link href="/cart">
									<div className="p-2 text-black flex flex-row items-center space-x-2 text-sm">
										<i className="fa-lg fa-solid fa-cart-shopping"></i>
										<p className="text-base">My Cart</p>
									</div>
								</Link>
								<Link href="/wish-list">
									<div className="p-2 text-black flex flex-row items-center space-x-2 text-sm">
										<i className="fa-lg fa-solid fa-heart"></i>
										<p className="text-base">Wish List</p>
									</div>
								</Link>
								<Link href="/account">
									<div className="p-2 text-black flex flex-row items-center space-x-2 text-sm">
										<i className="fa-lg fa-solid fa-user"></i>
										<p className="text-base">Account</p>
									</div>
								</Link>
							</div>
						</div>
					)}
				</Transition>
				<div className="hidden md:flex items-center">
					<div className="font-medium text-orange-900 dark:text-white flex items-center space-x-2 mr-4">
						<Link href="/products">
							<p className="relative flex px-5 items-center justify-center h-12 rounded-full hover:bg-gray-100 group duration-300 font-poppins text-sm">
								All Products
							</p>
						</Link>
						<Link href="/t-shirts">
							<p className="relative flex px-5 items-center justify-center h-12 rounded-full hover:bg-gray-100 group duration-300 font-poppins text-sm">
								T-Shirts
							</p>
						</Link>
						<Link href="/stickers">
							<p className="relative flex px-5 items-center justify-center h-12 rounded-full hover:bg-gray-100 group duration-300 font-poppins text-sm">
								Stickers
							</p>
						</Link>
					</div>
					<div className="text-orange-800 dark:text-white flex items-center space-x-2">
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
						<div className="relative">
							<button
								ref={accountButtonRef}
								onClick={() => {
									dispatch(toggleAccount());
								}}
								className="relative flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 group duration-300"
							>
								<i className="fa-lg fa-solid fa-user"></i>
								<div className="opacity-0 text-center w-max p-1 px-2 text-xs top-12 absolute bg-yellow-900 text-white rounded-xl group-hover:opacity-100 duration-300">
									Account
								</div>
							</button>
							{accountIsOpen && (
								<div className="bg-white top-16 right-0 absolute p-4 w-max z-50 rounded-md shadow-2xl max-w-sm">
									<Account accountButtonRef={accountButtonRef} />
								</div>
							)}
						</div>
						<button
							onClick={() => {
								theme === "dark" ? setTheme("light") : setTheme("dark");
							}}
						>
							d/l
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
