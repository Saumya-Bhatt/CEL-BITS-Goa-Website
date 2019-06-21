 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBMgKoISM8MJdr88ARHq_KQj9w5lXwoaWk",
    authDomain: "cel-bits-goa-contact-us-form.firebaseapp.com",
    databaseURL: "https://cel-bits-goa-contact-us-form.firebaseio.com",
    projectId: "cel-bits-goa-contact-us-form",
    storageBucket: "cel-bits-goa-contact-us-form.appspot.com",
    messagingSenderId: "550138663766",
    appId: "1:550138663766:web:04d08e8356bc0ad4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    var messageRef = firebase.database().ref('message');
    
    document.getElementById('contact_form').addEventListener('submit',submitform);
    
    function getIdValue(id)
    {
        return document.getElementById(id).value;
    }
    
    function submitform(e)
    {
        e.preventDefault();
        console.log(123);
    
        var name = getIdValue('name');
        var email = getIdValue('email');
        var message = getIdValue('message');
    
        console.log(name);
        
        saveMessage(name,email,message);
    
        name = "";
        email = "";
        message = "";
    
        document.querySelector('.alert').style.display = 'block';
    
        setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';
        },3000)
    
    }
    
    function saveMessage(name,email,message)
    {
        var newMessageRef = messageRef.push();
        newMessageRef.set({
            name: name,
            email: email,
            message: message
        })
    }