import Link from "next/link";

const NavLink = ({href, children}) => {
	return (
		<Link href={href}>
			<p className="relative flex px-4 items-center justify-center h-12 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 group duration-300 font-poppins text-sm">
				{children}
			</p>
		</Link>
	);
};

export default NavLink;
