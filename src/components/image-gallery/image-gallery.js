import { useEffect, useState } from "react";

const ImageGallery = ({ imageUrls }) => {
	const [currentImageUrl, setCurrentImageUrl] = useState("");

	useEffect(() => {
		setCurrentImageUrl(imageUrls[0]);
	}, [imageUrls]);

	return (
		<div className="flex flex-col border1 items-center justify-center space-y-4">
			<img className="rounded-2xl" src={currentImageUrl} alt="" />
			<div className="flex flex-row items-center justify-center space-x-4">
				{imageUrls.map((imageUrl) => (
					<div
						key={imageUrl}
						onClick={() => {
                            setCurrentImageUrl(imageUrl)
                        }}
						className="flex flex-col items-center-justify-center space-y-2 group"
					>
						<img
							className="h-14 rounded-md"
							src={imageUrl}
							alt=""
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
