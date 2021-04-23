import firebase from 'firebase';

//init firebase
  var firebaseConfig = {
    apiKey: "AIzaSyD4TRl1MlFJyUJ6wKxE8Df5hPCeYHkqnOE",
    authDomain: "project-c7b8d.firebaseapp.com",
    projectId: "project-c7b8d",
    storageBucket: "project-c7b8d.appspot.com",
    messagingSenderId: "216122827044",
    appId: "1:216122827044:web:81338424746d105426d3b1",
    measurementId: "G-64T6F6GKS7"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;