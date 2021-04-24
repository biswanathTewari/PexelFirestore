import React, { useState } from "react";
//& components
import "../styles/app.scss";
import UploadForm from "./UploadForm";
import Login from "./Login";
import ImageGrid from "./ImageGrid";
import Header from "./Header";
//& firebase
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

const App = () => {
	const [user] = useAuthState(auth);
	const [queryValue, setQueryValue] = useState("");
	return (
		<div className="App">
			<Header
				user={user}
				queryValue={queryValue}
				setQueryValue={setQueryValue}
			/>
			{user ? <UploadForm user={user} /> : <Login />}
			<ImageGrid queryValue={queryValue} />
		</div>
	);
};

export default App;
