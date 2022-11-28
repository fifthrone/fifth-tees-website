"use client";

import ProductCard from "../product-card/product-card";

import { useSelector } from "react-redux";

import { selectTag } from "../../store/tag/tag.slice";

const ProductListing = (props) => {
	const { products } = props;

	const currentTag = useSelector(selectTag);

	const filteredProducts = products.filter((product) => {
		if (currentTag === "") {
			return true;
		}
		return product.tags.includes(currentTag);
	});

	return (
		<div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{filteredProducts.length
				? filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
				  ))
				: null}
		</div>
	);
};

export default ProductListing;
