document.getElementById('addmoney-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('add money button is clicked')

    const addMoneyAccountNumber = getInputValueById('addmoney-account-number');
    const addMoneyAmount = getInputValueById('addmoney-amount');
    const addMoneyPinNumber = getInputValueById('addmoney-pin-number');
    // console.log(addMoneyAccountNumber,addMoneyAmount,addMoneyPinNumber)
    if(isNaN(addMoneyAmount)){
        alert('please try again later');
        return;
    }
    if(addMoneyPinNumber===1234){
        // console.log('add money successful')
        const Balance = getTextValueById('available-balance');
        if(addMoneyAmount>Balance){
            alert('you do not have sufficient balance');
            return;
        }
        const newBalance = Balance+addMoneyAmount;
        // console.log(newBalance)
        document.getElementById('available-balance').innerText = newBalance;
    }
    else{
        alert('invaild account number or pin number')
    }
})