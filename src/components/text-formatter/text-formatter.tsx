"use client";

import { useIsOverflow } from "../hook/useIsOverflow";
import { useRef } from "react";

const TextFormatter = (props) => {
	const { children, className } = props;

	const ref = useRef(null);
	const isOverflow = useIsOverflow(ref, () => {});

	return (
		<p
			className={`block text-xs sm:text-sm h-8 sm:h-10 overflow-hidden ${className}`}
			ref={ref}
		>
			{children}
		</p>
	);
};

export default TextFormatter;
