
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDY1S9gSqeDBd39gl8y6G3btBbbWd6yr6s",
      authDomain: "kwitter-30ed9.firebaseapp.com",
      databaseURL: "https://kwitter-30ed9-default-rtdb.firebaseio.com",
      projectId: "kwitter-30ed9",
      storageBucket: "kwitter-30ed9.appspot.com",
      messagingSenderId: "25606997224",
      appId: "1:25606997224:web:603f50b9a08c285d74755d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose: "adding room name"}); 
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";             
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row="<div class='room_name'id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
        document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}