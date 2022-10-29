import HeroTransition from "./hero-transition";
import { useRef, useState } from "react";
import { useIsOverflow } from "../hook/useIsOverflow";
import ProductCardClean from "../product-card/product-card-clean";

const HeroSection = (props) => {
	const { scrollPosition, title, products, inPosition, outPosition } = props;

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
						className="absolute bottom-36 left-2 bg-gray-100 z-40 rounded-full p-2 bg-opacity-10"
					>
						<i className="fa-lg fa-solid fa-angle-left"></i>
					</button>
					<button
						onClick={() => scroll(ref, 120)}
						className="absolute bottom-36 right-2 bg-gray-100 z-40 rounded-full p-2 bg-opacity-10"
					>
						<i className="fa-lg fa-solid fa-angle-right"></i>
					</button>
				</>
			)}
			<HeroTransition
				className="border1 absolute top-[6%] tall:top-[2%] text-white sm:text-[150px] text-[120px]"
				scrollPosition={scrollPosition}
				inPosition={inPosition}
				outPosition={outPosition}
				transitionStyle="slideOpacityVertical"
				delay={0}
			>
				{title}
			</HeroTransition>
			<div
				className="absolute bottom-0 w-full border1 p-6 flex flex-row space-x-6 overflow-x-scroll scroll-smooth scrollbar-hide"
				ref={ref}
			>
				{products.length &&
					products.map((product, index) => (
						<HeroTransition
							key={product.id}
							className="h-72 w-full min-w-[180px]"
							scrollPosition={scrollPosition}
							inPosition={inPosition}
							outPosition={outPosition}
							transitionStyle="slideHorizontal"
							delay={index * 50}
							mountOnEnter
							unmountOnExit
							onEntered={
								index === products.length - 1
									? () => {
											setIsSectionCardsEntered(true);
									  }
									: () => {}
							}
							onExit={
								index === products.length - 1
									? () => {
											setIsSectionCardsEntered(false);
									  }
									: () => {}
							}
						>
							<ProductCardClean product={product} />
						</HeroTransition>
					))}
			</div>
		</>
	);
};

export default HeroSection;
