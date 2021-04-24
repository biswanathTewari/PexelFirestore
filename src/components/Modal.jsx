import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
	const [copySuccess, setCopySuccess] = useState("");
	const txtRef = useRef();
	const onClickHandler = (e) => {
		//* closing the modal , if clicked anywhere except the image
		if (e.target.classList.contains("modals")) setSelectedImage(null);
	};

	const copyToClipBoard = (e) => {
		txtRef.current.select();
		document.execCommand("copy");
		e.target.focus();
		setCopySuccess("Copied!");
	};

	return (
		<motion.div
			className="modals"
			onClick={onClickHandler}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<motion.img
				src={selectedImage.url}
				alt="larger image"
				initial={{ y: "-100%" }}
				animate={{ y: 0 }}
			/>

			<div className="display-section">
				<h3>
					Uploaded by : <span>{selectedImage.userName}</span>
				</h3>
				<h3>
					Category : <span>{selectedImage.category}</span>
				</h3>
				<textarea ref={txtRef} value={selectedImage.url}></textarea>
				<div className="copier">
					<h5 onClick={copyToClipBoard} className="copy">
						Copy url to clipboard
					</h5>
					<motion.div initial={{ x: "-100%" }} animate={{ x: 0 }}>
						{copySuccess}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default Modal;
