import Link from "next/link";
import WishListButtonSimple from "../ui/wish-list-button-simple";

const ProductCard = (props) => {
	const { product, className } = props;
	const { id, imageUrl, price, title, type } = product;

	return (
		<div className={`${className}`}>
			<div className="relative hover:scale-[101%] duration-500">
				<WishListButtonSimple product={product} />
				<Link href={`/${id}`}>
					<div className="p-3 flex flex-col bg-white dark:bg-neutral-600 rounded-2xl shadow-lg space-y-3 relative">
						<img
							src={imageUrl}
							alt="t-shirt"
							className="rounded-xl object-contain hover:scale-100 duration-200"
						/>
						<div className="px-3 space-y-1 font-poppins">
							<h2 className="text-sm">
								{title} {type}
							</h2>
							<p className="text-gray-600 dark:text-neutral-300 text-sm">HK${price}</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
