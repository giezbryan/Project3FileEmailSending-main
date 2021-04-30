
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    sendEmailForm = document.getElementById('email-form');

eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', appInit);
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
    resetBtn.addEventListener('click', resetForm);
}


function appInit() {
    sendBtn.disabled = true;
}

function validateField() {
    let errors;

    validateLength(this);

    if(this.type === 'email') {
        validateEmail(this);
    }

    errors = document.querySelectorAll('.error');

    if(email.value !== '' && subject.value !== '' && message.value !== '') {
        if(errors.length === 0 ) {
            sendBtn.disabled = false;
        }
    }

}

function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function validateEmail(field) {
    let emailText = field.value;

    if(emailText.indexOf('@') !== -1 ) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function resetForm() {
    sendEmailForm.reset();
}



























