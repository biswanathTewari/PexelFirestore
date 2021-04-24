import React, { useEffect, useRef, useState } from "react";

const ImageCard = ({ urlSrc }) => {
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
			<img ref={imageRef} src={urlSrc} alt="images" />
		</div>
	);
};

export default ImageCard;
