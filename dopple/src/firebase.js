import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyD_WNvCRIuvkG6UPAI5CEpboVpVZVIdGgw",
    authDomain: "testing-project-e26e0.firebaseapp.com",
    databaseURL: "https://testing-project-e26e0.firebaseio.com",
    projectId: "testing-project-e26e0",
    storageBucket: "testing-project-e26e0.appspot.com",
    messagingSenderId: "1005676549958"
  };

  firebase.initializeApp(config);


  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;
