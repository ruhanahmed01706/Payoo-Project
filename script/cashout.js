
document.getElementById('cash-Out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cashoutAmount = document.getElementById('cashout-amount').value;
    const convertedCashoutAmount = parseFloat(cashoutAmount);

    const cashoutPin = document.getElementById('cashout-pin').value;
    const convertedCashoutPin = parseInt(cashoutPin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const textCashoutNumber = document.getElementById('text-cashout-number').value;

    if(textCashoutNumber.length === 11){
        if(convertedCashoutPin === 1234){

            const sum = convertedMainBalance - convertedCashoutAmount;
            const mainBalance = document.getElementById('main-balance').innerText = sum;

        }
        else{
            alert('Cashout Pin Wrong');
        }
    }
    else{
        alert('Wrong Cashout Number');
    }
})