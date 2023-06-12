function validateForum(event) {
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var email = document.getElementById("email");
    var gender = document.getElementById("gender");
    var occupation = document.getElementById("occupation");
    var pref1 = document.getElementsByName('pref1');
    var pref2 = document.getElementsByName('pref2');
    var pref3 = document.getElementsByName('pref3');
    //Error messages
    var nameError = document.getElementById("name-error");
    var ageError = document.getElementById("age-error");
    var genderError = document.getElementById("gender-error");
    var occupationError = document.getElementById("occupation-error");
    var emailError = document.getElementById("email-error");
    var pref1Error = document.getElementById("pref1-error");
    var pref2Error = document.getElementById("pref2-error");
    var pref3Error = document.getElementById("pref3-error");
    var mainError1 = document.getElementById("main-error1");
    var mainError2 = document.getElementById("main-error2");

    //Boolean
    var allCorrect = true;

    if (!emailvalidate() || !agevalidate()){
      allCorrect = false;
    }

    if (name.value == "" || name.value == null) {
      nameError.innerHTML = "*please enter your name";
      allCorrect = false;
      }

    if (age.value == "" || age.value == null) {
      ageError.innerHTML = "*please enter your age";
      allCorrect = false;
      }
  
    if (email.value == "" || email.value == null) {
      emailError.innerHTML = "*please enter your email";
      allCorrect = false;
    }
  
    if (gender.value == "" || gender.value == null) {
      genderError.innerHTML = "*please enter your gender";
      allCorrect = false;
    }

    if (occupation.value == "" || occupation.value == null) {
      occupationError.innerHTML = "*please enter your occupation";
      allCorrect = false;
    }

    if (!pref1validate()) {
      pref1Error.innerHTML = "*compulsory";
      allCorrect = false;      
    }

    if (!pref2validate()) {
      pref2Error.innerHTML = "*compulsory";
      allCorrect = false;      
    }

    if (!pref3validate()) {
      pref3Error.innerHTML = "*compulsory";
      allCorrect = false;      
    }

    if(allCorrect){
      event.preventDefault();
      mainError1.innerHTML = "";
      mainError2.innerHTML = "";
      confirm("Dear "+name.value+", Thank you for using FIT GENIE, The results will be shown in a while.");
      window.location.href = "Main Page.html";
    }
    else{
      mainError1.innerHTML = "Please fillout the marked compulsory fields properly to proceed";
      mainError2.innerHTML = "Please fillout the marked compulsory fields properly to proceed";
    }

    return allCorrect;
  }

  function namevalidate(){
    var name = document.getElementById("name");
    var nameError = document.getElementById("name-error");
    if (!(name.value == "" || name.value == null)){
        nameError.innerHTML = "";
    }
  }

  function agevalidate(){
    var age = document.getElementById("age");
    var ageError = document.getElementById("age-error");
    if (!(age.value == "" || age.value == null)){
        ageError.innerHTML = "";
    }
  }

  function gendervalidate(){
    var gender = document.getElementById("gender");
    var genderError = document.getElementById("gender-error");
    if (!(gender.value == "" || gender.value == null)){
        genderError.innerHTML = "";
    }
  }

  function occupationvalidate(){
    var occupation = document.getElementById("occupation");
    var occupationError = document.getElementById("occupation-error");
    if (!(occupation.value == "" || occupation.value == null)){
        occupationError.innerHTML = "";
    }
  }

  function emailvalidate(){
    var email = document.getElementById("email");
    var emailError = document.getElementById("email-error");

    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z\.]{2,6}$/)){
      emailError.innerHTML = "*please enter a valid email";
      return false;
    }
      
    emailError.innerHTML = "";
    return true;

  }

  function agevalidate(){
    var age = document.getElementById("age");
    var ageError = document.getElementById("age-error");

    if(!(age.value >= 1 && age.value < 100)){
      ageError.innerHTML = "*please enter a proper age";
      return false;
    }
      
    ageError.innerHTML = "";
    return true;

  }

  function pref1validate(){
    var pref1 = document.getElementsByName('pref1');
    var pref1Error = document.getElementById("pref1-error");
    var pref1hasSelected = false;
    for (var i = 0; i < pref1.length; i++) {
      if (pref1[i].checked) {
        pref1hasSelected = true;
        break;
      }
    }
    if (pref1hasSelected){
      pref1Error.innerHTML = "";
    }
    return pref1hasSelected;
  }

  function pref2validate(){
    var pref2 = document.getElementsByName('pref2');
    var pref2Error = document.getElementById("pref2-error");
    var pref2hasSelected = false;
    for (var i = 0; i < pref2.length; i++) {
      if (pref2[i].checked) {
        pref2hasSelected = true;
        break;
      }
    }
    if (pref2hasSelected){
      pref2Error.innerHTML = "";
    }
    return pref2hasSelected;
  }

  function pref3validate(){
    var pref3 = document.getElementsByName('pref3');
    var pref3Error = document.getElementById("pref3-error");
    var pref3hasSelected = false;
    for (var i = 0; i < pref3.length; i++) {
      if (pref3[i].checked) {
        pref3hasSelected = true;
        break;
      }
    }
    if (pref3hasSelected){
      pref3Error.innerHTML = "";
    }
    return pref3hasSelected;
  }

  function resetForum(){
    var nameError = document.getElementById("name-error");
    var ageError = document.getElementById("age-error");
    var genderError = document.getElementById("gender-error");
    var occupationError = document.getElementById("occupation-error");
    var emailError = document.getElementById("email-error");
    var pref1Error = document.getElementById("pref1-error");
    var pref2Error = document.getElementById("pref2-error");
    var pref3Error = document.getElementById("pref3-error");
    var mainError1 = document.getElementById("main-error1");
    var mainError2 = document.getElementById("main-error2");
    emailError.innerHTML = "";
    ageError.innerHTML = "";
    nameError.innerHTML = "";
    genderError.innerHTML = "";
    occupationError.innerHTML = "";
    pref1Error.innerHTML = "";
    pref2Error.innerHTML = "";
    pref3Error.innerHTML = "";
    mainError1.innerHTML = "";
    mainError2.innerHTML = "";
  }

// Get form elements
const form1 = document.getElementById("wrapper1");
const form2 = document.getElementById("wrapper2");

// Get buttons
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
function nextform(){
const form1 = document.getElementById("wrapper1");
const form2 = document.getElementById("wrapper2");
form1.style.display = "none";
form2.style.display = "block";
};

function prevform(){
const form1 = document.getElementById("wrapper1");
const form2 = document.getElementById("wrapper2");
form2.style.display = "none";
form1.style.display = "block";
};