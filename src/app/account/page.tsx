import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

const AccountPage = () => {
	return (
		<div className="max-w-5xl px-10 mx-auto">
			<div className="mt-8 bg-white p-8 rounded-3xl flex flex-col sm:flex-row items-center1 justify-center sm:space-x-8 shadow-xl space-y-12 sm:space-y-0">
				<SignUpForm />
				<div className="border-l"></div>
        <hr className="sm:hidden" />
				<SignInForm />
			</div>
		</div>
	);
};

export default AccountPage;
