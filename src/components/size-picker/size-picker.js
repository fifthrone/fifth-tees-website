"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetSize, selectSize, setSize } from "../../store/size/size.slice";

const SizePicker = () => {
	const sizes = ["S", "M", "L", "XL", "2XL"];

	const dispatch = useDispatch();
	const currentSize = useSelector(selectSize);

	useEffect(() => {
		dispatch(resetSize());
	}, []);

	return (
		<div className="flex flex-row space-x-4">
			{sizes.map((size) => (
				<button
					key={size}
					className={
						(currentSize === size
							? "bg-blueGray text-white"
							: "hover:border-gray-400 duration-200") +
						" border rounded-full h-10 w-10 flex items-center justify-center"
					}
					onClick={() => {
						dispatch(setSize(size));
					}}
				>
					{size}
				</button>
			))}
		</div>
	);
};

export default SizePicker;
