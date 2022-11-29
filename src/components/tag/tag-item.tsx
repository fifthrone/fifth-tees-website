"use client";

import { useDispatch, useSelector } from "react-redux";
import { setTag, selectTag } from "../../store/tag/tag.slice";

const TagItem = (props) => {
	const { tag } = props;

	const dispatch = useDispatch();
	const curretTag = useSelector(selectTag);

	return (
		<button
			className={`bg-white p-1 px-3 sm:px-4 shadow-md rounded-full hover:-translate-y-0.5 duration-300 text-xs sm:text-base font-semibold ${
				curretTag === tag
					? "bg-black text-white dark:bg-blue-200 dark:text-blueGray"
					: "text-lightBlueGray dark:bg-neutral-700 dark:text-neutral-400"
			}`}
			onClick={() => {
				curretTag === tag ? dispatch(setTag("")) : dispatch(setTag(tag));
			}}
		>
			{tag}
			{/* {curretTag} */}
		</button>
	);
};

export default TagItem;
