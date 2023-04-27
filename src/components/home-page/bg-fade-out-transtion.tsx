interface BgFadeOutTransitionProps {
	scrollPosition: number;
	startPosition: number;
	endPosition: number;
	children: JSX.Element;
}

const BgFadeOutTransition = (props: BgFadeOutTransitionProps) => {
	const { scrollPosition, startPosition, endPosition, children } = props;

	let opacity = 1;
	let display = "block";

	if (scrollPosition < startPosition) {
		opacity = 1;
	} else if (startPosition <= scrollPosition && scrollPosition <= endPosition) {
		opacity =
			1 - (scrollPosition - startPosition) / (endPosition - startPosition);
	} else if (endPosition < scrollPosition) {
		opacity = 0;
		display = "none";
	}

	// console.log(opacity)

	return (
		<div
			className="w-full h-full"
			style={{ opacity: opacity, display: display }}
		>
			{children}
		</div>
	);
};

export default BgFadeOutTransition;
