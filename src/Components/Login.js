import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData1, checkValidData2 } from "../utils/checkValidData";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const navigate = useNavigate();

	const handleButtonClick = () => {
		// SignIn/SignUp Authenticatin

		if (isSignInForm) {
			console.log("Sign In");
			const message = checkValidData1(
				email.current.value,
				password.current.value
			);
			if (message) return;

			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					navigate("/browse");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorCode + " - " + errorMessage);
				});
		} else {
			console.log("Sign Up");
			const message = checkValidData2(
				name.current.value,
				email.current.value,
				password.current.value
			);
			if (message) return;
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value,
						photoURL: "https://avatars.githubusercontent.com/u/74318710?v=4",
					})
						.then(() => {
							navigate("/browse");
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + " - " + errorMessage);
				});
		}
	};

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
			<form
				onSubmit={(e) => e.preventDefault()}
				className="w-4/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 text-white bg-opacity-60"
			>
				<h1 className="py-4 text-3xl font-bold">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						ref={name}
						className="p-3 my-4 w-full bg-gray-700"
						type="text"
						placeholder="Full Name"
					></input>
				)}
				<input
					ref={email}
					className="p-3 my-4 w-full bg-gray-700"
					type="text"
					placeholder="Email Address"
				></input>
				<input
					ref={password}
					className="p-3 my-4 w-full bg-gray-700"
					type="password"
					placeholder="Password"
				></input>
				<p className="text-red-500 font-bold">{errorMessage}</p>
				<button
					className="p-4 my-6 text-white bg-red-700 w-full rounded-lg"
					onClick={handleButtonClick}
				>
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
