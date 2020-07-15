const successDiv=document.getElementById('PasswordSuccess');


const passwordInput=document.getElementById('password');
passwordInput.addEventListener('keyup',passwordCheck);

var password=''
function passwordCheck(event){
    password=password+event.key
    console.log('thisIsThePassword',password);
    if(password.length >= 8){
        successDiv.classList.add('show');


    }
}

