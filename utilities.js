// to get value using id 
function getInputValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

// to find text  value 

function getTextValueById (id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

//toogle section using function is here

function toggleButtonById (id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cashout-money-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('bonus-money-form').classList.add('hidden');
    document.getElementById('pay-money-form').classList.add('hidden');
    document.getElementById('transaction-history-form').classList.add('hidden');

    // show form 
    document.getElementById(id).classList.remove('hidden');
}


// active button color


function toggleButtonColor (id){
    document.getElementById('show-add-money-btn').classList.remove('bg-green-400');
    document.getElementById('show-cashout-btn').classList.remove('bg-green-400');
    document.getElementById('show-transfer-btn').classList.remove('bg-green-400');
    document.getElementById('show-bonus-btn').classList.remove('bg-green-400');
    document.getElementById('show-pay-btn').classList.remove('bg-green-400');
    document.getElementById('show-transaction').classList.remove('bg-green-400');

    // show color 
    document.getElementById(id).classList.add('bg-green-400');
}
    



