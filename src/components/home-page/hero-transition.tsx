"use client";

import React, { useRef, useState } from "react";
import { Transition } from "react-transition-group";

const transitionStyles = {
	slideHorizontal: {
		in: {
			entering: { transform: "translateX(0%)" },
			entered: { transform: "translateX(0%)" },
			exiting: { transform: "translateX(1100px)" },
			exited: { transform: "translateX(1100px)" },
			// entering: { transform: "translateX(0%)" },
			// entered: { transform: "translateX(0%)" },
			// exiting: { transform: "translateX(1100px)" },
			// exited: { transform: "translateX(1100px)" },
		},
		out: {
			entering: { transform: "translateX(0%)" },
			entered: { transform: "translateX(0%)" },
			exiting: { transform: "translateX(-1100px)" },
			exited: { transform: "translateX(-1100px)" },
		},
	},
	slideOpacityVertical: {
		in: {
			entering: { transform: "translateY(0%)" },
			entered: { transform: "translateY(0%)" },
			exiting: { transform: "translateY(200px)", opacity: 0 },
			exited: { transform: "translateY(200px)", opacity: 0 },
		},
		out: {
			entering: { transform: "translateY(0%)" },
			entered: { transform: "translateY(0%)" },
			exiting: { transform: "translateY(-200px)", opacity: 0 },
			exited: { transform: "translateY(-200px)", opacity: 0 },
		},
	},
	slideDiagonal: {
		in: {
			entering: { transform: "translate(-100vw, -100vh)" },
			entered: { transform: "translate(-100vw, -100vh)" },
			// entering: { transform: "translate(-500px, -500px)" },
			// entered: { transform: "translate(-500px, -500px)" },
			exiting: { transform: "translate(0vw, 0vh)" },
			exited: { transform: "translate(0vw, 0vh)" },
		},
		out: {
			entering: { transform: "translate(-100vw, -100vh)" },
			entered: { transform: "translate(-100vw, -100vh)" },
			exiting: { transform: "translate(-200vw, -200vh)" },
			exited: { transform: "translate(-200vw, -200vh)" },
		},
	},
};

interface HeroTransition {
	className?: string;
	scrollPosition: number;
	inPosition: number;
	outPosition: number;
	transitionStyle: string;
	delay: number;
	children: JSX.Element;
}

const HeroTransition = (props) => {
	const {
		className,
		scrollPosition,
		inPosition,
		outPosition,
		transitionStyle,
		delay,
		children,
		...otherProps
	} = props;

	const nodeRef = useRef(null);

	const [toggleTransition, setToggleTransition] = useState<boolean | null>(
		null
	);

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

	return (
		<Transition
			in={toggleTransition}
			timeout={700 + delay}
			nodeRef={nodeRef}
			{...otherProps}
		>
			{(state) => (
				<div
					className={className}
					style={{
						transitionProperty: "all",
						transitionTimingFunction:
							scrollPosition > (inPosition + outPosition) / 2
								? "ease-out"
								: "ease-out",
						transitionDelay: `${delay}ms`,
						transitionDuration: "0.7s",
						...(scrollPosition > (inPosition + outPosition) / 2
							? transitionStyles[transitionStyle]["out"][state]
							: transitionStyles[transitionStyle]["in"][state]),
					}}
				>
					{children}
				</div>
			)}
		</Transition>
	);
};

HeroTransition.defaultProps = {
	transitionStyles: "slideHorizontal",
};

export default HeroTransition;
