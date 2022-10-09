import NavBar from "../../components/nav-bar/nav-bar";
import ProductCard from "../../components/product-card/product-card";
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
				<div className="p-8 grid gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{stickers &&
						stickers.map((sticker) => (
							<ProductCard key={sticker.id} product={sticker} />
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

export default StickersPage;
