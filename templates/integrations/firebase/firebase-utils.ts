import "firebase/auth"
import firebase from "firebase/app"
import firebaseConfig from "config/firebase-config.json"

export function getApp() {
  return firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
}

export async function getIdToken(forceRefresh: boolean = false) {
  const token = await getApp().currentUser.getIdToken(forceRefresh)
  return token
}
