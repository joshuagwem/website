//menu button
const menuHeader = document.getElementById("menu");

menuHeader.addEventListener("click", () => {
  if (headerMenuList.style.display !== "block") {
    headerMenuList.style.display = "block";
  } else {
    headerMenuList.style.display = "none";
  }
});

//register button
const registerButton = document.getElementById("registerBtn");

registerButton.addEventListener("click", () => {
  if (registerScreen.style.display !== "block") {
    registerScreen.style.display = "block";
  } else {
    registerScreen.style.display = "none";
  }
});

//register screen validation
const registerForm = document.getElementById("register");
const submitButton = document.getElementById("formbutton");
const formConfirmMessage = document.getElementById("formConfirmMessage");

const registerFormElements = [...registerForm.elements];

const registerInputValid = () => {
  const valid = registerFormElements.every((element) => {
    return element.checkValidity();
  });
  return valid;
};

const handleChange = () => {
  registerFormElements.forEach((element) => {
    if (
      !element.checkValidity() &&
      element.nodeName !== "BUTTON" &&
      element.type !== "checkbox"
    ) {
      element.style.borderColor = "red";
      element.previousElementSibling.previousElementSibling.style.display =
        "inline";
    }
    if (
      element.checkValidity() &&
      element.nodeName !== "BUTTON" &&
      element.type !== "checkbox"
    ) {
      element.style.borderColor = "blue";
      element.previousElementSibling.previousElementSibling.style.display =
        "none";
    }
    if (!element.checkValidity() && element.type === "checkbox") {
      element.style.borderColor = "red";
      element.nextElementSibling.nextElementSibling.style.display = "block";
      element.nextElementSibling.style.color = "red";
    }
    if (element.checkValidity() && element.type === "checkbox") {
      element.style.borderColor = "blue";
      element.nextElementSibling.nextElementSibling.style.display = "none";
      element.nextElementSibling.style.color = "black";
    }
  });
  if (registerInputValid()) {
    submitButton.removeAttribute("disabled", "");
  } else {
    submitButton.setAttribute("disabled", "");
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (registerInputValid()) {
    formConfirmMessage.style.display = "block";
    registerForm.reset();
    submitButton.setAttribute("disabled", "");
    setTimeout(() => {
      formConfirmMessage.style.display = "none";
    }, 3000);
  }
};

registerFormElements.forEach((element) => {
  element.addEventListener("change", handleChange);
});

registerForm.addEventListener("submit", (e) => handleSubmit(e));

//closing the register screen
const registerScreen = document.getElementById("registerScreen");

window.onclick = function (event) {
  if (event.target == registerScreen) {
    registerScreen.style.display = "none";
  }
};
