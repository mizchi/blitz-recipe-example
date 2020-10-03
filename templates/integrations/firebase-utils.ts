import firebase from "firebase/app"
import firebaseConfig from "../config/firebaseConfig"

export function getApp() {
  if (firebase.apps.length > 0) {
    return firebase.apps[0]
  } else {
    return firebase.initializeApp(firebaseConfig)
  }
}
