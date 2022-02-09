const firebaseConfig = {
    apiKey: "AIzaSyDlxxdVEt9JEjRSkUWYx8xqbv-tRARTtFc",
    authDomain: "kwitterproject-67e73.firebaseapp.com",
    databaseURL: "https://kwitterproject-67e73-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-67e73",
    storageBucket: "kwitterproject-67e73.appspot.com",
    messagingSenderId: "360834738892",
    appId: "1:360834738892:web:eccc17d39a39ae0761f069"
  };

firebase.initializeApp(firebaseConfig)
    console.log(firebase.database())
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

function send(){
      message=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message,
            like: 0
      })
}

      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location= "index.html"
}

