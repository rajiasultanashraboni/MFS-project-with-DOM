document.getElementById('login-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('login button clicked');
    const getMobileNumber = getInputValueById('mobile-number')
    // console.log(getMobileNumber)
    const getPassword = getInputValueById('password');
    // console.log(getPassword)
    if(getPassword===1234){
        console.log('successfully login');
        window.location.href="./home.html"
    }
    else{
        alert('please try again')
    }
})