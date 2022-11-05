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
	otherTypeId: string;
	relatedId: string[];
	redbubbleUrl: string;
}
