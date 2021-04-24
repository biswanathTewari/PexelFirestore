import React, { useEffect } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage, queryValue }) => {
	const { docs } = useFirestore("images", queryValue);

	useEffect(() => {}, [queryValue]);

	return (
		<div className="img-grid">
			{docs &&
				docs.map((doc) => (
					<motion.div
						className="img-wrap"
						onClick={() => setSelectedImage(doc.url)}
						key={doc.id}
						layout
						whileHover={{ opacity: 1 }}
					>
						<motion.img
							src={doc.url}
							alt="uploaded pic"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
						/>
					</motion.div>
				))}
		</div>
	);
};

export default ImageGrid;
