export let renderValidate= () => {

    let inputName = document.getElementById("name");
    let inputAge = document.getElementById("age");

    let validators= {

        "only-letters": /^[a-zA-Z\s]+$/g,
        "telephone": /^\d{9}$/g,
        "email": /\w+@\w+\.\w+/g,
    }

    }