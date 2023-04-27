import Hero from "../components/home-page/hero";
import FeaturedSection from "../components/home-page/featured-section";
import {
	addProduct,
	getData,
	getFeatureOrHeroData,
	getProducts,
} from "../utils/firebase/firebase.utils";
import { Product } from "../ts/types";

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 20,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

// 'auto' | 'force-dynamic' | 'error' | 'force-static'

const getProductsMap = async (collectionKey: string) => {
	const featured = await getFeatureOrHeroData(collectionKey);
	const promises = featured.map(async ({ title, productIds }) => {
		const products = await getProducts(productIds);

		const product = {
			title,
			products: products,
		};

		return product;
	});
	return Promise.all(promises);
};

const Home = async () => {
	const featured = await getProductsMap("featured");
	const hero = await getProductsMap("hero");

	return (
		<>
			{/* <p className="fixed z-40">{scrollPosition}</p> */}
			<div
				id="hero"
				className="relative"
				// className="flex flex-col items-center justify-center max-w-6xl mx-auto sm:px-10 px-0"
			>
				<Hero hero={hero} />
				{featured.length &&
					featured.map(({ title, products }) => (
						<FeaturedSection key={title} title={title} products={products} />
					))}
			</div>
		</>
	);
};

export default Home;
