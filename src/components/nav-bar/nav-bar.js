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
	const themeButtonRef = useRef(null);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="bg-white dark:bg-neutral-800 shadow-lg shadow-gray-9001">
			<nav className="max-w-6xl w-full flex justify-between items-center flex-row mx-auto sm:px-10 px-2">
				<Link href="/">
					{theme === "dark" ? (
						<img
							className="h-12 sm:h-16 p-2"
							src="./fifthTeesDark.png"
							alt=""
						/>
					) : (
						<img className="h-12 sm:h-16 p-2" src="./fifthTees.png" alt="" />
					)}
				</Link>
				<button
					className="flex md:hidden border1 flex-col space-y-1 p-4"
					onClick={() => {
						setIsMobileMenuOpen(!isMobileMenuOpen);
					}}
				>
					<span className="bg-orange-900 dark:bg-red-100 h-0.5 rounded-full w-5"></span>
					<span className="bg-orange-900 dark:bg-red-100 h-0.5 rounded-full w-5"></span>
					<span className="bg-orange-900 dark:bg-red-100 h-0.5 rounded-full w-5"></span>
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
							className="fixed right-0 top-0 h-screen1 bg-gray-100 dark:bg-neutral-800 rounded-xl shadow-xl z-40 md:hidden"
						>
							<div className="flex flex-col space-y-4 p-8 font-poppinstext-black dark:text-white">
								<button
									onClick={() => {
										setIsMobileMenuOpen(false);
									}}
									className="border1 flex p-2 justify-end"
								>
									<i className="fa-lg fa-solid fa-xmark"></i>
								</button>
								<Link
									href="/products"
									onClick={() => {
										setIsMobileMenuOpen(false);
									}}
								>
									<p className="p-2 hover:bg-gray-300 rounded-xl">
										<p>All Products</p>
									</p>
								</Link>
								<Link
									href="/t-shirts"
									onClick={() => {
										setIsMobileMenuOpen(false);
									}}
								>
									<p className="p-2">
										<p>T-Shirts</p>
									</p>
								</Link>
								<Link
									href="/stickers"
									onClick={() => {
										setIsMobileMenuOpen(false);
									}}
								>
									<p className="p-2">
										<p>Stickers</p>
									</p>
								</Link>
								<Link
									href="/cart"
									onClick={() => {
										setIsMobileMenuOpen(false);
									}}
								>
									<div className="p-2 flex flex-row items-center space-x-2 text-sm">
										<i className="fa-lg fa-solid fa-cart-shopping"></i>
										<p className="text-base">My Cart</p>
									</div>
								</Link>
								<Link
									href="/wish-list"
									onClick={() => {
										setIsMobileMenuOpen(false);
									}}
								>
									<div className="p-2 flex flex-row items-center space-x-2 text-sm">
										<i className="fa-lg fa-solid fa-heart"></i>
										<p className="text-base">Wish List</p>
									</div>
								</Link>
								<Link
									href="/account"
									onClick={() => {
										setIsMobileMenuOpen(false);
									}}
								>
									<div className="p-2 flex flex-row items-center space-x-2 text-sm">
										<i className="fa-lg fa-solid fa-user"></i>
										<p className="text-base">Account</p>
									</div>
								</Link>
								<button
									onClick={() => {
										theme === "dark" ? setTheme("light") : setTheme("dark");
									}}
								>
									<div className="p-2 flex flex-row items-center space-x-2 text-sm">
										{theme === "dark" ? (
											<i className="fa-lg fa-solid fa-moon -scale-x-100 rotate-[20deg]"></i>
										) : (
											<i className="fa-lg fa-solid fa-sun"></i>
										)}{" "}
										{theme === "dark" ? (
											<p>Dark mode</p>
										) : (
											<p>Light mode</p>
										)}
									</div>
								</button>
							</div>
						</div>
					)}
				</Transition>
				<div className="hidden md:flex items-center">
					<div className="font-medium text-orange-900 dark:text-white flex items-center space-x-2 mr-4">
						<Link href="/products">
							<p className="relative flex px-5 items-center justify-center h-12 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 group duration-300 font-poppins text-sm">
								All Products
							</p>
						</Link>
						<Link href="/t-shirts">
							<p className="relative flex px-5 items-center justify-center h-12 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 group duration-300 font-poppins text-sm">
								T-Shirts
							</p>
						</Link>
						<Link href="/stickers">
							<p className="relative flex px-5 items-center justify-center h-12 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 group duration-300 font-poppins text-sm">
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
								className="relative flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 group duration-300"
							>
								<i className="fa-lg fa-solid fa-heart"></i>
								<div className="opacity-0 text-center w-max p-1 px-2 text-xs top-12 absolute bg-yellow-900 text-white rounded-xl group-hover:opacity-100 duration-300">
									Wish List
								</div>
							</button>
							{wishListIsOpen && (
								<div className="bg-white dark:bg-neutral-800 top-16 right-0 absolute w-max z-50 rounded-md shadow-2xl">
									<WishList
										wishListButtonRef={wishListButtonRef}
										themeButtonRef={themeButtonRef}
									/>
								</div>
							)}
						</div>
						<div className="relative">
							<button
								ref={cartButtonRef}
								onClick={() => {
									dispatch(toggleCart());
								}}
								className="relative flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 group duration-300"
							>
								<i className="fa-lg fa-solid fa-cart-shopping"></i>
								<div className="opacity-0 text-center w-max p-1 px-2 text-xs top-12 absolute bg-yellow-900 text-white rounded-xl group-hover:opacity-100 duration-300">
									Cart
								</div>
							</button>
							{cartIsOpen && (
								<div className="bg-white dark:bg-neutral-800 top-16 right-0 absolute w-max z-50 rounded-md shadow-2xl">
									<Cart
										cartButtonRef={cartButtonRef}
										themeButtonRef={themeButtonRef}
									/>
								</div>
							)}
						</div>
						<div className="relative">
							<button
								ref={accountButtonRef}
								onClick={() => {
									dispatch(toggleAccount());
								}}
								className="relative flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 group duration-300"
							>
								<i className="fa-lg fa-solid fa-user"></i>
								<div className="opacity-0 text-center w-max p-1 px-2 text-xs top-12 absolute bg-yellow-900 text-white rounded-xl group-hover:opacity-100 duration-300">
									Account
								</div>
							</button>
							{accountIsOpen && (
								<div className="bg-white dark:bg-neutral-800 top-16 right-0 absolute w-max z-50 rounded-md shadow-2xl max-w-sm">
									<Account
										accountButtonRef={accountButtonRef}
										themeButtonRef={themeButtonRef}
									/>
								</div>
							)}
						</div>
						<div className="relative">
							<button
								ref={themeButtonRef}
								onClick={() => {
									theme === "dark" ? setTheme("light") : setTheme("dark");
								}}
								className="relative flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 group duration-300"
							>
								{theme === "dark" ? (
									<i className="fa-lg fa-solid fa-moon -scale-x-100 rotate-[20deg]"></i>
								) : (
									<i className="fa-lg fa-solid fa-sun"></i>
								)}
								<div className="opacity-0 text-center w-max p-1 px-2 text-xs top-12 absolute bg-yellow-900 text-white rounded-xl group-hover:opacity-100 duration-300">
									{theme === "dark" ? (
										<p>Switch to light mode</p>
									) : (
										<p>Switch to dark mode</p>
									)}
								</div>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
