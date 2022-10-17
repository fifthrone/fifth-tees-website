const SizePicker = (props) => {
	const { sizes, currentSize, setCurrentSize } = props;

	return (
		<div className="flex flex-row space-x-4">
			{sizes.map((size) => (
				<button
					className={
						(currentSize === size ? "bg-blueGray text-white" : "hover:border-gray-400 duration-200") +
						" border rounded-full h-10 w-10 flex items-center justify-center"
					}
                    onClick={()=>{setCurrentSize(size)}}
				>
					{size}
				</button>
			))}
		</div>
	);
};

export default SizePicker;
