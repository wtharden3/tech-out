$(document).ready(function(){
    //console.log("document is ready");
    
    const dbUrl = 'http://localhost:8080';
    const url = 'http://localhost:8080/subs';
    
    async function getAll(){
        const response = await fetch(url);
        const jsondata = await response.json();
        return jsondata;
    }

    async function getOne(i){
        const response = await fetch(url);
        const data = await response.json();
        console.log(`data[${i}]`);
        //console.log(data[i]);
        console.table(data[i]);
        return data;
    }

    async function loopDataThenCreate(firstname, email, message){
        const response = await fetch(url);
        const data = await response.json();
        let ind = data.length+1;
        let options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "id": ind,
                    "firstname": firstname.value,
                    "email": email.value,
                    "message": message.value
                }
            ) //end of JSON.stringify()
        }
        const response2 = await fetch(url, options)
        .then((response2) => response2.json());
        return response2;
    }

//this works below
async function createPostData(data){
    let options = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //works
    }
    const response = await fetch(url, options)
    .then((response) => response.json())
    .then(console.log(`done!`));
    return response;
}

//works but ends with 500 (Internal Server Error) - commented out return respose;
async function createID(i, firstname, email, message){
    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "id": i,
                "firstname": firstname.value,
                "email": email.value,
                "message": message.value
            }
        )//end of Json.stringify
    }
    const response = await fetch(url, options)
    .then((response) => response.json())
    .then(console.log(`your db was updated`));
    //return response;
}
//get all
//if index
 //createID(4);



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
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input) //works
    }
    const response = await fetch(`${url}/${id}`, options)
    .then((response) => response.json())
    .then(console.log(`done with data update!`));
}

//console.log(name);
//async function postManData();

///////testing end
    
    let form = $('.contact-form');
    form.on('submit', () => {
        let that = this;
        that = form;
        event.preventDefault(); //prevent reloading form on submit
         console.log(`that`);
         console.log(that);
         console.table(that);
        // console.log(`that.serializeArray`);
        // console.table(that.serializeArray());
        //let inputData = JSON.stringify(that);
        let inputData = that.serializeArray(); //omit the trailing commas?
        //let parseData = JSON.parse(inputData);
        console.log(`inputData`);
        console.log(inputData);
        console.table(inputData);

        console.log(`inputData[1]`);
        console.log(inputData[1]);
        console.table(inputData[1]);

        console.log(`inputData[1]["name"]`);
        console.log(inputData[1]["name"]);
        console.table(inputData[1]["name"]);

        let postEmail = inputData[1]["name"];
        let postValue2 = inputData[1]["value"];
        console.log(`postEmail`);
        console.table(postEmail);
        console.log(`postValue2`);
        console.table(postValue2);

        console.log(`inputData["value"]`);
        console.log(inputData["value"]);
        console.table(inputData["value"]);

        let postType = (i) => {
            let t = inputData[i]["name"];
            return t;
        }
        let postValue = (i) => {
            let v = inputData[i]["value"];
            return v;
        }

        console.log(`postType`);
        console.table(postType(1));
        console.log(`postValue`);
        console.table(postValue(1));




        // console.log(`parseData`);
        //console.log(parseData);
        //console.table(parseData);
        
        let firstName = document.querySelector("input[name=firstname]");
        let email = document.querySelector("input[name=email]");
        let message = document.querySelector("textarea[name=message]");
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //let num = ;

        if (firstName.value != "" && email.value != "" && message.value != ""){
            if (email.value.match(mailFormat)){
                //create(that);
                //createPostData(inputData); //this is if db.json is empty
                
                //add update but needs to loop "id" so that it isn't overwritting previous data
                //psuedo: if ...id == "undefined" insert data
                //update(1, inputData);

                // console.log(`firstName`);
                // console.log(firstName.value);
                // console.log(`email`);
                // console.log(email.value);
                // console.log(`message`);
                // console.log(message.value);
                loopDataThenCreate(firstName, email, message);
                //alert(`Thanks, ${firstName.value}! We will be contacting you shortly.`);
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

