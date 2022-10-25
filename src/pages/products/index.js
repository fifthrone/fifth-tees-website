import NavBar from "../../components/nav-bar/nav-bar";
import ProductCard from "../../components/product-card/product-card";
import {
	fetchProductsAsync,
	selectProducts,
} from "../../store/products/products.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/footer";

const ProductsPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProductsAsync());
	}, []);

	const products = useSelector(selectProducts);

	return (
		<>
			<NavBar />
			<div className="flex items-center justify-center max-w-6xl mx-auto">
				<div className="p-8 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{products.length &&
						products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
			</div>
			<Footer />
			{/* search bar */}
			{/* tag/popular/keywords/featured column */}
			{/* grid product cards */}
		</>
	);
};

export default ProductsPage;
