function validateForm() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var rating = document.getElementById("rating");
  var comments = document.getElementById("comments")
  var emailError = document.getElementById("email-error")

  let rate = "";

  if(rating.value == "1"){
    rate = "Poor";
  }else if(rating.value == "2"){
    rate = "Fair";
  }else if(rating.value == "3"){
    rate = "Good";
  }else if(rating.value == "4"){
    rate = "Very Good";
  }else if(rating.value == "5"){
    rate = "Excellent";
  }else{
    rate = null;
  }

  if (name.value == "" || name.value == null) {
    alert("Please enter your name");
    return false;
  }

  if (email.value == "" || email.value == null) {
    alert("Please enter your email");
    emailError.innerHTML = "Please enter your email";
    return false;
  }

  if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z\.]{2,6}$/)){
    alert("Please enter a valid email");
    return false;
  }

  if (rating.value == "" || rating.value == null) {
    alert("Please select a rating");
    return false;
  }

  else{
    alert("Dear " + name.value + ", Thank you very much for your feedback. You have rated our site as "+ rate + ", and your comment was " + comments.value + " .")
    return true;
  }
}

function emailvalidate(){
  var email = document.getElementById("email");
  var emailError = document.getElementById("email-error");

  if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z\.]{2,6}$/)){
    emailError.innerHTML = "Please enter a valid email";
    return false;
  }
    
  emailError.innerHTML = "";
  return true;

}

function resetForm(){
  var emailError = document.getElementById("email-error");
  emailError.innerHTML = "";
}

