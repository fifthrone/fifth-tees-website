import ProductListing from "../../components/product-listing/product-listing";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import BreadcrumbItem from "../../components/breadcrumb/breadcrumb-item";
import Tags from "../../components/tag/tags";

import { getProductsByType } from "../../utils/firebase/firebase.utils";

const TShirtsPage = async () => {
	const stickers = await getProductsByType("Sticker");

	return (
		<>
			<div className="px-2 sm:px-10 max-w-6xl mx-auto space-y-4">
				<Breadcrumb className="pl-2 pt-4 p-2px-5bg-whitew-min rounded-fullshadow-md">
					<BreadcrumbItem href="/" className="hover:text-neutral-600 dark:hover:text-neutral-300 duration-200 transition">
						<i className="fa-solid fa-house"></i>
					</BreadcrumbItem>
					<BreadcrumbItem href="/products">Products</BreadcrumbItem>
					<BreadcrumbItem>Stickers</BreadcrumbItem>
				</Breadcrumb>
				<Tags className="pl-2"/>
				<div className="xborder flex flex-col items-center justify-center ">
					<ProductListing products={stickers} />
				</div>
			</div>
		</>
	);
};

export default TShirtsPage;
