import Link from "next/link";

const BreadcrumbItem = ({ href = null, children, className="" }) => {
	return (
		<>
			{href ? (
				<Link
					href={href}
					className={`hover:text-neutral-800 dark:hover:text-neutral-100 font-poppins transition duration-200 ${className}`}
				>
					{children}
				</Link>
			) : (
				<div className="font-poppins text-neutral-800 dark:text-neutral-100">{children}</div>
			)}
		</>
	);
};

export default BreadcrumbItem;
