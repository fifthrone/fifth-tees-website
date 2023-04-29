"use client";

import Link from "next/link";

import HeroTransition from "./hero-transition";
import HeroTransitionHl from "./hero-transition-hl";
import { useRef, useState } from "react";
import { useIsOverflow } from "../../hook/useIsOverflow";
import ProductCardClean from "../product-card/product-card-clean";
import TitleTransition from "./title-transition";

import { useDispatch } from "react-redux";
import { setTag } from "../../store/tag/tag.slice";
import { Product } from "../../ts/types";

interface HeroSectionProps {
	scrollPosition: number;
	title: string;
	products: Product[];
	inPosition: number;
	outPosition: number;
}

const HeroSection = (props: HeroSectionProps) => {
	const { scrollPosition, title, products, inPosition, outPosition } = props;

	const dispatch = useDispatch();

	const ref = useRef(null);
	const isOverflow = useIsOverflow(ref, () => {});

	const [isSectionCardsEntered, setIsSectionCardsEntered] = useState(
		inPosition < 0 ? true : false
	);

	const scroll = (ref, scrollOffset) => {
		ref.current.scrollLeft += scrollOffset;
	};

	return (
		<>
			{isOverflow && isSectionCardsEntered && (
				<>
					<button
						onClick={() => scroll(ref, -120)}
						className="absolute bottom-36 sm:bottom-48 left-2 bg-gray-100 z-40 rounded-full p-2 bg-opacity-10"
					>
						<i className="fa-lg fa-solid fa-angle-left"></i>
					</button>
					<button
						onClick={() => scroll(ref, 120)}
						className="absolute bottom-36 sm:bottom-48 right-2 bg-gray-100 z-40 rounded-full p-2 bg-opacity-10"
					>
						<i className="fa-lg fa-solid fa-angle-right"></i>
					</button>
				</>
			)}
			<div className="absolute top-0 right-0 left-0 flex flex-col items-center justify-start space-y-2">
				<TitleTransition
					scrollPosition={scrollPosition}
					inPosition={inPosition}
					outPosition={outPosition}
					className="xborder leading-normal sm:leading-tight mtall:leading-tight text-white sm:mtall:text-[150px] text-[90px]"
				>
					{title}
				</TitleTransition>
				{/* <HeroTransition
					className="border1 text-white sm:tall:text-[150px] text-[80px]"
					scrollPosition={scrollPosition}
					inPosition={inPosition}
					outPosition={outPosition}
					mountOnEnter
					unmountOnExit
					transitionStyle="slideOpacityVertical"
					delay={0}
				>
					{title}
				</HeroTransition> */}
				{inPosition <= scrollPosition && scrollPosition <= outPosition ? (
					<>
						<div className="text-white text-lg sm:text-2xl flex flex-row space-x-5 items-center justify-center border1 font-poppins">
							<p className="tracking-wide">T-Shirts</p>
							<div className="h-1 w-1 rounded-full bg-white"></div>
							<p className="tracking-wide">Stickers</p>
						</div>
						<div className="text-white w-full flex items-center justify-center">
							<Link
								href={"/products"}
								className="p-2 px-6 text-2xl hidden tall:block rounded-full hover:-translate-y-1 duration-200 shadow-xl hover:shadow-2xl bg-gray-900 mtall:mt-4"
								onClick={() => {
									if (title === "Meme") {
										dispatch(setTag("Meme"));
										return;
									}
									if (title === "Dog") {
										dispatch(setTag("Dog"));
										return;
									}
									if (title === "Foodie") {
										dispatch(setTag("Food"));
										return;
									}
								}}
							>
								Shop All
							</Link>
							<Link
								href={"/products"}
								className="p-1 px-4 sm:p-2 sm:px-6 tall:hidden text-lg sm:text-2xl rounded-full hover:-translate-y-1 duration-200 shadow-xl hover:shadow-2xl bg-gray-900 mtall:mt-4"
								onClick={() => {
									if (title === "Meme") {
										dispatch(setTag("Meme"));
										return;
									}
									if (title === "Dog") {
										dispatch(setTag("Dog"));
										return;
									}
									if (title === "Foodie") {
										dispatch(setTag("Food"));
										return;
									}
								}}
							>
								Shop All
							</Link>
						</div>
					</>
				) : null}
			</div>
			<div
				className="absolute bottom-0 w-full xborder p-6 px-3 sm:px-[max(2rem,50vw-33.5rem)] flex flex-row space-x-3 sm:space-x-6 overflow-x-scroll scroll-smooth scrollbar-hide"
				ref={ref}
			>
				{products.length &&
					products.map((product, index) => (
						// <HeroTransition
						// 	key={product.id}
						// 	className="h-64 sm:tall:h-96 xtall:h-[30vh] w-full min-w-[160px] sm:min-w-[240px]"
						// 	scrollPosition={scrollPosition}
						// 	inPosition={inPosition}
						// 	outPosition={outPosition}
						// 	transitionStyle="slideHorizontal"
						// 	delay={index * 50}
						// 	mountOnEnter
						// 	unmountOnExit
						// 	onEntered={
						// 		index === products.length - 1
						// 			? () => {
						// 					setIsSectionCardsEntered(true);
						// 			  }
						// 			: () => {}
						// 	}
						// 	onExit={
						// 		index === products.length - 1
						// 			? () => {
						// 					setIsSectionCardsEntered(false);
						// 			  }
						// 			: () => {}
						// 	}
						// >
						// 	<ProductCardClean product={product} />
						// </HeroTransition>
						<HeroTransitionHl
							key={product.id}
							className="h-64 sm:tall:h-96 xtall:h-[30vh] w-full min-w-[160px] sm:min-w-[240px]"
							scrollPosition={scrollPosition}
							inPosition={inPosition}
							outPosition={outPosition}
							// transitionStyle="slideHorizontal"
							index={index}
							// afterEnter={
							// 	index === products.length - 1
							// 		? () => {
							// 				setIsSectionCardsEntered(true);
							// 		  }
							// 		: () => {}
							// }
							// afterLeave={
							// 	index === products.length - 1
							// 		? () => {
							// 				setIsSectionCardsEntered(false);
							// 		  }
							// 		: () => {}
							// }
						>
							<ProductCardClean product={product} />
						</HeroTransitionHl>
					))}
			</div>
		</>
	);
};

export default HeroSection;
