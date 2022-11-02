import ProductListing from "../../components/product-listing/product-listing";

import { getData } from "../../utils/firebase/firebase.utils";

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'force-no-store',
  runtime = 'nodejs',
  preferredRegion = 'auto'
  
const getP = async () => {
    await new Promise((rs)=>setTimeout(rs, 4000))
    return await getData("products")
}

const ProductsPage = async () => {
	const products = await getP();

	return <ProductListing products={products} />;
};

export default ProductsPage;
