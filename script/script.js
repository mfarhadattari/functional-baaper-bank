document.getElementById('login-btn').addEventListener('click', function(){
    const userEmail = 'sontan@baap.com' ;
    const userPassword = 'secret' ;
    const inputEmail = document.getElementById('input-email').value ;
    const inputPassword = document.getElementById('input-password').value ;
    if (inputEmail === userEmail && inputPassword === userPassword){
        window.location.href = 'dashboard.html' ;
    }
    else{
        alert('Please Input Correct Information') ;
    }
})