import React, { useEffect, useState } from "react";
import { projStorage, db } from "../firebase/config";

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	//* useEffect so that the hook re-renders for every change in selected file
	useEffect(() => {
		//& references
		const storageRef = projStorage.ref(file.name);

		//* uploading to firestorage
		//& on() -> event listener since put() is ajax in nature
		storageRef.put(file).on(
			"state_changed",
			(snap) => {
				let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			(err) => setError(err),
			async () => {
				const urlTemp = await storageRef.getDownloadURL();
				setUrl(urlTemp);
			}
		);
	}, [file]);

	return { progress, error, url };
};

export default useStorage;
