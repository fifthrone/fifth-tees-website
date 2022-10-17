import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
import SizePicker from "../../components/size-picker/size-picker";

const ProductPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const id = router.query.productId;

	const product = useSelector(selectProduct);
	console.log("product:", product);

	const [size, setSize] = useState("M");
	const [sizeGuideIsOpen, setSizeGuideIsOpen] = useState(false);

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
				<div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-10 border1 pb-8">
					<div className="w-full bg-white rounded-3xl shadow-2xl mt-8 p-12">
						<div className="border1 grid gap-14 md:grid-cols-2  auto-rows-min">
							<div className="md:pt-12 space-y-1 md:space-y-4 border1 border-black">
								<div className="text-3xl font-poppins font-semibold">
									{title} {type}
								</div>
								<div className="font-light">{product.type}</div>
								<div className="text-2xl font-poppins font-semibold">
									${product.price}
								</div>
								{type === "T-Shirt" && (
									<div className="flex flex-col space-y-1 justify-start">
										<h2 className="font-poppins text-lg">Size</h2>
										<SizePicker
											sizes={["S", "M", "L", "XL", "2XL"]}
											currentSize={size}
											setCurrentSize={setSize}
										/>
										<div className="flex flex-row space-x-1.5 items-center pt-1">
											<i className="pl-1 fa-solid fa-ruler text-blue-500 border1"></i>
											<button className="pt-0.5 border1 self-start font-poppins text-sm text-blue-500 hover:underline">
												View size guide
											</button>
										</div>
									</div>
								)}
							</div>
							<div className="border1 border-black md:row-span-2 h-90">
								<ImageGallery imageUrls={[imageUrl, imageModelUrl]} />
							</div>
							<div className="border1 md:row-span-1 space-y-4">
								<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between space-x-0 md:space-x-4 font-poppins">
									<button className="flex flex-row items-center justify-center bg-black rounded-xl w-full text-white py-3 space-x-2 px-2">
										<i className="pl-1 fa-solid fa-shopping-cart border1"></i>
										<p>Add to Cart</p>
									</button>
									<button className="flex flex-row items-center justify-center bg-black rounded-xl w-full text-white py-3 space-x-2 px-2">
										<i className="pl-1 fa-solid fa-heart border1"></i>
										<p>Add to Wish List</p>
									</button>
								</div>
								<button className="bg-red-900 rounded-xl w-full py-3 text-white font-poppins flex flex-row items-center justify-center space-x-2 px-2">
									<img className="h-12" src="redbubbleLogo.png" alt="" />
									<p>Buy it on Redbubble</p>
								</button>
							</div>
						</div>
						<div className="border-t-2 border-gray-300 my-16"></div>
						<div className="grid gap-6 md:grid-cols-4 font-poppins">
							<div className="font-semibold text-xl">Features</div>
							<div className="col-span-3 space-y-2">
								<p>Heavyweight 8.25 oz. (~280 gsm) cotton-rich fleece</p>
								<p>80% cotton, 20% polyester</p>
								<p>Crew neck sweatshirt with ribbed cuffs, neckband and hem</p>
								<p>
									Ethically sourced following the World Responsible Apparel
									Practices Standards
								</p>
								<p>Note: If you like your hoodies baggy go 2 sizes up</p>
							</div>
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
