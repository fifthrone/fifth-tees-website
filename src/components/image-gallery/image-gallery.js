"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

const ImageGallery = ({ imageUrls }) => {
	const [currentImageUrl, setCurrentImageUrl] = useState("");

	useEffect(() => {
		setCurrentImageUrl(imageUrls[0]);
	}, [imageUrls]);

	return (
		<div className="flex flex-col border1 items-center justify-center space-y-4">
			<Image
				className="rounded-2xl"
				src={`/${currentImageUrl}`}
				alt=""
				width={500}
				height={500}
				priority={true}
			/>
			<div className="flex flex-row items-center justify-center space-x-4">
				{imageUrls.map((imageUrl) => (
					<div
						key={imageUrl}
						onClick={() => {
							setCurrentImageUrl(imageUrl);
						}}
						className="flex flex-col items-center-justify-center space-y-2 group"
					>
						<Image
							className="h-14 w-auto rounded-md"
							src={`/${imageUrl}`}
							alt=""
							width={100}
							height={100}
						/>
						<div
							className={
								(imageUrl === currentImageUrl
									? "border-t-2 border-gray-400"
									: "border-t-2 border-gray-200 opacity-0 group-hover:opacity-100") +
								" w-full duration-200"
							}
						></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageGallery;
