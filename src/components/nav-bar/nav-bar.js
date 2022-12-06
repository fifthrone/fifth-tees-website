"use client";

import Link from "next/link";
import Image from "next/image";

import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import Cart from "../cart/cart";
import WishList from "../wish-list/wish-list";
import Account from "../account/account";
import NavTab from "./nav-tab";
import NavButton from "./nav-button";
import NavLink from "./nav-link";

import {
	selectIsOpen,
	selectItemsCount,
	toggleCart,
} from "../../store/cart/cart.slice";
import {
	selectAccountIsOpen,
	toggleAccount,
} from "../../store/account/account.slice";
import {
	selectWishListIsOpen,
	toggleWishList,
	closeWishListTab,
} from "../../store/wish-list/wish-list.slice";
import {
	selectIsMobileNavTabOpen,
	toggleMobileNavTab,
} from "../../store/nav/nav.slice";

import MobileNav from "./mobile-nav";
import { resetTag } from "../../store/tag/tag.slice";

const NavBar = () => {
	const dispatch = useDispatch();
	const { theme, setTheme } = useTheme();
	const pathname = usePathname();

	const cartIsOpen = useSelector(selectIsOpen);
	const wishListIsOpen = useSelector(selectWishListIsOpen);
	const accountIsOpen = useSelector(selectAccountIsOpen);
	const isMobileNavTabOpen = useSelector(selectIsMobileNavTabOpen);

	const cartItemsCount = useSelector(selectItemsCount);

	const wishListButtonRef = useRef(null);
	const cartButtonRef = useRef(null);
	const accountButtonRef = useRef(null);
	const themeButtonRef = useRef(null);
	const mobileNavButtonRef = useRef(null);

	return (
		<>
			<div className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-neutral-800/70 shadow-lg shadow-gray-9001 backdrop-blur-md">
				<nav className="max-w-6xl w-full flex justify-between items-center flex-row mx-auto sm:px-10 px-2">
					<Link href="/">
						<Image
							className="h-12 hidden dark:block md:h-16 p-2 w-auto"
							src="/fifthTeesDark.png"
							alt="Fifth Tees"
							width={500}
							height={500}
						/>
						<Image
							className="h-12 dark:hidden md:h-16 p-2 w-auto"
							src="/fifthTees.png"
							alt="Fifth Tees"
							width={500}
							height={500}
						/>
					</Link>
					<div className="flex items-center">
						<div className="hidden md:flex font-medium text-orange-900 dark:text-white items-center space-x-1 mr-4">
							<NavLink
								href="/products"
								onClick={() => {
									dispatch(resetTag());
								}}
							>
								All Products
							</NavLink>
							<NavLink
								href="/t-shirts"
								onClick={() => {
									dispatch(resetTag());
								}}
							>
								T-Shirts
							</NavLink>
							<NavLink
								href="/stickers"
								onClick={() => {
									dispatch(resetTag());
								}}
							>
								Stickers
							</NavLink>
						</div>
						<div className="text-orange-800 dark:text-white flex items-center md:space-x-2 space-x-1">
							<div className="relative">
								<NavButton
									label="Wish List"
									buttonRef={wishListButtonRef}
									onClick={() => {
										dispatch(toggleWishList());
									}}
								>
									<i className="fa-md text-base md:text-xl fa-solid fa-heart"></i>
								</NavButton>
								<NavTab isOpen={wishListIsOpen}>
									<WishList
										wishListButtonRef={wishListButtonRef}
										themeButtonRef={themeButtonRef}
									/>
								</NavTab>
							</div>
							<div className="relative">
								<NavButton
									label="Cart"
									buttonRef={cartButtonRef}
									onClick={() => {
										dispatch(toggleCart());
									}}
								>
									<i className="fa-md text-base md:text-xl fa-solid fa-cart-shopping"></i>
									{cartItemsCount >= 1 ? (
										<div className="absolute right-0.5 bottom-1 h-4 min-w-[1rem] p-[0.1rem] rounded-full bg-orange-700 dark:bg-neutral-300 text-white dark:text-black text-[0.7rem] flex items-center justify-center font-bold tracking-tighter">
											{cartItemsCount}
										</div>
									) : null}
								</NavButton>
								<NavTab isOpen={cartIsOpen}>
									<Cart
										cartButtonRef={cartButtonRef}
										themeButtonRef={themeButtonRef}
									/>
								</NavTab>
							</div>
							<div className="relative">
								<NavButton
									label="Account"
									buttonRef={accountButtonRef}
									onClick={() => {
										dispatch(toggleAccount());
									}}
								>
									<i className="fa-md text-base md:text-xl fa-solid fa-user"></i>
								</NavButton>
								<NavTab isOpen={accountIsOpen}>
									<Account
										accountButtonRef={accountButtonRef}
										themeButtonRef={themeButtonRef}
									/>
								</NavTab>
							</div>
							<div ref={themeButtonRef} className="hidden md:block relative">
								<NavButton
									label="Switch to dark mode"
									className="dark:hidden"
									onClick={() => {
										setTheme("dark");
									}}
								>
									<i className="fa-md text-base md:text-xl fa-solid fa-sun -scale-x-100 rotate-[20deg]"></i>
								</NavButton>
								<NavButton
									label="Switch to light mode"
									className="hidden dark:flex"
									onClick={() => {
										setTheme("light");
									}}
								>
									<i className="fa-md text-base md:text-xl fa-solid fa-moon -scale-x-100 rotate-[20deg]"></i>
								</NavButton>
							</div>
							<div className="md:hidden relative">
								<NavButton
									label="Menu"
									buttonRef={mobileNavButtonRef}
									onClick={() => {
										dispatch(toggleMobileNavTab());
									}}
								>
									<i className="fa-md fa-solid fa-bars"></i>
								</NavButton>
								<NavTab isOpen={isMobileNavTabOpen}>
									<MobileNav mobileNavButtonRef={mobileNavButtonRef} />
								</NavTab>
							</div>
							{/* <MobileNav className="block md:hidden" /> */}
						</div>
					</div>
				</nav>
			</div>
			{/* <div
				className={`w-full h-12 md:h-16 ${pathname === "/" ? "tall:hidden" : ""}`}
				// className="h-12 md:h-16"
			></div> */}
		</>
	);
};

export default NavBar;
