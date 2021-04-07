import app from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyABQIFWAk2i5i11DS-cPbApFnjt5GF8_Cw",
    authDomain: "fir-5887c.firebaseapp.com",
    projectId: "fir-5887c",
    storageBucket: "fir-5887c.appspot.com",
    messagingSenderId: "533626174694",
    appId: "1:533626174694:web:28edc68f974de465aecf27",
    measurementId: "G-K0HT0MQMHS"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email,password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut()
}

export default Firebase;