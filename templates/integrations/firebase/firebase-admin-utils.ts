/**
 * DO NOT USE ADMIN FROM CLIENT
 **/

import * as admin from "firebase-admin";
import firebaseAdminCert from "./_firebase-admin-cert.json";

export function getAdmin() {
  return (
    admin.apps[0] ??
    admin.initializeApp({
      credential: admin.credential.cert(firebaseAdminCert as any),
      databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    })
  );
}

export async function verifyIdToken(idToken: string) {
  const admin = getAdmin();
  return await admin.auth().verifyIdToken(idToken);
}
