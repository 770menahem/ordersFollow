import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBIL6nTNG88e5goZ_wtAubomSnBMsD3ljE",
  authDomain: "trackind-orders.firebaseapp.com",
  databaseURL: "https://trackind-orders.firebaseio.com",
  projectId: "trackind-orders",
  storageBucket: "trackind-orders.appspot.com",
  messagingSenderId: "862936983792",
  appId: "1:862936983792:web:8a66a740b3fc9d1ac1fa35",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: true })
  .catch(function (err) {
    if (err.code === "failed-precondition") {
      alert(
        "אנא השאר רק כרטיסיה אחת (של האתר) פתוחה כדי לעדכן פרטים באופן לא מקוון"
      );
      console.log(err);
    } else if (err.code === "unimplemented") {
      alert("הדפדפן לא מאפשר עבודה באופן לא מקוון");
      console.log(err);
    }
  });

export const fireStore = firebase.firestore();
export const log = firebase.auth();
