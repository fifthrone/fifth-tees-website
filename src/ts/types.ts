export interface Product {
	id: string;
	imageUrl: string;
	imageMaskedUrl: string;
	imageModelUrl: string;
	title: string;
	price: number;
	type: string;
	size?: string;
	description: string;
	otherTypeId: string[];
	relatedId: string[];
	redbubbleUrl: string;
	tags: string[];
}

export interface CartItem extends Product {
	qty: number;
}

export interface FeaturedItem {
	title: string;
	productIds: string[];
}
