import ProductListing from "../../components/product-listing/product-listing";
import { getProductsByType } from "../../utils/firebase/firebase.utils";

const TShirtsPage = async () => {
	const stickers = await getProductsByType("Sticker");

	return (
		<>
			<div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
				<div className="text-3xl text-orange-900 font-poppins pt-4 font-semibold">
					Stickers
				</div>
				<ProductListing products={stickers} />
			</div>
		</>
	);
};

export default TShirtsPage;
