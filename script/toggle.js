
document.getElementById('cashout-sec').style.display ='none';

document.getElementById('add-money-btn').addEventListener('click',function(){

    document.getElementById('add-money-sec').style.display = 'block'
    document.getElementById('cashout-sec').style.display = 'none'
})

document.getElementById('cashout-btn').addEventListener('click',function(){

    document.getElementById('cashout-sec').style.display = 'block'
    document.getElementById('add-money-sec').style.display = 'none'

})