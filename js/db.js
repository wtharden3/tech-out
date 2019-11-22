$(document).ready(function(){
    
        console.log("document is ready");

        // let firstName = document.forms['contact']['firstname'].value;
        // if (firstName == ""){
        //     console.log("please enter your first name");
        // }

        // function validateForm(){
        //     let firstName = document.querySelector("input[name=firstname]").value;
        //     console.log(firstName);
            // if (firstName == ""){
            //     alert("please enter your name, whitney!");
            // }
        // }
    
});

$('.contact-form').on('submit', function(){
    let firstName = document.querySelector("input[name=firstname]");
    let email = document.querySelector("input[name=email]");
    let message = document.querySelector("textarea[name=message]");
    
    if (firstName.value == ""){
            firstName.classList.add("input");
            alert(`please enter your first name`);
            return false;
        }
    if (email.value == ""){
            email.classList.add("input");
            alert(`Please enter your e-mail.`);
            return false;
    }
    if (message.value == ""){
        messsage.classList.add("input");
        alert (`Please, leave us a message in the message portion.`)
    }
    else {
        alert(`Thanks, ${firstName.value}, we will contact you shortly!`);
    }
    
})

