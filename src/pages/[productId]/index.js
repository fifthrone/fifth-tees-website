import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/nav-bar/nav-bar";

const ProductPage = () => {
	const router = useRouter();

	const id = router.query.productId;

	useEffect(() => {}, []);

	return (
		<>
			<NavBar />
			<div>ProductPage {id}</div>
			<Footer />
		</>
	);
};

export default ProductPage;
