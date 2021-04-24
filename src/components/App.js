import React, { useState } from "react";
//& components
import "../styles/app.scss";
import UploadForm from "./UploadForm";
import Login from "./Login";
import ImageGrid from "./ImageGrid";
import Header from "./Header";
import Modal from "./Modal";
//& firebase
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

const App = () => {
	const [user] = useAuthState(auth);
	const [queryValue, setQueryValue] = useState("");
	const [selectedImage, setSelectedImage] = useState(null);
	return (
		<div className="App">
			<Header
				user={user}
				queryValue={queryValue}
				setQueryValue={setQueryValue}
			/>
			{user ? <UploadForm user={user} /> : <Login />}
			<ImageGrid
				queryValue={queryValue}
				selectedImage={selectedImage}
				setSelectedImage={setSelectedImage}
			/>
			{selectedImage && (
				<Modal
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
				/>
			)}
		</div>
	);
};

export default App;
