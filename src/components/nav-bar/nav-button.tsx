"use client";

// interface NavButtonProps {
// 	label?: string
// 	className?: string,
// 	children:
// }

const NavButton = ({
	label = null,
	className,
	children,
	buttonRef = null,
	...otherProps
}) => {
	return (
		<button
			className={`relative flex items-center justify-center p-3 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 group duration-300 ${className}`}
			ref={buttonRef}
			{...otherProps}
		>
			{children}
			{label ? (
				<div className="opacity-0 text-center w-max p-1 px-2 text-xs top-12 absolute bg-yellow-900 text-white rounded-xl group-hover:opacity-100 duration-300">
					{label}
				</div>
			) : null}
		</button>
	);
};

export default NavButton;
