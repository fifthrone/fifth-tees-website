import NavBar from "../../components/nav-bar/nav-bar";
import ProductListing from "../../components/product-listing/product-listing";

import { fetchProductsAsync } from "../../store/products/products.slice";
import { selectStickers } from "../../store/products/products.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/footer";

const StickersPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProductsAsync());
	}, []);

	const stickers = useSelector(selectStickers);

	return (
		<>
			<NavBar />
			<div className="flex items-center justify-center max-w-6xl mx-auto">
				<ProductListing products={stickers} />
			</div>
			<Footer />
			{/* search bar */}
			{/* tag/popular/keywords/featured column */}
			{/* grid product cards */}
		</>
	);
};

export default StickersPage;
