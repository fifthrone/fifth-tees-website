const FormInput = ({ label, ...otherProps }) => {
	return (
		<div className="flex flex-col space-y-1">
      <p className="text-sm text-blueGray dark:text-blue-200">{label}</p>
			<input className="p-2 border border-blueGray dark:border-blue-200 rounded-lg text-black" {...otherProps} />
		</div>
	);
};

export default FormInput;
