import NavBar from "../../components/nav-bar/nav-bar";
import ProductListing from "../../components/product-listing/product-listing";

import { fetchProductsAsync } from "../../store/products/products.slice";
import { selectTShirts } from "../../store/products/products.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/footer";

const TShirtsPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProductsAsync());
	}, []);

	const tShirts = useSelector(selectTShirts);

	return (
		<>
			<NavBar />
			<div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
				<div className="text-3xl text-orange-900 font-poppins pt-4 font-semibold">T-Shirts</div>
				<ProductListing products={tShirts} />
			</div>
			<Footer />
			{/* search bar */}
			{/* tag/popular/keywords/featured column */}
			{/* grid product cards */}
		</>
	);
};

export default TShirtsPage;
