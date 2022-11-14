import { Children } from "react";

const Breadcrumb = (props) => {
	const { children, separator = "/", className } = props;
	return (
		<nav
			className={`flex flex-row items-center justify-start space-x-3 space-y-0 xborder text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 flex-wrap ${className}`}
		>
			{Children.map(children, (child, index) => (
				<>
					{index >= 1 && (
						<div className="xborder -translate-y-[1px]">
							{separator}
						</div>
					)}
					{child}
				</>
			))}
		</nav>
	);
};

export default Breadcrumb;
