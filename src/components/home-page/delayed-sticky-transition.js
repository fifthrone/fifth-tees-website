"use client";

import { useEffect, useState, useRef } from "react";

const DelayedStickyTransition = (props) => {
	const { scrollPosition, stickAt = 100, unstickAt, children } = props;

	const [initialPosition, setInitialPosition] = useState(0);

	useEffect(() => {
		if (ref.current) {
			setInitialPosition(ref.current.getBoundingClientRect().top);
		}
		setInitialPosition;
	}, []);

	const ref = useRef(null);

	let translateAmount = Math.max(0, scrollPosition - initialPosition + 200);
	// let translateAmount = 0;

	// if (ref.current) {
	// 	console.log(ref.current.getBoundingClientRect().top);
	// 	translateAmount = Math.max(
	// 		0,
	// 		scrollPosition - ref.current.getBoundingClientRect().top
	// 	);
	// }

	return (
		<div ref={ref} style={{ transform: `matrix(0.9, 0, 0, 1, 0, 0)` }}>
			{children}
		</div>
		// <div ref={ref} style={{ transform: `translateY(${translateAmount}px)` }}>
		// 	{children}
		// </div>
	);
};

export default DelayedStickyTransition;
