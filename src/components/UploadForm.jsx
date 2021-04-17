import React, { useState } from "react";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const [category, setCategory] = useState("aesthetic");
	const [upload, setUpload] = useState(false);

	const types = ["image/jpeg", "image/png"];

	const onChangeHandler = (e) => {
		const temp = e.target.files[0];

		if (temp && types.includes(temp.type)) {
			setFile(temp);
			setError(null);
		} else {
			setFile(null);
			setError("Please add an image file(jpeg/png)");
			setUpload(false);
		}
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		if (file) setUpload(true);

		console.log(file, category);
	};

	return (
		<div className="UploadForm">
			<form onSubmit={onSubmitHandler}>
				<label>
					<input onChange={onChangeHandler} type="file" />
					<span>upload file</span>
				</label>
				<select
					className="form-select"
					aria-label="select a category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					<option defaultValue="aesthetic">Aesthetic</option>
					<option value="food">Food</option>
					<option value="cars">Cars</option>
					<option value="others">Others</option>
				</select>
				<button>➕</button>
				<div className="output-display">
					{file && <div>{file.name}</div>}
					{error && <div className="errorMsg">{error}</div>}
					{upload && <div className="">progressing</div>}
				</div>
			</form>
		</div>
	);
};

export default UploadForm;
