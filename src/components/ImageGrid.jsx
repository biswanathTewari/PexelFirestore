import React, { useEffect } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";

const ImageGrid = ({ setSelectedImage, queryValue }) => {
	const { docs } = useFirestore("images", queryValue);

	useEffect(() => {}, [queryValue]);

	return (
		<div className="img-grid">
			{docs && docs.map((doc) => <ImageCard urlSrc={doc.url} />)}
		</div>
	);
};

export default ImageGrid;
