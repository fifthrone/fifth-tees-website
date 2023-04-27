interface FadeInOutTransitionProps {
	scrollPosition: number;
	inPosition: number;
	outPosition: number;
	children: JSX.Element;
}

const FadeInOutTransition = (props: FadeInOutTransitionProps) => {
	const { scrollPosition, inPosition, outPosition, children } = props;

	const fadeDuration = 100;
	let opacity = 1;
	let display = "block";

	if (scrollPosition < inPosition - fadeDuration) {
		opacity = 0;
		display = "none";
	} else if (
		inPosition - fadeDuration <= scrollPosition &&
		scrollPosition < inPosition
	) {
		opacity = (scrollPosition - (inPosition - fadeDuration)) / fadeDuration;
	} else if (inPosition <= scrollPosition && scrollPosition < outPosition) {
		opacity = 1;
	} else if (
		outPosition <= scrollPosition &&
		scrollPosition < outPosition + fadeDuration
	) {
		opacity = 1 - (scrollPosition - outPosition) / fadeDuration;
	} else if (outPosition <= scrollPosition) {
		opacity = 0;
		display = "none";
	}

	// console.log(opacity)

	return (
		<div className="w-full h-full" style={{ opacity: opacity }}>
			{children}
		</div>
	);
};

export default FadeInOutTransition;
