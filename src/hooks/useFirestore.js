import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFirestore = (collection, queryValue) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		//* unsub() is a function returned by RHS for stoping the live fetch
		if (queryValue === "All" || queryValue === "")
			db.collection(collection).onSnapshot((snap) => {
				const documents = snap.docs.map((doc) => {
					return {
						url: doc.data().url,
						createdAt: doc.data().createdAt,
						id: doc.id,
						userName: doc.data().userName,
						category: doc.data().category,
					};
				});
				setDocs(documents);
			});
		else
			db.collection(collection)
				.where("category", "==", queryValue)
				.get()
				.then((snap) => {
					const documents = snap.docs.map((doc) => {
						return {
							url: doc.data().url,
							createdAt: doc.data().createdAt,
							id: doc.id,
							userName: doc.data().userName,
							category: doc.data().category,
						};
					});
					setDocs(documents);
				});

		//* clean-up code
		return () => {
			//unsub();
		};
	}, [collection, queryValue]);

	return { docs };
};

export default useFirestore;
