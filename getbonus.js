document.getElementById('bonus-btn')
.addEventListener('click',function(event){
event.preventDefault();
// console.log('bonus button is clicked')
const getBonusValue = getInputValueById('bonus-pin-number');
// console.log(getBonusValue)

const balance = getTextValueById('available-balance');
        if(getBonusValue>balance){
            alert('you do not have sufficient balance');
            return;
        }
        const newbalance = balance+getBonusValue;
        document.getElementById('available-balance').innerText = newbalance;

})