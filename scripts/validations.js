(function attachEvents() {
    $('#sendBtn').click(sendMessage);

    function sendMessage(event) {
        event.preventDefault();
        event.stopPropagation();

        let validName = nameValidation();
        let validEmail = emailValidation();
        let validCampChoise = campChoiseValidation();
        let validMessage = messageValidation();

        if (validName && validEmail && validCampChoise && validMessage) {
            $.notify("Message was send successfully!", "success");
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
            $('#choose-camp').val('');
        } else {
            $.notify("Try again!", "error");
        }
    }

    function messageValidation() {
        let isValid = false;
        
        let message = $('#message').val();
        if (message !== '') {
            isValid = true;
        }

        return isValid;
    }

    function campChoiseValidation() {
        let isValid = false;

        let selectedOption = $('.contact-form option:selected').val();
        console.log(selectedOption);
        if (selectedOption !== 'name') {
            isValid = true;
        }

        return isValid;
    }

    function emailValidation() {
        let isValid = false;
        const regex =  /(.+)@(.+){2,}\.(.+){2,}/;

        let email = $('#email').val();
        if (regex.test(email)) {
            isValid = true;
        }

        return isValid;
    }

    function nameValidation() {
        let isValid = false;
        const regex = /^[a-zA-Z ]{2,30}$/;

        let name = $('#name').val();
        if (regex.test(name)) {
            isValid = true;
        }

        return isValid;
    }
}());