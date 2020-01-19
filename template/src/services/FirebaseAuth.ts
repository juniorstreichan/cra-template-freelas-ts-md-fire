import firebase from "./firebase";

const FirebaseAuth = firebase.auth();

FirebaseAuth.useDeviceLanguage();
FirebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)


export default FirebaseAuth;
