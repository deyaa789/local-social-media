const email = document.getElementById(`emailValue`);
const pw = document.getElementById(`pwValue`);
const button = document.getElementById(`button`);

let usersData=[]
button.addEventListener(`click`, (event) => {
  event.preventDefault();
  if (pw.value === `` || email.value === ``) {
    return;
  }
  if (!email.value.includes(`@gmail`)) {
    return;
  }

  if (pw.value.length < 8) {
    return;
  }
  addNewUser();
});

function addNewUser() {
  class users {
    constructor(email, pw) {

      this.email= email;
      this.pw = pw;
    }
  }
  let newUser = new users(email.value,pw.value)
  usersData.push(newUser);

  console.log(usersData)
}
