let inputs = document.querySelectorAll('input[type="password"]');
let submit = document.querySelector('button[type="submit"]')

submit.addEventListener("click", (e) => {
  if (!validate_password()) {
    e.preventDefault();
    console.log("invalid password")
  }
})
inputs.forEach(input => {
  input.addEventListener("keyup", () => validate_password())
});

function validate_password() {
  let valid = true
  if (inputs[0].value != "" && inputs[0].value.length >= 8)
    inputs[0].className = "valid";
  else {
    inputs[0].className = "error"
    valid = false
  }

  if (inputs[1].value != "" && inputs[1].value.length >= 8)
    inputs[1].className = "valid";
  else {
    inputs[1].className = "error"
    valid = false
  }
  return valid
}