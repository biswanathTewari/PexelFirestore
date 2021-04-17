import React from "react";
import google from "../icons/google.png";
//& firebase
import firebase from "firebase";
import { auth } from "../firebase/config";

const Login = () => {
	const onClickHandler = () => {
		auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	};
	return (
		<div className="login">
			<h3>SignIn to upload</h3>
			<button onClick={onClickHandler}>
				Sign in with <img src={google} alt="Google" />
			</button>
		</div>
	);
};

export default Login;
