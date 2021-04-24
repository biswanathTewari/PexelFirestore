import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile, category, setCategory, user }) => {
	const { progress, url } = useStorage(file, category, user);

	//& setting the selected file as null , as soon as the upload is complete
	useEffect(() => {
		if (url) {
			setCategory("");
			setFile(null);
		}
	}, [url, setFile]);
	return (
		<motion.div
			className="progress"
			initial={{ width: 0 }}
			animate={{ width: progress + "%" }}
		></motion.div>
	);
};

export default ProgressBar;
