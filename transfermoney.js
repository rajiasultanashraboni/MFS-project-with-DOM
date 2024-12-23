document.getElementById('transfer-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('transfer button is clicked')
    const transferAccountNumber = getInputValueById('transfer-account-number');
    const transferAmount = getInputValueById('transfer-amount');
    const transferPinNumber = getInputValueById('transfer-pin-number');
    // console.log(transferAccountNumber,transferAmount,transferPinNumber)

    if(isNaN(transferAmount)){
        alert('ibvalid username or password')
        return;
    }
    
    if(transferPinNumber===1234){
        console.log('transfer is successful');
        const balance = getTextValueById('available-balance');
        if(transferAmount>balance){
            alert ('you do not have sufficient balance');
            return;
        }
        const newbalance = balance-transferAmount;
        document.getElementById('available-balance').innerText = newbalance;
    }
    else{
        alert('invalid username or pin number')
    }
})