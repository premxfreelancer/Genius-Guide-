var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var inp3 = document.getElementById("inp3");

window.onload = function() {
  cheaker();
};



function cheaker() {
  var videocon = document.getElementById("videocon");
  var login = document.getElementById("login");



  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (storedUsername && storedPassword) {
var body = document.body;
body.style.background = "black";
    videocon.style.display = "block";
    login.style.display = "none";


  } else {

    videocon.style.display = "none";
    login.style.display = "block";


  };

  var nameofuser = document.getElementById("nameofuser");


  nameofuser.innerHTML = "hello, " + storedUsername;




};




function login1() {
  inp1val = inp1.value;
  inp2val = inp2.value;
  inp3val = inp3.value;

  /*
  
  if (inp1val === "") { 
    warning.style.display = "block";
    warning.innerHTML = "please write name";
    
   } else if (inp3val === "prem") {

         localStorage.setItem("username", inp1val);
localStorage.setItem("password", inp2val);
  } else if (inp1val.indexOf(' ') !== -1) { 
    warning.style.display = "block";
    warning.innerHTML = "space not allowed";
    
  } else if (inp2val === "") { 
    warning.style.display = "block";
    warning.innerHTML = "please write password";
    
  } else if (inp3val === "") { 
    warning.style.display = "block";
    warning.innerHTML = "please enter key";
  } else {
    warning.style.display = "block";
    warning.innerHTML = "worng key entered";
    
  }
  */
  if (inp1val === "") {
    warning.style.display = "block";
    warning.innerHTML = "please write name";

  } else if (inp2val === "") {
    warning.style.display = "block";
    warning.innerHTML = "please write password";
  } else if (inp3val === "") {
    warning.style.display = "block";
    warning.innerHTML = "please enter key";
  } else if (inp3val === "prem") {
    localStorage.setItem("username", inp1val);


    localStorage.setItem("password", inp2val);
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername && storedPassword) {


      videocon.style.display = "block";
      login.style.display = "none";


    } else {

      videocon.style.display = "none";
      login.style.display = "block";


    };
    var nameofuser = document.getElementById("nameofuser");


    nameofuser.innerHTML = "hello, " + storedUsername;

var body = document.body;
body.style.background = "black";


  } else {
    warning.style.display = "block";
    warning.innerHTML = "worng key entered";
  }


};







function ff() {
  warning = document.getElementById("warning");


  warning.style.display = "none";
}
setInterval(ff, 3000);


function logout() {

  localStorage.removeItem("username");

  localStorage.removeItem("password");

  videocon.style.display = "none";
  login.style.display = "block";
  var body = document.body;
  body.style.background = "#FFFFFF";

};

function swich1() {

  window.location.href = "blogs/blog1.html";

};


function swich2() {

  window.location.href = "blogs/blog2.html";

};





// Get all elements with class "blog"
var blogElements = document.querySelectorAll(".blog");

// Loop through each blog element
blogElements.forEach(function(blogElement) {
  // Check if the textContent of the blog element is "nothing"
  if (blogElement.textContent.trim() === "nothing") {
    blogElement.style.display = "none"; // Hide the element
  }
});


function create() {
  window.location.href = 'create.html';

  console.log("working ")
}