import ProductsRow from "./products-row";

const FeaturedSection = (props) => {
	const { title, products } = props;

	return (
		<>
			<div className="max-w-6xl px-10 mx-auto mt-8">
				<h1 className="pb-2 text-5xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
					{title}
				</h1>
			</div>
			<ProductsRow products={products}/>
		</>
	);
};

export default FeaturedSection;
