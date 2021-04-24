import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ImageCard = ({ doc, selectedImage, setSelectedImage }) => {
	const [spans, setSpans] = useState(0);

	const imageRef = useRef();

	//* componentDidMount
	useEffect(() => {
		imageRef.current.addEventListener("load", getSpans);
	}, []);

	const getSpans = () => {
		const height = imageRef.current.clientHeight;

		const spansTemp = Math.ceil(height / 10);

		setSpans(spansTemp);
	};

	return (
		<div style={{ gridRowEnd: `span ${spans}` }}>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				ref={imageRef}
				onClick={() => {
					setSelectedImage(doc);
				}}
				src={doc.url}
				alt="images"
			/>
		</div>
	);
};

export default ImageCard;
