import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useRef } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {
	const [isTapped, setIsTapped] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});
		return () => unsubscribe();
	}, []);

	const handleMouseEnter = () => {
		setIsTapped(true);
	};

	const handleMouseLeave = () => {
		setIsTapped(false);
	};

	return (
		<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
			<img className="w-44" src={LOGO} alt="logo"></img>
			{user && (
				<div
					className="flex"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<img
						className="w-16 m-2 p-2 hover:cursor-pointer rounded-xl"
						src={user?.photoURL}
					></img>
					{isTapped && (
						<div className="absolute text-white right-[0px] top-20 rounded-lg ">
							<div className="">
								{/* <div className="mx-4 text-white px-10 py-3 bg-black text-center rounded-t-lg border-b border-gray-200 hover:bg-opacity-90 hover:cursor-pointer  hover:bg-red-700">
									Profile
								</div>
								<div className="mx-4 px-10 text-white py-3 bg-black text-center  border-b border-gray-200 hover:bg-opacity-90 bg-gradient-to-br from-black hover:cursor-pointer ">
									Saved
								</div>
								<div className="mx-4 py-3 px-10 text-white bg-black text-center border-b border-gray-200 hover:bg-opacity-90 bg-gradient-to-br from-black hover:cursor-pointer  ">
									Subscription
								</div> */}
								<div
									onClick={handleSignOut}
									className="mr-6 py-2 px-4 text-white bg-black cursor-pointer text-center rounded transition-colors duration-200 font-semibold hover:bg-white hover:text-black"
								>
									Sign Out
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Header;
