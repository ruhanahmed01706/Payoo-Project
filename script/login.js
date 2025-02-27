// alert()

document.getElementById('login-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('Hello');

    const textNumber = document.getElementById('text-number').value;
    // console.log(textNumber);
    const pIn = document.getElementById('pin').value;

    if(textNumber.length === 11){

        if(pIn === '1234') {
            window.location.href="./main.html"
            
        }
        else{
            alert('Wrong Pin');
            
        }
    }
    else{
        alert('Wrong Number');
        
    }
    
    
})