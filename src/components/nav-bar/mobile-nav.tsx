"use client";

import Link from "next/link";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { useSelector, useDispatch } from "react-redux";

import { Transition } from "react-transition-group";
import WishList from "../wish-list/wish-list";
import NavButton from "./nav-button";

import { selectIsOpen, toggleCart } from "../../store/cart/cart.slice";
import {
	selectAccountIsOpen,
	toggleAccount,
} from "../../store/account/account.slice";
import {
	selectWishListIsOpen,
	toggleWishList,
	closeWishListTab,
} from "../../store/wish-list/wish-list.slice";
import NavTab from "./nav-tab";
import NavLink from "./nav-link";
import {
	closeMobileNavTab,
	selectIsMobileNavTabOpen,
} from "../../store/nav/nav.slice";

const MobileNav = (props) => {
	const { mobileNavButtonRef } = props;

	const { theme, setTheme } = useTheme();
	const dispatch = useDispatch();
	const ref = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				ref.current &&
				!ref.current.contains(event.target) &&
				!mobileNavButtonRef.current.contains(event.target)
			) {
				// alert("You clicked outside of me!");
				dispatch(closeMobileNavTab());
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, dispatch, mobileNavButtonRef]);

	return (
		<div
			ref={ref}
			className="flex flex-col space-y-2 p-8 font-poppins text-black dark:text-white items-start"
		>
			<button
				onClick={() => {
					dispatch(closeMobileNavTab());
				}}
				className="border1 flex p-2 w-full justify-end"
			>
				<i className="fa-lg fa-solid fa-xmark"></i>
			</button>
			<NavLink href="/">Home</NavLink>
			<NavLink href="/products">All Products</NavLink>
			<NavLink href="/t-shirts">T-Shirts</NavLink>
			<NavLink href="/stickers">Stickers</NavLink>
			<NavButton
				className="dark:hidden"
				onClick={() => {
					setTheme("dark");
				}}
			>
				<div className="flex flex-row space-x-2 items-center ">
					<i className="fa-md text-base md:text-xl fa-solid fa-moon -scale-x-100 rotate-[20deg]"></i>
					<p className="text-sm">Dark mode</p>
				</div>
			</NavButton>
			<NavButton
				className="hidden dark:flex"
				onClick={() => {
					setTheme("light");
				}}
			>
				<div className="flex flex-row space-x-2 items-center ">
					<i className="fa-md text-base md:text-xl fa-solid fa-sun -scale-x-100 rotate-[20deg]"></i>
					<p className="text-sm">Light mode</p>
				</div>
			</NavButton>
		</div>
	);
};

export default MobileNav;
