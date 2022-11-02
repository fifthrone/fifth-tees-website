import Hero from "../components/home-page/hero";
import FeaturedSection from "../components/home-page/featured-section";

import { getData, getProducts } from "../utils/firebase/firebase.utils";

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'force-no-store',
  runtime = 'nodejs',
  preferredRegion = 'auto'

// 'auto' | 'force-dynamic' | 'error' | 'force-static'


const getProductsMap = async (collectionKey: string) => {
	console.log("fetching")
	const featured = await getData(collectionKey);
	const promises = featured.map(async ({ title, productIds }) => {
		const products = await getProducts(productIds);

		const product = {
			title,
			products: products,
		};

		return product;
	});
	return Promise.all(promises)
};

const Home = async () => {
	const featured = await getProductsMap("featured");
	const hero = await getProductsMap("hero");

	console.log(featured.length);

	return (
		<>
			{/* <p className="fixed z-40">{scrollPosition}</p> */}
			<div
				id="hero"
				className="flex flex-col items-center justify-center max-w-6xl mx-auto sm:px-10 px-0"
			>
				<Hero hero={hero} />
			</div>

			{featured.length &&
				featured.map(({ title, products }) => (
					<FeaturedSection key={title} title={title} products={products} />
				))}
		</>
	);
};

export default Home;
