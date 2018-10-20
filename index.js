
 var config = {
    apiKey: "AIzaSyBA3DgWVLxid0dw9UhoZgOneyjOu4zVsHE",
    authDomain: "dimension-d27f1.firebaseapp.com",
    databaseURL: "https://dimension-d27f1.firebaseio.com",
    projectId: "dimension-d27f1",
    storageBucket: "",
    messagingSenderId: "708529966649"
  };
  firebase.initializeApp(config);





firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
	document.getElementById("selection_panel").style.display = "block";
	document.getElementById("titlebar").style.display = "block";
    document.getElementById("login_div").style.display = "none";
	document.getElementById("logo").style.display = "none"; 
    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
	document.getElementById("selection_panel").style.display = "none";
	document.getElementById("titlebar").style.display = "none";
    document.getElementById("login_div").style.display = "block";
	document.getElementById("logo").style.display = "block";
	  document.getElementById("titlebar_").style.display = "none";
  }
});


function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
