const FormInput = ({ label, ...otherProps }) => {
	return (
		<div className="flex flex-col space-y-1">
      <p className="text-sm text-blueGray">{label}</p>
			<input className="p-2 border border-blueGray rounded-lg text-black" {...otherProps} />
		</div>
	);
};

export default FormInput;
