document.getElementById('addMoney-btn').addEventListener('click',function(event){
    // alert('add money clicked');
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount =parseFloat(amount);
    
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const textBankNumber = document.getElementById('text-bank-number').value;

    if (textBankNumber.length === 11){

        if(convertedPin === 1234){
            const sum = convertedAmount + convertedMainBalance;
            const mainBalance = document.getElementById('main-balance').innerText = sum;
    
        }
        else{
            alert('Pin Wrong');
        }
    }
    else{
        alert('Number Is Wrong');
    }
    
    
})