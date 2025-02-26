document.getElementById('Login-button').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('paici value')
    const inputNumber =document.getElementById('input-name').value;
    const inputPin =document.getElementById('input-pin').value;
    const convertPin = Number(inputPin);
    if(inputNumber.length === 11){
        if(convertPin === 1234){
         window.location.href ="./main.html"
        }
        else{
            alert('Enter your valid Pin');
        }
    }
    else{
        alert('Enter you valid number');
    }
})