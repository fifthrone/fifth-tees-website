"use client";

import TagItem from "./tag-item";

const Tags = (props) => {
	const { className } = props;
	const availableTags = [
		"Meme",
		"Food",
		"Dog",
		"Funny",
		"Animal",
		"Family",
		"Cheese",
	];

	return (
		<div
			className={`flex flex-row flex-wrap py-0 items-center justify-start gap-1 sm:gap-2 ${className}`}
		>
			<div className="text-gray-500 text-xl">#</div>
			{availableTags.map((tag) => (
				<TagItem key={tag} tag={tag} />
			))}
		</div>
	);
};

export default Tags;
