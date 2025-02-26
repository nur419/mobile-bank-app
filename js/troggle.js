  document.getElementById('add-money-hide').style.display ='block';
  document.getElementById('cash-out-hide').style.display ='none';
  document.getElementById('transaction').style.display ='none';

document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('add-money-hide').style.display ='block';
    document.getElementById('cash-out-hide').style.display ='none';
    document.getElementById('transaction').style.display ='none';
})
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-hide').style.display ='block';
    document.getElementById('add-money-hide').style.display ='none';
    document.getElementById('transaction').style.display ='none';
})
document.getElementById('transaction-histoy').addEventListener('click', function(){
    document.getElementById('transaction').style.display ='block';
    document.getElementById('cash-out-hide').style.display ='none';
    document.getElementById('add-money-hide').style.display ='none';
})
// document.getElementById('cash-out').addEventListener('click', function(){
//     document.getElementById('cash-out-hide').style.display ='block';
//     document.getElementById('add-money-hide').style.display ='none';
// })