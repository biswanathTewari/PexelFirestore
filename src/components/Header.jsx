import React from "react";
import Picon from "../icons/P.png";
import google from "../icons/google.png";
//& firebase
import firebase from "firebase";
import { auth } from "../firebase/config";

const Header = ({ user, queryValue, setQueryValue }) => {
	const onClickHandler = () => {
		auth.signOut();
	};
	return (
		<div className="Header">
			<div className="brand">
				<img src={Picon} alt="icon" />
			</div>
			<h1>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
			</h1>
			<div className="select-category">
				<select
					className="form-select"
					aria-label="Default select example"
					value={queryValue}
					onChange={(e) => setQueryValue(e.target.value)}
				>
					<option defaultValue="">Choose a category</option>
					<option value="aesthetic">Aesthetic</option>
					<option value="food">Food</option>
					<option value="cars">Cars</option>
					<option value="others">Others</option>
					<option value="All">All</option>
				</select>
			</div>
			{user && (
				<button onClick={onClickHandler} className="signout">
					Sign out from <img src={google} alt="Google" />
				</button>
			)}
		</div>
	);
};

export default Header;
