import NavBar from "../../components/nav-bar/nav-bar";
import ProductListing from "../../components/product-listing/product-listing";

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
				<ProductListing products={products} />
			</div>
			<Footer />
			{/* search bar */}
			{/* tag/popular/keywords/featured column */}
			{/* grid product cards */}
		</>
	);
};

export default ProductsPage;
