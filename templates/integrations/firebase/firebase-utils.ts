import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from "./_firebase-config.json";

export function getApp() {
  return firebase.apps[0] ?? firebase.initializeApp(firebaseConfig);
}

export async function getIdToken(forceRefresh: boolean = false) {
  const auth = getApp().auth();
  const token = auth.currentUser?.getIdToken(forceRefresh);
  return token;
}
