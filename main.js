// Initialize Firebase
var config = {
  apiKey: "AIzaSyBotX9DPaOfZQM8Y5xIibfy0o8OABjiGtg",
  authDomain: "contact-c2fba.firebaseapp.com",
  databaseURL: "https://contact-c2fba.firebaseio.com",
  projectId: "contact-c2fba",
  storageBucket: "contact-c2fba.appspot.com",
  messagingSenderId: "256307590673"
};
firebase.initializeApp(config);

//reference message colllecton
var messageref=firebase.database().ref('messages');


// listen form submit 
document.getElementById('contactform').addEventListener('submit',submitform);

function submitform(e){
    e.preventDefault();
    
    //Get values 

    var name =getinputval('name')
    var email=getinputval('email')
    var phone=getinputval('phone')
    var message= getinputval('message')
    console.log(name)

    //save message
    savemessage(name,phone,email,message)

    //show alert
    document.querySelector('.alert').style.display='block';

    //Hide alert after3seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display='block';
    },3000);
     
    document.getElementById("contactform").reset();
}


//function to get form values 
function getinputval(id){
    return document.getElementById(id).value;

}

//save the message to firebase
function savemessage(name,phone,email,message){
    var newMessageref=messageref.push();
    newMessageref.set({
       name: name,
       phone:phone,
       email,email,
w       message:message


    });
}

///read data from database

messageref.on("child_added",snap=>{
      var name= snap.child("name").val();
      var phone= snap.child("phone").val();
      var email= snap.child("email").val();
      var message= snap.child("message").val();


$('#table_bones').append("<tr><td>"+name+"</td><td>"+email+"</td><td>"+phone+"</td><td>"+message+"</td></tr>");

});

