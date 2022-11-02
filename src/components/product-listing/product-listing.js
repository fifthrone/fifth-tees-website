import ProductCard from "../product-card/product-card";

const ProductListing = (props) => {
	const { products } = props;
	
	return (
		<div className="p-8 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{products.length ?
				products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))
			: null}
		</div>
	);
};

export default ProductListing;
