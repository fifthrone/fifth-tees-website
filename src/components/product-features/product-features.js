const ProductFeatures = (props) => {
	const { type } = props;

	return (
		<div className="space-y-2">
			{type === "T-Shirt" && (
				<>
					<p>Heavyweight 8.25 oz. (~280 gsm) cotton-rich fleece</p>
					<p>80% cotton, 20% polyester</p>
					<p>Crew neck sweatshirt with ribbed cuffs, neckband and hem</p>
					<p>
						Ethically sourced following the World Responsible Apparel Practices
						Standards
					</p>
					<p>Note: If you like your hoodies baggy go 2 sizes up</p>
				</>
			)}
			{type === "Sticker" && (
				<>
					<p>Decorate and personalize laptops, windows, and more</p>
					<p>Removable, kiss-cut vinyl stickers</p>
					<p>Super durable and water-resistant</p>
					<p>1/8 inch (3.2mm) white border around each design</p>
					<p>Matte finish</p>
					<p>
						Sticker types may be printed and shipped from different locations
					</p>
				</>
			)}
		</div>
	);
};

export default ProductFeatures;
