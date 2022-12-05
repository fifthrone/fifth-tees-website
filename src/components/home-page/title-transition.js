const TitleTransition = (props) => {
	const { scrollPosition, inPosition, outPosition, children, className } =
		props;

	const fadeDuration = 60;
	const translateAmount = 150;
	let display = "block";
	let opacity = 1;
	let y = 0;

	if (scrollPosition < inPosition - fadeDuration) {
		opacity = 0;
		y = translateAmount;
		display = "none";
	} else if (
		inPosition - fadeDuration <= scrollPosition &&
		scrollPosition < inPosition
	) {
		opacity = (scrollPosition - (inPosition - fadeDuration)) / fadeDuration;
		y = (1 - opacity) * translateAmount;
	} else if (inPosition <= scrollPosition && scrollPosition < outPosition) {
		opacity = 1;
		y = 0;
	} else if (
		outPosition <= scrollPosition &&
		scrollPosition < outPosition + fadeDuration
	) {
		opacity = 1 - (scrollPosition - outPosition) / fadeDuration;
		y = -(1 - opacity) * translateAmount;
	} else if (outPosition <= scrollPosition) {
		opacity = 0;
		y = -translateAmount;
		display = "none";
	}

	// console.log(opacity);
	// console.log(y);

	return (
		<div
			className={className}
			style={{
				opacity: opacity,
				transform: `translateY(${y}px)`,
				display: display,
			}}
		>
			{children}
		</div>
	);
};

export default TitleTransition;
