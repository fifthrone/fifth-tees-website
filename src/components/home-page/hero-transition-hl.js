"use client";

import React, { useRef, useState } from "react";
// import { Transition } from "react-transition-group";
import { Transition } from "@headlessui/react";

const HeroTransitionHl = (props) => {
	const {
		scrollPosition,
		inPosition,
		outPosition,
		transitionStyle,
		index,
		children,
		...otherProps
	} = props;

	const nodeRef = useRef(null);

	const [toggleTransition, setToggleTransition] = useState(true);

	if (toggleTransition && scrollPosition < inPosition) {
		setToggleTransition(false);
	}
	if (
		!toggleTransition &&
		scrollPosition >= inPosition &&
		scrollPosition <= outPosition
	) {
		setToggleTransition(true);
	}
	if (toggleTransition && scrollPosition > outPosition) {
		setToggleTransition(false);
	}

	let delay = "";
	if (index === 0) {
		delay = "";
	} else if (index === 1) {
		delay = "delay-75";
	} else if (index === 2) {
		delay = "delay-150";
	}

	return (
		<Transition
			show={toggleTransition}
			appear={true}
			enter={`transition-transform duration-700 ${delay} `}
			enterFrom={
				scrollPosition > (inPosition + outPosition) / 2
					? "-translate-x-[100vw]"
					: "translate-x-[100vw]"
			}
			enterTo="translate-x-0"
			leave={`transition-transform duration-700 ${delay}`}
			leaveFrom="translate-x-0"
			leaveTo={
				scrollPosition > (inPosition + outPosition) / 2
					? "-translate-x-[100vw]"
					: "translate-x-[100vw]"
			}
			{...otherProps}
		>
			{children}
		</Transition>
	);
};

export default HeroTransitionHl;
