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
						<div className="absolute p-8 bg-white dark:bg-neutral-800 rounded-2xl flex flex-col items-center justify-center space-y-4">
							<button
								onClick={() => {
									setIsSizeGuideOpen(false);
								}}
								className="absolute top-4 right-4 text-neutral-400"
							>
								<i className="fa-lg fa-solid fa-xmark"></i>
							</button>
							<h2 className="font-semibold text-xl p-2">Size Guide</h2>
							<table className="table-auto">
								<thead>
									<tr className="p-2">
										<th className="p-4 px-4 sm:px-16 border-b">Size</th>
										<th className="p-4 px-4 sm:px-16 border-b">Chest</th>
										<th className="p-4 px-4 sm:px-16 border-b">Length</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="p-4 px-4 sm:px-16 border-b">S</td>
										<td className="p-4 px-4 sm:px-16 border-b">92 cm</td>
										<td className="p-4 px-4 sm:px-16 border-b">71 cm</td>
									</tr>
									<tr>
										<td className="p-4 px-4 sm:px-16 border-b">M</td>
										<td className="p-4 px-4 sm:px-16 border-b">102 cm</td>
										<td className="p-4 px-4 sm:px-16 border-b">74 cm</td>
									</tr>
									<tr>
										<td className="p-4 px-4 sm:px-16 border-b">L</td>
										<td className="p-4 px-4 sm:px-16 border-b">112 cm</td>
										<td className="p-4 px-4 sm:px-16 border-b">76 cm</td>
									</tr>
									<tr>
										<td className="p-4 px-4 sm:px-16 border-b">XL</td>
										<td className="p-4 px-4 sm:px-16 border-b">122 cm</td>
										<td className="p-4 px-4 sm:px-16 border-b">79 cm</td>
									</tr>
									<tr>
										<td className="p-4 px-4 sm:px-16 xborder-b">2XL</td>
										<td className="p-4 px-4 sm:px-16 xborder-b">132 cm</td>
										<td className="p-4 px-4 sm:px-16 xborder-b">81 cm</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default SizeGuide;
