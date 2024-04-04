const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br>
    Message: ${mess.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "appiahkwadwoemmanuel1994@gmail.com",
        Password: "729DC1B546FF2288DCBCDF638E2DF5B05DD8",
        To: "appiahkwadwoemmanuel1994@gmail.com",
        From: "appiahkwadwoemmanuel1994@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success",
                text: "Message sent successfully",
                icon: "success"
              });
        }
      }
    );
}

function chechInputs() {
    const items = document.querySelectorAll(".input__control");

    for(const input__control of items) {
        if(input__control.value == "") {
            input__control.classList.add("error");
            input__control.parentElement.classList.add("error");
        }

        if(items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        input__control.addEventListener("keyup", () => {
            if(input__control.value != ""){
                input__control.classList.remove("error");
                input__control.parentElement.classList.remove("error");
            }
            else{
                input__control.classList.add("error");
                input__control.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail(){
    const emialRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTextEmail = document.querySelector(".error-text.email");

    if(!email.value.match(emialRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTextEmail.innerText = "Enter A Value E-mail Address";
        }
        else{
            errorTextEmail.innerText = "Email can't be Blank";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    chechInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") 
    && !subject.classList.contains("error") && !mess.classList.contains("error")) {
          sendEmail();

          form.reset();
          return false;
    }
});
