import React, { useState } from "react";
import uploadIcon from "../icons/upload.png";
import ProgressBar from "./ProgressBar";

const UploadForm = ({ user }) => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const [category, setCategory] = useState("");

	const types = ["image/jpeg", "image/png"];

	const onChangeHandler = (e) => {
		const temp = e.target.files[0];

		if (temp && types.includes(temp.type)) {
			setFile(temp);
			setError(null);
		} else {
			setFile(null);
			setError("Please add an image file(jpeg/png)");
		}
	};

	return (
		<div className="UploadForm">
			<form>
				<h4>Upload an image</h4>
				{!category && (
					<select
						className="form-select"
						aria-label="select a category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option defaultValue="">Select a category</option>
						<option value="aesthetic">Aesthetic</option>
						<option value="food">Food</option>
						<option value="cars">Cars</option>
						<option value="others">Others</option>
					</select>
				)}

				{category && (
					<label>
						<input onChange={onChangeHandler} type="file" />
						<span>upload a file</span>
					</label>
				)}

				<div className="output-display">
					{file && <div>{file.name}</div>}
					{error && <div className="errorMsg">{error}</div>}
					{file && (
						<ProgressBar
							file={file}
							setFile={setFile}
							category={category}
							setCategory={setCategory}
							user={user}
						/>
					)}
				</div>
			</form>
		</div>
	);
};

export default UploadForm;
