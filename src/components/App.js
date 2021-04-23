import React from "react";
//& components
import "../styles/app.scss";
import UploadForm from "./UploadForm";
import Login from "./Login";
import Header from "./Header";
//& firebase
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

const App = () => {
	const [user] = useAuthState(auth);
	return (
		<div className="App">
			<Header user={user} />
			{user ? <UploadForm user={user} /> : <Login />}
		</div>
	);
};

export default App;
