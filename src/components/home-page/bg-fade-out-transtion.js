const BgFadeOutTransition = (props) => {
	const { scrollPosition, startPosition, endPosition, children } = props;

	let opacity = 1;

	if (scrollPosition < startPosition) {
		opacity = 1;
	} else if (startPosition <= scrollPosition && scrollPosition <= endPosition) {
		opacity =
			1 - (scrollPosition - startPosition) / (endPosition - startPosition);
	} else if (endPosition < scrollPosition) {
		opacity = 0;
	}

	// console.log(opacity)

	return (
		<div className="w-full h-full" style={{ opacity: opacity }}>
			{children}
		</div>
	);
};

export default BgFadeOutTransition;
