document.getElementById('Login-button').addEventListener('click', function(event){
    event.preventDefault();
    //step -1
    // const convertMoney=Number(amauntMoney);
    const pin =document.getElementById('input-pin').value;
    const convertPin =Number(pin);
    const amauntMoney =document.getElementById('input-amount').value;
    const convertMainAmount = parseFloat(amauntMoney);
    //step -2
    const mainMoney =document.getElementById('main-money').innerText;
    const convertMainMoney = parseFloat(mainMoney);

    // const number =document.getElementById('input-amount').value;

    if(convertMainAmount < 0){
      alert('Enter Valid Amaount');
  }

   if( mainMoney && pin ){
    if(convertPin === 1234){
       const sum =convertMainMoney +  convertMainAmount ;
       document.getElementById('main-money').innerText = sum;
       //step --------addd transfer money
       const container =document.getElementById('transaction-container');
       const selectAmount =document.getElementById('input-name').value;
       const selectBank =document.getElementById('select-bank').value;
       
       
       const divElement = document.createElement("div");
       divElement.style.background ="green";
       divElement.style.padding ="10px";
       divElement.style.borderRadius ="5px";
       divElement.style.marginBottom ="5px";
       
      divElement.innerHTML = `
         <h1 class ="text-cyan-400 text-2xl">${selectBank}</h1>
         <p class ="text-orange-300"> Amaount: ${convertMainAmount}</p>
          <p class =" text-orange-300">Number: ${selectAmount}</p>
       `
      //  console.log(divElement);
       container.appendChild(divElement);
     }
    else{
        alert("Inter valid Pin");
    }
   }
   else{
    alert('Inter amount');
   }  
    
})