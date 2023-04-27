"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetSize, selectSize, setSize } from "../../store/size/size.slice";
import { AppDispatch } from "../../store/store";

const SizePicker = () => {
	const sizes = ["S", "M", "L", "XL", "2XL"];

	const dispatch = useDispatch<AppDispatch>();
	const currentSize = useSelector(selectSize);

	useEffect(() => {
		dispatch(resetSize());
	}, [dispatch]);

	return (
		<div className="flex flex-row flex-wrap gap-x-1 sm:gap-x-4 gap-y-1">
			{sizes.map((size) => (
				<button
					key={size}
					className={
						(currentSize === size
							? "bg-blueGray dark:bg-lightBlueGray text-white"
							: "hover:border-gray-400 dark:hover:border-lightBlueGray duration-200") +
						" border dark:border-neutral-700 rounded-full h-10 w-10 flex items-center justify-center"
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
