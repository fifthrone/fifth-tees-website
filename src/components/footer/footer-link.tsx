"use client";

import Link from "next/link";

import { useDispatch } from "react-redux";
import { setTag } from "../../store/tag/tag.slice";

const FooterLink = (props) => {
	const { href, children, className, tag = "" } = props;

	const dispatch = useDispatch();

	return (
		<Link
			href={href}
			className={`font-light hover:underline ${className}`}
			onClick={() => {
				dispatch(setTag(tag));
			}}
			scroll={true}
		>
			{children}
		</Link>
	);
};

export default FooterLink;
