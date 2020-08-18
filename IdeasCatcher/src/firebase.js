import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAp2ePTaKN7vJ8G1G8aLYRpW0aZM-A7ZLg",
    authDomain: "ideas-crud.firebaseapp.com",
    databaseURL: "https://ideas-crud.firebaseio.com",
    projectId: "ideas-crud",
    storageBucket: "ideas-crud.appspot.com",
    messagingSenderId: "630766284301",
    appId: "1:630766284301:web:cd7aac2db31bd30a8f2f44"
};
// Initialize Firebase
var fireDb=firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();