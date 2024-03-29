import FeaturedSection from "../../components/home-page/featured-section";
import ImageGallery from "../../components/image-gallery/image-gallery";
import SizePicker from "../../components/size-picker/size-picker";
import ProductFeatures from "../../components/product-features/product-features";
import AddToWishListButton from "../../components/wish-list/add-to-wish-list-button";
import AddToCartButton from "../../components/cart/add-to-cart-button";
import SizeGuide from "../../components/size-guide/size-guide";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import BreadcrumbItem from "../../components/breadcrumb/breadcrumb-item";

import Image from "next/image";

import {
	getData,
	getProduct,
	getProducts,
} from "../../utils/firebase/firebase.utils";

import { Product } from "../../ts/types";

interface ProductPageProps {
	params: { productId: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
	const product: Product = await getProduct(params.productId);

	// const router = useRouter();
	// const dispatch = useDispatch();
	// const id = router.query.productId;
	// const product = useSelector(selectProduct);
	// console.log("product:", product);

	const {
		imageUrl,
		imageModelUrl,
		price,
		title,
		description,
		type,
		size,
		otherTypeId,
		relatedId,
		redbubbleUrl,
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
			redbubbleUrl:
				"https://www.redbubble.com/i/t-shirt/Coffee-Matters-Science-T-shirt-by-FifthTees/104556924.FB110",
			tags: ["Food", "Meme", "Funny"],
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
			redbubbleUrl:
				"https://www.redbubble.com/i/t-shirt/Dad-Lifts-Dinosaur-Deadlifting-Cute-Jr-T-shirt-by-FifthTees/102442393.FB110",
			tags: ["Kids", "Family", "Funny"],
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
			redbubbleUrl:
				"https://www.redbubble.com/i/t-shirt/Swole-Doge-Dogtor-Meme-Shiba-Inu-Dog-by-FifthTees/84185429.FB110",
			tags: ["Dog", "Meme", "Funny", "Animal"],
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
			redbubbleUrl:
				"https://www.redbubble.com/i/t-shirt/Swole-Doge-Dogtor-Meme-Shiba-Inu-Dog-by-FifthTees/84185429.FB110",
			tags: ["Friendship", "Meme", "Funny"],
		},
	];

	const typeToHrefMap = {
		"T-Shirt": "/t-shirts",
		Sticker: "/stickers",
	};

	return (
		<>
			<div className="w-full h-12 md:h-16"></div>
			<div className="px-2 sm:px-10 max-w-6xl mx-auto">
				<Breadcrumb className="pl-2 py-4">
					<BreadcrumbItem
						href="/"
						className="hover:text-neutral-600 dark:hover:text-neutral-300 duration-200 transition"
					>
						<i className="fa-solid fa-house"></i>
					</BreadcrumbItem>
					<BreadcrumbItem href="/products">Products</BreadcrumbItem>
					<BreadcrumbItem href={typeToHrefMap[type]}>{type}s</BreadcrumbItem>
					<BreadcrumbItem>{title}</BreadcrumbItem>
				</Breadcrumb>
			</div>
			{product && (
				<div className="flex flex-col items-center justify-center max-w-6xl mx-auto sm:px-10 px-2 border1 pb-4">
					<div className="w-full bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl p-6 sm:p-12">
						<div className="border1 grid gap-4 sm:gap-14 md:grid-cols-2  auto-rows-min">
							<div className="md:pt-12 space-y-2 md:space-y-4 border1 border-black">
								<div className="text-xl sm:text-3xl font-poppins font-semibold">
									{title} {type}
								</div>
								<div className="text-xs sm:text-base font-light">
									{product.type}
								</div>
								<div className="text-lg sm:text-2xl font-poppins font-semibold">
									${product.price}
								</div>
								{type === "T-Shirt" && (
									<div className="flex flex-col space-y-1 justify-start">
										<h2 className="font-poppins text-lg">Size</h2>
										<SizePicker />
										<SizeGuide />
									</div>
								)}

								{type === "Sticker" && (
									<div className="flex flex-col space-y-0 justify-start pt-2">
										<h2 className="font-poppins text-lg">Size</h2>
										<h2 className="font-poppins text-xl font-semibold">
											Small ({size})
										</h2>
									</div>
								)}
							</div>
							<div className="border1 border-black md:row-span-2 h-90">
								<ImageGallery imageUrls={[imageUrl, imageModelUrl]} />
							</div>
							<div className="border1 md:row-span-1 space-y-4">
								<div className="grid xgrid-cols-1 grid-cols-5 gap-4 font-poppins">
									<AddToCartButton className="col-span-3" product={product} />
									<AddToWishListButton
										className="col-span-2"
										product={product}
									/>
								</div>
								<a
									href={redbubbleUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-red-900 rounded-xl w-full py-3 text-white font-poppins flex flex-row items-center justify-center space-x-2 px-2 hover:bg-red-800"
								>
									<Image
										className="h-12 w-auto"
										src="/redbubbleLogo.png"
										alt="Redbubble"
										width={50}
										height={50}
									/>
									<p>Buy it on Redbubble</p>
								</a>
							</div>
						</div>
						<div className="border-t-2 border-gray-300 my-8 sm:my-12"></div>
						<div className="grid gap-6 md:grid-cols-4 font-poppins">
							<div className="font-semibold text-xl">Description</div>
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
						<div className="border-t-2 border-gray-300 my-8 sm:my-12"></div>
						<div className="grid gap-6 md:grid-cols-4 font-poppins mb-4 sm:mb-8">
							<div className="font-semibold text-xl">Features</div>
							<div className="col-span-3">
								<ProductFeatures type={type} />
							</div>
						</div>
					</div>
				</div>
			)}
			<FeaturedSection
				title="Products you may also like"
				products={relatedProducts}
			/>
		</>
	);
};

export async function generateStaticParams() {
	const products = await getData("products");

	return products.map((product) => ({ productId: product.id }));
}

export default ProductPage;
