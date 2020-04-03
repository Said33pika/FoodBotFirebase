    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyDvyLSv5_OdCLgZt0AYU5pzwx05_lK88cQ",
    authDomain: "food-86057.firebaseapp.com",
    databaseURL: "https://food-86057.firebaseio.com",
    projectId: "food-86057",
    storageBucket: "food-86057.appspot.com",
    messagingSenderId: "623064763203",
    appId: "1:623064763203:web:bd6135e23077d350c47df6",
    measurementId: "G-QNTLTXCTDS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    // Get a reference to the database service  
    const database = firebase.database();

    function signUp()
    {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e=>alert(e.message))
    alert("Signed Up");
    }

    function signIn()
    {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e=>alert(e.message))
    var userId = auth.currentUser.uid
    alert("Signed In as "+email.value);
    window.open("opt.html", "_self"); //homepage
    }

    function Remove(x)
    {
    var IdButton = x; //make ids of all buttons same
    var opt1 = document.getElementById(IdButton);
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/Choice of user '+userId).set({
    Option_chosen: opt1.value});
    document.getElementById(IdButton).style.visibility = "hidden";
    alert("Sorry for the inconvenience, we will cater to your needs");
    }
  
    function signOut()
    {
    auth.signOut();
    window.open("home.html", "_self");
    alert("Succesfully Signed Out");
    }

    /*
    auth.onAuthStateChanged(function(user)
    {
    if(user)
    {
        var email=user.email;
        alert("User active as "+email);
        //is signed in
    }
    else
    {
        alert("No active user");
        //no user is signed in
    }
    });*/