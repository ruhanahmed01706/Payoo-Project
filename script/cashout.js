
document.getElementById('cash-Out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cashoutAmount = document.getElementById('cashout-amount').value;
    const convertedCashoutAmount = parseFloat(cashoutAmount);

    const cashoutPin = document.getElementById('cashout-pin').value;
    const convertedCashoutPin = parseInt(cashoutPin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const selectBank = document.getElementById('select-bank').value;

    const textCashoutNumber = document.getElementById('text-cashout-number').value;

    if(convertedMainBalance < convertedCashoutAmount){
        alert('Your Balance Is Not Available')
        return;
    }

    if(textCashoutNumber.length === 11){
        if(convertedCashoutPin === 1234){

            const sum = convertedMainBalance - convertedCashoutAmount;
            const mainBalance = document.getElementById('main-balance').innerText = sum;

            const container = document.getElementById('transaction-sec');
            

            const div = document.createElement('div');
            // div.classList.add("bg-gray-200 p-2 m-2")
            div.innerHTML = `
            <h1>CashOut Form ${selectBank} </h1>
            <h3> Amount: ${convertedCashoutAmount} </h3
            <p> Account No: ${textCashoutNumber} </h3>

            `
            container.appendChild(div);
            
            
            

        }
        else{
            alert('Cashout Pin Wrong');
        }
    }
    else{
        alert('Wrong Cashout Number');
    }
})