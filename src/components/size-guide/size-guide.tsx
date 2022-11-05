"use client";

import { useState } from "react";

const SizeGuide = () => {
	const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => {
					setIsSizeGuideOpen(true);
				}}
				className="flex flex-row space-x-1.5 items-center pt-1 group max-w-max"
			>
				<i className="pl-1 fa-solid fa-ruler text-blue-500 border1"></i>
				<p className="pt-0.5 border1 self-start font-poppins text-sm text-blue-500 group-hover:underline">
					View size guide
				</p>
			</button>
			{isSizeGuideOpen && (
				<>
					<div className="fixed inset-0 flex items-center justify-center">
						<div
							className="w-full h-full bg-black opacity-50"
							onClick={() => {
								setIsSizeGuideOpen(false);
							}}
						></div>
						<div className="absolute p-8 bg-white rounded-2xl">testing</div>
					</div>
				</>
			)}
		</>
	);
};

export default SizeGuide
