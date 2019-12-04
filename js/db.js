//import { create } from "domain";

$(document).ready(function(){
    
        console.log("document is ready");

        /////////testing start

const url = '/db.json';

async function getAll(){
    const response = await fetch(url);
    const jsondata = await response.json();
    console.log(jsondata);
    console.table(jsondata);
    //console.log(data.subs[0].id);
    return jsondata;
}

getAll();

async function getOne(i){
    const response = await fetch(url);
    console.log(response);
    console.table(response);
    
    const data = await response.json();
    console.log(data);
    console.table(data);
    

    const id = data.subs;
    console.log(id[i]);
    console.table(id[i]);
    
    const fn = data.subs[i].firstname;
    console.log(fn);
    console.table(fn);
    
    const em = data.subs[i].email;
    console.log(em);
    console.table(em);
    
    const msg = data.subs[i].message;
    console.log(msg);
    console.table(msg);
}


getOne(1);

async function postData(data){
    let options = {
        //allow: 'GET, POST, HEAD',
        method: 'post', //not allowed? 405
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //works
    }
    const response = await fetch(url, options)
    .then((response) => response.json())
    .then(console.log(`done!`));
    //const jsondata = await response.json();
    //return jsondata;
    //.then((response) => response.json());
    //console.log(outcome);
}

// async function create2(data){
//     //let targeturl = `${url}/subs`;
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data //JSON.stringify(data) 
//     }
//    const response = await fetch(url,options);
//    const jsondata = await response.json();
//    //return response;
//    return jsondata;
//   // .then((data) => );
//    console.log(response);
//    console.table(response);
//    //const outcome = await response.json();
// }
//create2(inputData);
//create('test');

async function update(id, input){
    let options = {

    }
    const response = await fetch(`${url}/${id}`, options);
    const data = await response.json();
    console.log(data);
}

//console.log(name);
//async function postManData();

///////testing end
    
    let form = $('.contact-form');
    form.on('submit', () => {
        let that = this;
        that = form;
        event.preventDefault(); //prevent reloading form on submit
        // console.log(`that`);
        // console.log(that);
        // console.table(that);
        // console.log(`that.serializeArray`);
        // console.table(that.serializeArray());
        //let inputData = JSON.stringify(that);
        let inputData = that.serializeArray(); //omit the trailing commas?
        //let parseData = JSON.parse(inputData);
        console.log(`inputData`);
        console.log(inputData);
        console.table(inputData);
        // console.log(`parseData`);
        //console.log(parseData);
        //console.table(parseData);
        
        let firstName = document.querySelector("input[name=firstname]");
        let email = document.querySelector("input[name=email]");
        let message = document.querySelector("textarea[name=message]");
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (firstName.value != "" && email.value != "" && message.value != ""){
            if (email.value.match(mailFormat)){
                //create(that);
                postData(inputData);
                alert(`Thanks, ${firstName.value}! We will be contacting you shortly.`);
                // console.log(`firstName: ${firstName}`);
                // console.log(`firstName.value: ${firstName.value}`);
                return true;
            } 
            else {
                firstName.classList.add("input");
                email.classList.add("input");
                message.classList.add("input");
                alert(`Please enter a valid email address`);
                return false;
            }
        }
        if (firstName.value == "" || email.value == "" || message.value == ""){
            firstName.classList.add("input");
            email.classList.add("input");
            message.classList.add("input");
            alert(`Please complete the entire form before submitting.`);
            return false;
        }
    }); //end form on submit

}); // end document.ready


// let form = $('.contact-form');

// form.on('submit', () => {
//     let that = this;
//     that = form;
//     console.log(that.serializeArray());
//     let inputData = that.serializeArray();
//     event.preventDefault();
    
//     let firstName = document.querySelector("input[name=firstname]");
//     let email = document.querySelector("input[name=email]");
//     let message = document.querySelector("textarea[name=message]");
//     let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     if (firstName.value != "" && email.value != "" && message.value != ""){
//         if (email.value.match(mailFormat)){
//             create2(inputData);
//             //alert(`Thanks, ${firstName.value}! We will be contacting you shortly.`);
//             // console.log(`firstName: ${firstName}`);
//             // console.log(`firstName.value: ${firstName.value}`);
//             return true;
//         } 
//         else {
//             firstName.classList.add("input");
//             email.classList.add("input");
//             message.classList.add("input");
//             alert(`Please enter a valid email address`);
//             return false;
//         }
//     }
//     if (firstName.value == "" || email.value == "" || message.value == ""){
//         firstName.classList.add("input");
//         email.classList.add("input");
//         message.classList.add("input");
//         alert(`Please complete the entire form before submitting.`);
//         return false;
//     }
// });


    //if all are filled then sent in thank you message

    //if firstName, email, or message is empty then send message to complete the entire form

    //if name input in empty > then check if other inputs are also empty
    // if (firstName.value == ""){
    //     firstName.classList.toggle("input");
    //     email.classList.toggle("input");
    //     message.classList.toggle("input");
    //     if (email.value == ""){
    //         if (message.value == ""){
    //             alert(`Please comeplete the form before submitting.`);
    //             return false;
    //         }
    //         alert (`Please enter your name and email before submtting the form`);
    //         return false;
    //     }
    // }
    //if email input is not empty then check if name and message is empty
    // if (email.value == ""){
    //     firstName.classList.toggle("input");
    //     email.classList.toggle("input");
    //     message.classList.toggle("input");
    //     if (firstName.value == ""){
    //         if (message.value == ""){
    //             alert(`Please complete.`);
    //             return false;
    //         }
    //         alert(`Please enter your first name.`);
    //         return false;
    //     }
    //     alert(`Please enter your email address before submitting.`);
    //     return false;
    // }
    // if (message.value == ""){
    //     if (firstName.value == ""){
    //         alert(`Please enter your name and message`);
    //         return false;
    //     }
    //     alert(`Please enter your message.`)
    //     return false;
    // }

    

// })
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

