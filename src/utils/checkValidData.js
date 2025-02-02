export const checkValidData1 = (email, password) => {
	const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
	const isPasswordValid =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

	if (!isEmailValid) return "Email Id is not valid";
	if (!isPasswordValid) return "Password is not valid";

	return null;
};

export const checkValidData2 = (name, email, password) => {
	const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
	const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
	const isPasswordValid =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

	if (!isNameValid) return "Full Name is not valid";
	if (!isEmailValid) return "Email Id is not valid";
	if (!isPasswordValid) return "Password is not valid";

	return null;
};
