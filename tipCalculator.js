
function cal (){

    let bill = document.querySelector (".bill").value;
    let rating = document.querySelector('.rating').value;
    let numOfPeople =document.querySelector('.people').value;

// checking for input values
if (bill === "" || rating == 0) {
    alert('Please make sure you fill in the inputs');
    
}
 //checking for the value of  people to share the tips
if(numOfPeople <=1 || numOfPeople ===""){
    numOfPeople = 1;
    document.querySelector('#each').style.display ='none';
}else{
    document.querySelector('#each').style.display ='block';

 }

 document.querySelector('.display').style.display ="block";

   
    var total = (bill *rating)/numOfPeople;
    total = total.toFixed(2);
document.querySelector('#amount').innerHTML = total;

 }


