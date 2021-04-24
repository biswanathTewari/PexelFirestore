import React, { useEffect } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";

const ImageGrid = ({ selectedImage, setSelectedImage, queryValue }) => {
	const { docs } = useFirestore("images", queryValue);

	return (
		<div className="img-grid">
			{docs &&
				docs.map((doc) => (
					<ImageCard
						doc={doc}
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
						key={doc.id}
					/>
				))}
		</div>
	);
};

export default ImageGrid;
