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

$('.contact-form').on('submit', () => {
    let firstName = document.querySelector("input[name=firstname]");
    let email = document.querySelector("input[name=email]");
    let message = document.querySelector("textarea[name=message]");
    //if name input in empty > then check if other inputs are also empty
    if (firstName.value == ""){
        firstName.classList.toggle("input");
        email.classList.toggle("input");
        message.classList.toggle("input");
        if (email.value == ""){
            if (message.value == ""){
                alert(`Please comeplete the form before submitting.`);
                return false;
            }
            alert (`Please enter your name and email before submtting the form`);
            return false;
        }
    }
    //if email input is not empty then check if name and message is empty
    if (email.value == ""){
        firstName.classList.toggle("input");
        email.classList.toggle("input");
        message.classList.toggle("input");
        if (firstName.value == ""){
            if (message.value == ""){
                alert(`Please complete.`);
                return false;
            }
            alert(`Please enter your first name.`);
            return false;
        }
        alert(`Please enter your email address before submitting.`);
        return false;
    }
    if (message.value == ""){
        if (firstName.value == ""){
            alert(`Please enter your name and message`);
            return false;
        }
        alert(`Please enter your message.`)
        return false;
    }

    alert(`Thanks, ${firstName.value}! We will be contacting you shortly.`);

})
// $('.contact-form').on('submit', function(){
//     let firstName = document.querySelector("input[name=firstname]");
//     let email = document.querySelector("input[name=email]");
//     let message = document.querySelector("textarea[name=message]");
    
//     if (firstName.value == ""){
//         firstName.classList.add("input");
//         email.classList.add("input");
//         message.classList.add("input");
//         if(email.value == ""){
//             if(message.value == ""){
//                 alert(`Please complete your name, email, and message before submitting.`); 
//             }
//         } else { 
//             alert(`Please enter your name and email address before submitting.`);
//             return false;
//         }



    //     } 
        
        
    //     else {
    //         alert(`please enter your first name`);
    //         return false;
    //     }
    //         firstName.classList.add("input");
    //         alert(`please enter your first name`);
    //         return false;
    //     }
    // if (email.value == ""){
    //         email.classList.add("input");
    //         alert(`Please enter your e-mail.`);
    //         return false;
    // }
    // if (message.value == ""){
    //     messsage.classList.add("input");
    //     alert (`Please, leave us a message in the message portion.`)
    // }
    // else {
    //     alert(`Thanks, ${firstName.value}, we will contact you shortly!`);
    // }
    
// })

