document.getElementById('pay-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('pay bill button is clicked')
    const payAccountNumber = getInputValueById('pay-account-number');
    const payAmount = getInputValueById('pay-amount');
    const payPinNumber = getInputValueById('pay-pin-number');
    // console.log(payAccountNumber,payAmount,payPinNumber) 
    if(isNaN(payAmount)){
        alert('please try again later');
        return;
    }
    if(payPinNumber===1234){
        console.log('successfully paid')
        const balance = getTextValueById('available-balance');
        if(payAmount>balance){
            alert('you do not have sufficient balance');
            return;
        }
        const newbalance = balance-payAmount;
        document.getElementById('available-balance').innerText = newbalance;
    }
    else{
        alert('invalid username or password')
    }
})