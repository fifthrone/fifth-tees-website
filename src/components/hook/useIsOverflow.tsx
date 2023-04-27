import * as React from "react";

export const useIsOverflow = (
	ref: React.MutableRefObject<HTMLElement>,
	callback: (hasOverflow: boolean) => void
) => {
	const [isOverflow, setIsOverflow] = React.useState(undefined);

	React.useEffect(() => {
		const { current } = ref;

		const trigger = () => {
			const hasOverflow = current.scrollWidth > current.clientWidth;

			setIsOverflow(hasOverflow);

			if (callback) callback(hasOverflow);
		};

		if (current) {
			if ("ResizeObserver" in window) {
				new ResizeObserver(trigger).observe(current);
			}

			trigger();
		}
	}, [callback, ref]);

	return isOverflow;
};
