import React from "react";
import Picon from "../icons/P.png";

const Header = () => {
	return (
		<div className="Header">
			<div className="brand">
				<img src={Picon} alt="icon" />
			</div>
			<h1>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
			</h1>
			<div className="select-category">
				<select className="form-select" aria-label="Default select example">
					<option defaultValue="hello">Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
				<button>🔍</button>
			</div>
		</div>
	);
};

export default Header;
