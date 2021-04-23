import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const Progress = ({ file, user, setFile, setUpload }) => {
	const { progress, url } = useStorage(file);

	//& setting the selected file as null , as soon as the upload is complete
	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);
	return <div className="progress">progressing</div>;
};

export default Progress;
