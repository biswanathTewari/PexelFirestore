import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
	apiKey: "AIzaSyDpALVglvoT6GmSBMVbMmCU8TgcgAZazBc",
	authDomain: "pexel-firebase.firebaseapp.com",
	projectId: "pexel-firebase",
	storageBucket: "pexel-firebase.appspot.com",
	messagingSenderId: "37092674043",
	appId: "1:37092674043:web:11564eba7176f947c8e35e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const projStorage = firebase.storage();
export const db = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
export default firebase;
