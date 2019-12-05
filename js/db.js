$(document).ready(function(){
    //console.log("document is ready");
    
    //const dbUrl = 'http://localhost:8080';
    const url = 'http://localhost:8080/subs';

    async function createNewEntry(firstname, email, message){
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
    
    let form = $('.contact-form');
    form.on('submit', () => {
        let that = this;
        that = form;
        event.preventDefault(); //prevent reloading form on submit
        //let inputData = that.serializeArray(); //omit the trailing commas?
        let firstName = document.querySelector("input[name=firstname]"); //use jQuery insted of query selector?
        let email = document.querySelector("input[name=email]");
        let message = document.querySelector("textarea[name=message]");
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (firstName.value != "" && email.value != "" && message.value != ""){
            if (email.value.match(mailFormat)){
                createNewEntry(firstName, email, message);
                alert(`Thanks, ${firstName.value}! We will be contacting you shortly.`);
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

    //view all data
    async function getAll(){
        const response = await fetch(url);
        const jsondata = await response.json();
        console.log(`this is so you can view all the data in the database`);
        console.table(jsondata);
        return jsondata;
    }
    getAll();

    //research how to avoid a pending promise
    /**
     * async await waits until promise is returned
     */
    async function getAll2(){
        const response = await fetch(url);
        const jsondata = await response.json();
        return jsondata;
    }

}); // end document.ready