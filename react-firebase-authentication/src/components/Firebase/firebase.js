import app from 'firebase/app'

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
        app.initializeApp(config)
    }
}

export default Firebase;