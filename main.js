
(function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,
0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(b){var a="mixpanel";"mixpanel"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
for(h=0;h<l.length;h++)c(e,l[h]);var f="set set_once union unset remove delete".split(" ");e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push([d,call2])}}for(var b={},d=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.2;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
MIXPANEL_CUSTOM_LIB_URL:"file:"===c.location.protocol&&"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}})(document,window.mixpanel||[]);
mixpanel.init("a29c7a742bb4a5bcfb03356d731f179e");






window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
			  heap.load("3511416828");

			  heap.identify(name);
              heap.identify(email);
			  
			  FB.Event.subscribe('edge.create', page_like_callback);


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



    heap.identify(name);
    heap.identify(email);
    

// identify must be called along with people.set
     mixpanel.identify(email);
     mixpanel.people.set({ name :name });
   
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
       message:message


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

