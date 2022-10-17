import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/nav-bar/nav-bar";
import { useDispatch, useSelector } from "react-redux";
import {
	selectProductById,
	fetchProductsAsync,
} from "../../store/products/products.slice";
import {
	selectProduct,
	fetchProductAsync,
	clearProduct,
} from "../../store/product/product.slice";
import FeaturedSection from "../../components/home-page/featured-section";
import ImageGallery from "../../components/image-gallery/image-gallery";

const ProductPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const id = router.query.productId;

	const product = useSelector(selectProduct);
	console.log("product:", product);

	const {
		imageUrl,
		imageModelUrl,
		price,
		title,
		description,
		type,
		otherTypeId,
		relatedId,
	} = product;

	const relatedProducts = [
		{
			id: "coffee-matters-tshirt", //1
			imageUrl: "productImages/coffeeMattersTshirt.jpg",
			imageMaskedUrl: "productImages/coffeeMattersTshirtMasked.png",
			imageModelUrl: "productImages/coffeeMattersTshirtModel.jpg",
			price: 120,
			title: "Coffee Matters Science",
			description: "",
			type: "T-Shirt",
			otherTypeId: [
				"dad-lifts-dinosaur-tshirt",
				"trust-me-im-a-dogtor-tshirt",
				"friends-and-beer-is-all-i-need-tshirt",
			],
			relatedId: [
				"dad-lifts-dinosaur-tshirt",
				"trust-me-im-a-dogtor-tshirt",
				"friends-and-beer-is-all-i-need-tshirt",
			],
		},
		{
			id: "dad-lifts-dinosaur-tshirt", //2
			imageUrl: "productImages/dadLiftDinosaurTshirt.jpg",
			imageMaskedUrl: "productImages/dadLiftDinosaurTshirtMasked.png",
			imageModelUrl: "productImages/dadLiftDinosaurTshirtModel.jpg",
			price: 120,
			title: "Dad Lifts Dinosaur Deadlifting",
			description: "",
			type: "T-Shirt",
			otherTypeId: [
				"dad-lifts-dinosaur-tshirt",
				"trust-me-im-a-dogtor-tshirt",
				"friends-and-beer-is-all-i-need-tshirt",
			],
			relatedId: [
				"dad-lifts-dinosaur-tshirt",
				"trust-me-im-a-dogtor-tshirt",
				"friends-and-beer-is-all-i-need-tshirt",
			],
		},
		{
			id: "trust-me-im-a-dogtor-tshirt",
			imageUrl: "productImages/dogtorTshirt.jpg",
			imageMaskedUrl: "productImages/dogtorTshirtMasked.png",
			imageModelUrl: "productImages/dogtorTshirtModel.jpg",
			price: 120,
			title: "Trust Me, I'm a Dogtor",
			description: "",
			type: "T-Shirt",
			otherTypeId: [
				"dad-lifts-dinosaur-tshirt",
				"trust-me-im-a-dogtor-tshirt",
				"friends-and-beer-is-all-i-need-tshirt",
			],
			relatedId: [
				"dad-lifts-dinosaur-tshirt",
				"trust-me-im-a-dogtor-tshirt",
				"friends-and-beer-is-all-i-need-tshirt",
			],
		},
		{
			id: "friends-and-beer-is-all-i-need-tshirt", //4
			imageUrl: "productImages/friendsBeerTshirt.jpg",
			imageMaskedUrl: "productImages/friendsBeerTshirtMasked.png",
			imageModelUrl: "productImages/friendsBeerTshirtModel.jpg",
			price: 120,
			title: "Friend and Beer Is All I Need",
			description: "",
			type: "T-Shirt",
			otherTypeId: [
				"dad-lifts-dinosaur-tshirt",
				"trust-me-im-a-dogtor-tshirt",
				"friends-and-beer-is-all-i-need-tshirt",
			],
			relatedId: [
				"dad-lifts-dinosaur-tshirt",
				"trust-me-im-a-dogtor-tshirt",
				"friends-and-beer-is-all-i-need-tshirt",
			],
		},
	];

	useEffect(() => {
		dispatch(clearProduct);
		if (router.isReady) {
			console.log("useeffect id", id);
			dispatch(fetchProductAsync(id));
		}
	}, [router.isReady, id]);

	return (
		<>
			<NavBar />
			{product && (
				<div
					id="hero"
					className="flex flex-col items-center justify-center max-w-6xl mx-auto px-10 border1 pb-8"
				>
					<div className="w-full bg-white rounded-3xl shadow-2xl mt-8 p-8 grid gap-20 md:grid-cols-2  auto-rows-min">
						<div className="md:px-8 md:pt-12 space-y-1 md:space-y-4 border1 border-black">
							<div className="text-3xl font-poppins font-semibold">
								{title} {type}
							</div>
							<div className="font-light">{product.type}</div>
							<div className="text-2xl font-poppins font-semibold">
								${product.price}
							</div>
						</div>
						<div className="border1 border-black md:row-span-2 h-90">
							<ImageGallery imageUrls={[imageUrl, imageModelUrl]} />
						</div>
						<div className="border1 md:row-span-2 space-y-4 md:px-8">
							<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between space-x-0 md:space-x-4 font-poppins">
								<button className="bg-black rounded-xl w-full text-white py-3">
									Add to Cart
								</button>
								<button className="bg-black rounded-xl w-full text-white py-3">
									Add to Wish List
								</button>
							</div>
							<button className="bg-red-900 rounded-xl w-full py-3 text-white font-poppins flex flex-row items-center justify-center space-x-2">
								<img className="h-12" src="redbubbleLogo.png" alt="" />
								<p>Buy it on Redbubble</p>				
							</button>
						</div>
					</div>
				</div>
			)}
			<FeaturedSection
				title="Products you may also like"
				products={relatedProducts}
			/>
			<Footer />
		</>
	);
};

export default ProductPage;
