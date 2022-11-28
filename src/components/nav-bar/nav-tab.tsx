"use client";

import { Transition } from "react-transition-group";

import { useRef } from "react";

const NavTab = (props) => {
	const { children, isOpen } = props;

	const nodeRef = useRef(null);

	return (
		<Transition
			in={isOpen}
			timeout={500}
			mountOnEnter={true}
			unmountOnExit={true}
			nodeRef={nodeRef}
		>
			{(state) => (
				<div
					ref={nodeRef}
					className={`fixed w-max right-0 md:top-16 top-12 bg-white dark:bg-neutral-800 rounded-bl-3xl md:rounded-lg z-40 transition-all duration-500 md:transition-none md:duration-0 md:translate-x-0 border-t-0 md:border-0 dark:border-neutral-900 shadow-lg1 
					shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),inset_0px_10px_8px_-11px_rgba(0,0,0,0.4)] md:shadow-[0_25px_80px_-10px_rgba(0,0,0,0.7)] ${
						state === "entering"
							? "translate-x-0"
							: state === "entered"
							? "translate-x-0"
							: state === "exiting"
							? "translate-x-full"
							: state === "exited"
							? "translate-x-full"
							: ""
					} ${isOpen ? "md:absolute" : "md:hidden"}`}
				>
					{children}
				</div>
			)}
		</Transition>
	);
};

export default NavTab;
