"use client"

import ProductCard from "../product-card/product-card";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsRow = (props) => {
	const { products } = props;

	const ref = useRef(null);

	const scroll = (ref, scrollOffset) => {
		ref.current.scrollLeft += scrollOffset;
	};

	return (
		<div className="relative group">
			<button
				onClick={() => scroll(ref, -260)}
				className="absolute bottom-[50%] left-2 bg-gray-500 dark:bg-gray-300 z-40 rounded-full p-5 bg-opacity-10 dark:bg-opacity-10 opacity-0 group-hover:opacity-100 duration-500"
			>
				<i className="text-gray-500 fa-xl fa-solid fa-angle-left"></i>
			</button>
			<button
				onClick={() => scroll(ref, 260)}
				className="absolute bottom-[50%] right-2 bg-gray-500 z-40 rounded-full p-5 bg-opacity-10 opacity-0 group-hover:opacity-100 duration-500"
			>
				<i className="text-gray-500 fa-xl fa-solid fa-angle-right"></i>
			</button>
			<div
				className="flex flex-row w-full overflow-x-scroll scroll-smooth scrollbar-hide space-x-1.5 sm:space-x-4 pt-1 pb-4"
				ref={ref}
			>
				{products &&
					products.map(
						(product, index) =>
							index <= 6 && (
								<ProductCard
									key={product.id}
									product={product}
									className="w-40 sm:w-64 flex-shrink-0 translate-x-2 sm:translate-x-[max(2.5rem,50vw-33.5rem)]"
								/>
							)
					)}
				<div className="w-6 flex-shrink-0 translate-x-2 sm:translate-x-[max(2.5rem,50vw-33.5rem)]"></div>
			</div>
		</div>
	);
};

export default ProductsRow;
