function check() {
  var student_id = document.getElementById("student_id");
  var error_student_id = document.getElementById("student_id-error");
  if (student_id.value == "") {
    student_id.className = "error_alert";
    error_student_id.innerHTML = "Please enter your student ID";
    error_student_id.style.color = "red";
    return false;
  } else if (student_id.value.length != 7) {
    student_id.className = "error_alert";
    error_student_id.innerHTML =
      "Please enter the student ID consisting of 7 characters";
    error_student_id.style.color = "red";
    return false;
  } else {
    student_id.className = "success_alert";
    error_student_id.innerHTML = "Success";
    error_student_id.style.color = "green";
  }

  var fullname = document.getElementById("fullname");
  var error_fullname = document.getElementById("fullname-error");
  if (fullname.value == "") {
    fullname.className = "error_alert";
    error_fullname.innerHTML = "Please enter your full name";
    error_fullname.style.color = "red";
    return false;
  } else if (fullname.value.length > 50) {
    fullname.className = "error_alert";
    error_fullname.innerHTML =
      "Please enter your name with no more than 50 characters";
    error_fullname.style.color = "red";
    return false;
  } else {
    fullname.className = "success_alert";
    error_fullname.innerHTML = "Success";
    error_fullname.style.color = "green";
  }

  var email = document.getElementById("email");
  var error_email = document.getElementById("email-error");
  var email_format = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value == "") {
    email.className = "error_alert";
    error_email.innerHTML = "Please fill in your email";
    error_email.style.color = "red";
    return false;
  } else if (!email_format.test(email.value)) {
    email.className = "error_alert";
    error_email.innerHTML = "Please fill in the correct format of the email";
    error_email.style.color = "red";
    return false;
  } else {
    email.className = "success_alert";
    error_email.innerHTML = "Success";
    error_email.style.color = "green";
  }

  var arrGender = document.getElementsByName("gender");
  var count_gender = 0;
  var error_gender = document.getElementById("gender-error");
  for (var i = 0; i < arrGender.length; i++) {
    if (arrGender[i].checked) {
      count_gender++;
    }
  }
  if (count_gender == 0) {
    document.getElementById("genders").className = "error_alert";
    error_gender.innerHTML = "Please select your gender";
    error_gender.style.color = "red";
    return false;
  } else {
    document.getElementById("genders").className = "success_alert";
    error_gender.innerHTML = "Success";
    error_gender.style.color = "green";
  }

  var arrHobbies = document.getElementsByName("hobbies");
  var count_hobbies = 0;
  var error_hobbies = document.getElementById("hobbies-error");
  for (var i = 0; i < arrHobbies.length; i++) {
    if (arrHobbies[i].checked) {
      count_hobbies++;
    }
  }
  if (count_hobbies == 0) {
    document.getElementById("hobby").className = "error_alert";
    error_hobbies.innerHTML = "Please choose your preferences";
    error_hobbies.style.color = "red";
    return false;
  } else {
    document.getElementById("hobby").className = "success_alert";
    error_hobbies.innerHTML = "Success";
    error_hobbies.style.color = "green";
  }

  var nationality = document.getElementById("nationality");
  var error_nationality = document.getElementById("nationality-error");
  if (nationality.value == 0) {
    nationality.className = "error_alert";
    error_nationality.innerHTML = "Please choose your nationality";
    error_nationality.style.color = "red";
    return false;
  } else {
    nationality.className = "success_alert";
    error_nationality.innerHTML = "Success";
    error_nationality.style.color = "green";
  }
  return true;
}
