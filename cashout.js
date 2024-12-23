document.getElementById('cashout-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('cashout button is clicked')

    const cashOutAgentNumber = getInputValueById('cashout-agent-number');
    const cashOutAmount = getInputValueById('cashout-amount');
    const cashOutPinNumber = getInputValueById('cashout-pin-number');
    // console.log(cashOutAgentNumber,cashOutAmount,cashOutPinNumber)
    if(isNaN(cashOutAmount)){
        alert('please try again later');
        return;
    }
    if(cashOutPinNumber===1234){
        // console.log('add money successful')
        const Balance = getTextValueById('available-balance');
        if(cashOutAmount>Balance){
            alert('you do not have sufficient balance');
            return;
        }
        const newBalance = Balance-cashOutAmount;
        // console.log(newBalance)
        document.getElementById('available-balance').innerText = newBalance;
    }
    else{
        alert('invaild agent number or pin number')
    }
})