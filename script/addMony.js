document.getElementById('addMoney-btn').addEventListener('click',function(event){
    // alert('add money clicked');
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount =parseFloat(amount);
    
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const selectBank = document.getElementById('select-bank').value;
    console.log(selectBank);
    
    const textBankNumber = document.getElementById('text-bank-number').value;

    if(convertedAmount < 0){
        alert('Its not added.Plase positive Number');
        return;
    }

    if (textBankNumber.length === 11){

        if(convertedPin === 1234){
            const sum = convertedAmount + convertedMainBalance;
            const mainBalance = document.getElementById('main-balance').innerText = sum;

            const container = document.getElementById('transaction-sec');

            const div = document.createElement('div');
            // div.classList.add("bg-gray-200 p-2 m-2")
            div.innerHTML = `
            <h1>Added Money Form ${selectBank} </h1>
            <h3> Ammount: ${convertedAmount} </h3
            <p> Account No: ${textBankNumber} </h3>

            `
            
            container.appendChild(div);
        }
        else{
            alert('Pin Wrong');
        }
    }
    else{
        alert('Number Is Wrong');
    }
    
    
})