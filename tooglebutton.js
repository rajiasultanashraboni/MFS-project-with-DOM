// add money button when clicked 

document.getElementById('show-add-money-btn')
.addEventListener('click',function(){
    // console.log('add money button clicked')
    toggleButtonById('add-money-form');
    toggleButtonColor('show-add-money-btn')
})

// cash out button when clicked 

document.getElementById('show-cashout-btn').addEventListener('click',function(){
    toggleButtonById('cashout-money-form');
    toggleButtonColor('show-cashout-btn')
})

// transfer money button when clicked 

document.getElementById('show-transfer-btn').addEventListener('click',function(){
    toggleButtonById('transfer-money-form');
    toggleButtonColor('show-transfer-btn')
});

// get bonus button when clikced

document.getElementById('show-bonus-btn').addEventListener('click',function(){
    toggleButtonById('bonus-money-form');
    toggleButtonColor('show-bonus-btn')
})

// when pay btn button clicked 

document.getElementById('show-pay-btn').addEventListener('click',function(){
    toggleButtonById('pay-money-form');
    toggleButtonColor('show-pay-btn')
})

// when transaction button is clicked
document.getElementById('show-transaction').addEventListener('click',function(){
    toggleButtonById('transaction-history-form');
    toggleButtonColor('show-transaction')
})