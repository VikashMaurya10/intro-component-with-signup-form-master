let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

const form = id("form"),
  firstName = id("fname"),
  vikash = id("fname-container"),
  lastName = id("lname"),
  Email = id("email"),
  password = id("password"),
  errorIcon = classes("error-icon"),
  errorMsg = classes("error"),
  innerInputContainer = classes("inner-input-container");

const engine = (Id, serial, message) => {
  if (Id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    errorIcon[serial].style.opacity = "1";
    innerInputContainer[serial].style.border = "2px solid  hsl(0, 100%, 74%)";
    Id.placeholder = " ";
    Email.placeholder = "email@example/com";
    Email.classList.add("placeholder");
  } else {
    errorMsg[serial].innerHTML = "";
    errorIcon[serial].style.opacity = "0";
    innerInputContainer[serial].style.border = "2px solid  hsl(246, 25%, 77%)";
    Email.classList.remove("placeholder");
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(firstName, 0, "First Name cannot be empty");
  engine(lastName, 1, "Last Name cannot be empty");
  engine(Email, 2, "Look like this is not an email");
  engine(password, 3, "Password can not be empty");
});

const Blur = (id, serial) => {
  id.onblur = () => {
    innerInputContainer[serial].style.border = "2px solid hsl(246, 25%, 77%)";
  };
};
const Focus = (id, serial, placeHolder) => {
  id.onfocus = () => {
    innerInputContainer[serial].style.border = "2px solid   hsl(249, 10%, 26%)";
    errorMsg[serial].innerHTML = "";
    errorIcon[serial].style.opacity = "0";
    id.placeholder = placeHolder;
    id.classList.remove("placeholder");
  };
};
window.addEventListener("load", () => {
  Blur(firstName, 0);
  Focus(firstName, 0, "First Name");
  Blur(lastName, 1);
  Focus(lastName, 1, "Last Name");
  Blur(Email, 2);
  Focus(Email, 2, "Email Address");
  Blur(password, 3);
  Focus(password, 3, "Password");
});
