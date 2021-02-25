import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
        apiKey: "AIzaSyBk3XDKZdHCHO0LJWdRN-d6Ul--juPFMd4",
        authDomain: "studentportaldevelopment.firebaseapp.com",
        projectId: "studentportaldevelopment",
        storageBucket: "studentportaldevelopment.appspot.com",
        messagingSenderId: "43794302300",
        appId: "1:43794302300:web:648d89631e86b3c47aed99"
})

export const auth = app.auth()
export default app
