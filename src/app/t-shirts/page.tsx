import ProductListing from "../../components/product-listing/product-listing";
import { getProductsByType } from "../../utils/firebase/firebase.utils";

const TShirtsPage = async () => {
	const tShirts = await getProductsByType("T-Shirt");

	return (
		<>
			<div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
				<div className="text-3xl text-orange-900 font-poppins pt-4 font-semibold">
					T-Shirts
				</div>
				<ProductListing products={tShirts} />
			</div>
		</>
	);
};

export default TShirtsPage;
