import Link from "next/link";
import Image from "next/image";
import TextFormatter from "../text-formatter/text-formatter";
import WishListButtonSimple from "../ui/wish-list-button-simple";

const ProductCard = (props) => {
	const { product, className } = props;
	const { id, imageUrl, price, title, type } = product;

	return (
		<div className={`${className}`}>
			<div className="relative hover:scale-[101%] duration-500">
				<WishListButtonSimple product={product} />
				<Link href={`/${id}`}>
					<div className="p-2 sm:p-3 flex flex-col bg-white dark:bg-neutral-600 rounded-2xl shadow-lg space-y-1.5 sm:space-y-3 relative">
						<Image
							src={`/${imageUrl}`}
							alt="t-shirt"
							width={500}
							height={500}
							className="rounded-xl object-contain hover:scale-100 duration-200"
						/>
						<div className="px-1 sm:px-2 space-y-1 font-poppins">
							<TextFormatter className="">{`${title} ${type} `}</TextFormatter>
							<p className="text-gray-600 dark:text-neutral-300 text-xs sm:text-sm">
								HK${price}
							</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
