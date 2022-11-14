import Link from "next/link";

const FooterLink = (props) => {
	const { href, children, className } = props;

	return (
		<Link href={href} className={`font-light hover:underline ${className}`}>
			{children}
		</Link>
	);
};

export default FooterLink;
