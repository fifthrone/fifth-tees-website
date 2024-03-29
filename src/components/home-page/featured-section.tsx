import { Product } from "../../ts/types";
import ProductsRow from "./products-row";

interface FeaturedSectionProps {
	title: string;
	products: Product[];
}

const FeaturedSection = (props: FeaturedSectionProps) => {
	const { title, products } = props;

	return (
		<>
			<div className="max-w-6xl px-2 sm:px-10 mx-auto mt-4 sm:mt-8">
				<h1 className="pb-2 text-3xl sm:text-5xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
					{title}
				</h1>
			</div>
			<ProductsRow products={products} />
		</>
	);
};

export default FeaturedSection;
