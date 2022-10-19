function calc()
            {
                //Total income
                var n1 = parseFloat(document.getElementById('n1').value);
                var n2 = parseFloat(document.getElementById('n2').value);
             
                    //value of total grossprofit

                  var totalGrossCal= n1+n2;
                
                  var total_grossprofit1 = document.getElementById('result').value = isNaN(totalGrossCal)?0:totalGrossCal;
///calculate dental supply expense

var dentalsuplies1 = parseFloat(document.getElementById('ds1').value);
var laboratoryfee1 = parseFloat(document.getElementById('lbf1').value);
var staffandpayroll1 = parseFloat(document.getElementById('stf1').value);
var marketing1 = parseFloat(document.getElementById('mk1').value);
var rent1 = parseFloat(document.getElementById('rent1').value);
var generalAdmin1 = parseFloat(document.getElementById('admin1').value);


// total expense
var total_expense1=document.getElementById('noitotal1').value = dentalsuplies1 + laboratoryfee1 +staffandpayroll1 +marketing1 +rent1 +generalAdmin1;



  
// total expense
  

//calculate other income expense
      

var interestIncome1 = parseFloat(document.getElementById('interestIncome1').value);

let total_otherincome1 = document.getElementById('totaOtherIncome1').value = isNaN(interestIncome1)?0: interestIncome1;










//calculate other exepenses

var otherExepenses1 = parseFloat(document.getElementById('otherExepense1').value);

let total_other_expenses1 =document.getElementById('totalotherExepense1').value =  isNaN(otherExepenses1)? 0 :otherExepenses1 ;







//calculate total net income
//total exepsne
var totalExpenseCal = dentalsuplies1 + laboratoryfee1 +staffandpayroll1 +marketing1 +rent1 +generalAdmin1;

var total_expense1 = document.getElementById('noitotal1').value = isNaN(totalExpenseCal)? 0: totalExpenseCal;


var totalNetCal =(total_grossprofit1 + total_otherincome1)- (total_expense1 + total_other_expenses1);


 document.getElementById('total_net_income1').value = isNaN(totalNetCal)? 0: totalNetCal;


            }
         
               
            
//change the month



// Change current month to datewindow.onloud 
var d = new Date();
month = d.getMonth()+1;

monthName ='';
switch(month){

case 1: 

monthName = "January"
break;

case 2: 

monthName = "February"
break;


case 3: 

monthName = "March"
break;

case 4: 

monthName = "April"
break;

case 5: 

monthName = "May"
break;

case 6: 

monthName = "June"
break;

case 7: 

monthName = "July"
break;

case 8: 

monthName = "August"
break;

case 9: 

monthName = "September"
break;



case 10:

  monthName = "October"
  break;

  case 11: 

monthName = "November"
break;


case 12: 

monthName = "December"
break;
}


document.getElementById("currentMonth").innerHTML=monthName;

console.log(monthName);
