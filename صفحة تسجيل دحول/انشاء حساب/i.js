const email = document.getElementById(`emailValue`);
const pw = document.getElementById(`pwValue`);
const button = document.getElementById(`button`);

let usersArray = JSON.parse(localStorage.getItem("usersData")) || [];

button.addEventListener(`click`, (event) => {
  event.preventDefault();

  if (pw.value === `` || email.value === ``) {
    return;
  }
  if (!email.value.endsWith(`@gmail.com`)) {
    return;
  }

  if (pw.value.length < 8) {
    return;
  }

  const isExisting = usersArray.find(function (user) {
    return user.email === email.value;
  });

  if (isExisting) {
    window.alert(`this user exit wanna log in?`);
    return;
  }
  addNewUser();
});

function addNewUser() {
  class users {
    constructor(email, pw) {
      this.email = email;
      this.pw = pw;
    }
  }

  let newUser = new users(email.value, pw.value);
  usersArray.push(newUser);

  localStorage.setItem(`usersData`, JSON.stringify(usersArray));

  window.alert(localStorage.getItem("usersData"));
}
