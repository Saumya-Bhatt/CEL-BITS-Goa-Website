
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCFIqUsNkreAM1QPrnuAtAB59HbJADWEjM",
    authDomain: "cel-contact-us-form.firebaseapp.com",
    databaseURL: "https://cel-contact-us-form.firebaseio.com",
    projectId: "cel-contact-us-form",
    storageBucket: "cel-contact-us-form.appspot.com",
    messagingSenderId: "598134554970",
    appId: "1:598134554970:web:8cb4eff25639b8f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messageRef = firebase.database().ref('message');

// Added event listener to Submit
document.getElementById('contact_form').addEventListener('submit',submitform);

//Submit function
function submitform(e)
{
    e.preventDefault();
    console.log(123);

    //Gets elements
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    console.log(name);

    saveMessage(name,email,message);

    //Success message
    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
}

function getInputVal(id)
{
    return document.getElementById(id).value;
}

function saveMessage(name, email, message)
{
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    })
}