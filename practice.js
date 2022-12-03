
//ADD YOUR FIREBASE LINKSconst firebaseConfig = {
    var firebaseConfig = {
        apiKey: "AIzaSyAj5KRv18lrM8ubYwndcc9-x2vspu2H8hY",
        authDomain: "practive-8b34f.firebaseapp.com",
        databaseURL: "https://practive-8b34f-default-rtdb.firebaseio.com",
        projectId: "practive-8b34f",
        storageBucket: "practive-8b34f.appspot.com",
        messagingSenderId: "612935244062",
        appId: "1:612935244062:web:a552f8d6ac08664311110f"
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      function addUser(){
        user_name=document.getElementById("user_name").value;      
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    }
      