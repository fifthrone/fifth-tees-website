"use client"

import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

import {
	addWishListItems,
	removeWishListItems,
	toggleWishList,
	selectWishListItemIds,
} from "../../store/wish-list/wish-list.slice";

import styled, { keyframes } from "styled-components";

const grow = keyframes`
    from {
        transform: scale(0.5);
        color:white;
    }
    to {
        transform: scale(1);
        color:#F98080;
    }
`;

const GrowContainer = styled.i`
	animation: ${grow} 400ms;
`;

const AddToWishListButton = (props) => {
	const { product, className } = props;
	const { id } = product;

	const dispatch = useDispatch();

	const wishListItemsIds = useSelector(selectWishListItemIds);
	const isInWishList = wishListItemsIds.includes(id);

	const clickHandler = () => {
        if (isInWishList) {
            dispatch(removeWishListItems(product))
        } else {
            dispatch(addWishListItems(product));
            setTimeout(() => {
                dispatch(toggleWishList());
            }, 500);
        }
	};

	return (
		<button
			onClick={clickHandler}
			className={
				(isInWishList
					? "bg-blueGray border-2 border-blueGray text-white hover:bg-lightBlueGray"
					: "bg-white border-2 border-blueGray text-blueGray hover:bg-gray-200") +
				" flex flex-row items-center justify-center rounded-xl w-full text-white py-3 space-x-2 px-2 h-12" +
				" " +
				className
			}
		>
			{isInWishList ? (
				<GrowContainer className="pl-1 fa-solid fa-heart border1 text-[#F98080] text-3xl"></GrowContainer>
			) : (
				<i className="pl-1 fa-regular fa-heart border1 text-blueGray text-xl"></i>
			)}
		</button>
	);
};

export default AddToWishListButton;
