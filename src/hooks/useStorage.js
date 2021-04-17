import { useEffect, useState } from "react";
import firebase from "../firebase/config";
import { projStorage, db } from "../firebase/config";

const useStorage = ({ file }) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		const storageRef = projStorage.ref(file.name);

		//* uploading the img to cloud
		storageRef.put(file).on(
			"state_changed",
			(snap) => {
				let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			(err) => {
				setError(err);
			},
			async () => {
				const urlTemp = await storageRef.getDownloadURL();
				setUrl(urlTemp);
			}
		);
	}, [file]);

	return { progress, error, url };
};
