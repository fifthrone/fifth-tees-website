import ProductListing from "../../components/product-listing/product-listing";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import BreadcrumbItem from "../../components/breadcrumb/breadcrumb-item";
import Tags from "../../components/tag/tags";

import { getData } from "../../utils/firebase/firebase.utils";

// export const dynamic = "force-dynamic",
// 	dynamicParams = true,
// 	revalidate = 0,
// 	fetchCache = "force-no-store",
// 	runtime = "nodejs",
// 	preferredRegion = "auto";

const getP = async () => {
	// await new Promise((rs) => setTimeout(rs, 2000));
	return await getData("products");
};

const ProductsPage = async () => {
	const products = await getP();

	return (
		<div className="px-2 sm:px-10 max-w-6xl mx-auto space-y-4">
			<Breadcrumb className="pl-2 pt-4">
				<BreadcrumbItem
					href="/"
					className="hover:text-neutral-600 dark:hover:text-neutral-300 duration-200 transition"
				>
					<i className="fa-solid fa-house"></i>
				</BreadcrumbItem>
				<BreadcrumbItem>Products</BreadcrumbItem>
			</Breadcrumb>
			<Tags className="pl-2" />
			<div className="xborder flex flex-col items-center justify-center ">
				<ProductListing products={products} />
			</div>
		</div>
	);
};

export default ProductsPage;
