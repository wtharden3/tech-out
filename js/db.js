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
    if (firstName.value == ""){
        alert("please complete this form");
    } else {
        alert(`form submitted ${firstName.value}`);
    }
})

