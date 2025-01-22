const dataSection = document.getElementById("dataSection");
const teacherBtn = document.getElementById("teachers");
const teacherLogin = document.getElementById("tLogin");
const userLoginBtn = document.getElementById("userLogin");
const passError = document.getElementById("passError");

function displayTeacher() {
  dataSection.classList.remove("flex");
  dataSection.classList.add("hidden");
  teacherLogin.classList.remove("hidden");
}

teacherBtn.addEventListener("click", displayTeacher);

function teacherForm() {
  const userName = document.getElementById("userName");
  const userNameValue = userName.value.trim();

  const passWord = document.getElementById("pwd");
  const passWordValue = passWord.value.trim();
  const userError = document.getElementById("userError");

  const regexUser = /^[a-zA-Z0-9]+$/;

  const savedData = JSON.parse(localStorage.getItem("teacherRegister")) || [];

  const renderedData = savedData.map(({ newUserValue, newPasswordValue }) => ({
    newUserValue,
    newPasswordValue,
  }));

  // const savedUsername = savedData[].newUserValue;
  // const savedPassword = savedData.newPasswordValue;

  // const dataToValidate = {
  //   username: userNameValue,
  //   password: passWordValue,
  // };

  // if () {
  //   userError.innerHTML = "";
  //   teacherLogin.classList.add("hidden");
  // }

  console.log(renderedData);
}

userLoginBtn.addEventListener("click", (e) => {
  teacherForm();
});

//event to redirect new teachers to registration
const newTeacherReg = document.getElementById("tRegister");
const registerRedirect = document.getElementById("registerRedirect");

registerRedirect.addEventListener("click", () => {
  teacherLogin.classList.add("hidden");
  newTeacherReg.classList.remove("hidden");
});

// //array holding the objects when teachers register for the first time

const form = document.getElementById("form");

//array holding the objects when teachers register for the first time

const teacherRegister =
  JSON.parse(localStorage.getItem("teacherRegister")) || [];

///functionality for registering new teachers

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const newUser = document.getElementById("newUser");
  const email = document.getElementById("email");
  const newPass = document.getElementById("password");
  const confPass = document.getElementById("confirmPass");

  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const newUserValue = newUser.value;
  const emailValue = email.value;
  const newPasswordValue = newPass.value;
  const confirmPassValue = confPass.value;

  const regexFn = /^[a-zA-Z]+$/;
  const regexUser = /^[a-zA-Z0-9]+$/;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let errors = [];

  if (!regexFn.test(firstNameValue)) {
    const firstError = firstName.parentNode.lastElementChild;
    errors.push(firstError);
    firstError.innerHTML = "Invalid Name";

    if (firstNameValue === "") {
      firstError.innerHTML = "Field can't be empty";
    }
  }

  if (!regexFn.test(lastNameValue)) {
    const secondError = lastName.parentNode.lastElementChild;
    errors.push(secondError);
    secondError.innerHTML = "Invalid last Name";
  }

  if (!regexUser.test(newUserValue)) {
    const thirdError = newUser.parentNode.lastElementChild;
    errors.push(thirdError);
    thirdError.innerHTML = "Invalid Username";
  }

  if (!regexEmail.test(emailValue)) {
    const fourthError = email.parentNode.lastElementChild;
    errors.push(fourthError);
    fourthError.innerHTML = "Invalid email";
  }

  if (!regexPass.test(newPasswordValue)) {
    const fifthError = newPass.parentNode.lastElementChild;
    errors.push(fifthError);
    fifthError.innerHTML = "Invalid Password";
  }
  if (confirmPassValue !== newPasswordValue) {
    const sixthError = confPass.parentNode.lastElementChild;
    errors.push(sixthError);
    sixthError.innerHTML = "Password does not match";
  } else {
    const newObject = {
      firstNameValue,
      lastNameValue,
      newUserValue,
      emailValue,
      newPasswordValue,
      confirmPassValue,
    };

    if (errors) {
      return;
    }

    teacherRegister.push(newObject);
    localStorage.setItem("teacherRegister", JSON.stringify(teacherRegister));

    form.reset();
  }
});
