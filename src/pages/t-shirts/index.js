import NavBar from "../../components/nav-bar/nav-bar";
import ProductCard from "../../components/product-card/product-card";
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
			<div className="flex items-center justify-center max-w-6xl mx-auto">
				<div className="p-8 grid gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{tShirts.length &&
						tShirts.map((tshirt) => (
							<ProductCard key={tshirt.id} product={tshirt} />
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

export default TShirtsPage;
