import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					className=""
					src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
					alt="login_image"
				></img>
			</div>
			<form className="w-4/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 text-white bg-opacity-60">
				<h1 className="py-4 text-3xl font-bold">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						className="p-3 my-4 w-full bg-gray-700"
						type="text"
						placeholder="Full Name"
					></input>
				)}
				<input
					className="p-3 my-4 w-full bg-gray-700"
					type="text"
					placeholder="Email Address"
				></input>
				<input
					className="p-3 my-4 w-full bg-gray-700"
					type="password"
					placeholder="Password"
				></input>
				<button className="p-4 my-6 text-white bg-red-700 w-full rounded-lg">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				{/* <h1 className="text-center">OR</h1>
				<button className="p-4 my-6 text-white border border-white bg-gray-700 w-full rounded-lg">
					Use a sign-in Code
				</button> */}
				<p className="py-4">
					{isSignInForm ? (
						<>
							New to Netflix?
							<span
								className="hover:underline px-1 cursor-pointer"
								onClick={toggleSignInForm}
							>
								Sign Up now.
							</span>{" "}
						</>
					) : (
						<>
							Already registered?
							<span
								className="hover:underline px-1 cursor-pointer"
								onClick={toggleSignInForm}
							>
								Sign In now.
							</span>{" "}
						</>
					)}
				</p>
			</form>
		</div>
	);
};

export default Login;
