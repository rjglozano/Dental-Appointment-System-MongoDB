function calc()
            {
                //Total income
                var n1 = parseFloat(document.getElementById('n1').value);
                var n2 = parseFloat(document.getElementById('n2').value);
                var n3 = parseFloat(document.getElementById('n3').value);
                var n4 = parseFloat(document.getElementById('n4').value);
                var n5 = parseFloat(document.getElementById('n5').value);
                var n6 = parseFloat(document.getElementById('n6').value);

                    //value of total grossprofit


                
                  var total_grossprofit1 = document.getElementById('result').value = n1+n2;
                  var total_grossprofit2 =document.getElementById('result2').value = n3+n4;
                  var total_grossprofit3=document.getElementById('result3').value = n5+n6;
///calculate dental supply expense

var dentalsuplies1 = parseFloat(document.getElementById('ds1').value);
var laboratoryfee1 = parseFloat(document.getElementById('lbf1').value);
var staffandpayroll1 = parseFloat(document.getElementById('stf1').value);
var marketing1 = parseFloat(document.getElementById('mk1').value);
var rent1 = parseFloat(document.getElementById('rent1').value);
var generalAdmin1 = parseFloat(document.getElementById('admin1').value);


// total expense
var total_expense1=document.getElementById('noitotal1').value = dentalsuplies1 + laboratoryfee1 +staffandpayroll1 +marketing1 +rent1 +generalAdmin1;

var dentalsuplies2 = parseFloat(document.getElementById('ds2').value);
var laboratoryfee2 = parseFloat(document.getElementById('lbf2').value);
var staffandpayroll2 = parseFloat(document.getElementById('stf2').value);
var marketing2 = parseFloat(document.getElementById('mk2').value);
var rent2 = parseFloat(document.getElementById('rent2').value);
var generalAdmin2 = parseFloat(document.getElementById('admin2').value);


// total expense
var total_expense2= document.getElementById('noitotal2').value = dentalsuplies2 + laboratoryfee2 +staffandpayroll2 +marketing2 +rent2 +generalAdmin2;


          
var dentalsuplies3 = parseFloat(document.getElementById('ds3').value);
var laboratoryfee3 = parseFloat(document.getElementById('lbf3').value);
var staffandpayroll3 = parseFloat(document.getElementById('stf3').value);
var marketing3 = parseFloat(document.getElementById('mk3').value);
var rent3 = parseFloat(document.getElementById('rent3').value);
var generalAdmin3 = parseFloat(document.getElementById('admin3').value);

// total expense
var total_expense3 = document.getElementById('noitotal3').value = dentalsuplies3 + laboratoryfee3 +staffandpayroll3 +marketing3 +rent3 +generalAdmin3;
  

//calculate other income expense
      

var interestIncome1 = parseFloat(document.getElementById('interestIncome1').value);

let total_otherincome1 = document.getElementById('totaOtherIncome1').value =  interestIncome1;




var interestIncome2 = parseFloat(document.getElementById('interestIncome2').value);

let total_otherincome2 = document.getElementById('totaOtherIncome2').value = interestIncome2;



var interestIncome3 = parseFloat(document.getElementById('interestIncome3').value);

let total_otherincome3= document.getElementById('totaOtherIncome3').value =  interestIncome3;

//calculate other exepenses

var otherExepenses1 = parseFloat(document.getElementById('otherExepense1').value);

let total_other_expenses1 =document.getElementById('totalotherExepense1').value =  otherExepenses1 ;

var otherExepenses2 = parseFloat(document.getElementById('otherExepense2').value);

let total_other_expenses2= document.getElementById('totalotherExepense2').value =  otherExepenses2 ;

var otherExepenses3 = parseFloat(document.getElementById('otherExepense3').value);

let total_other_expenses3 =document.getElementById('totalotherExepense3').value =  otherExepenses3 ;



//calculate total net income
//total exepsne
var total_expense1 = document.getElementById('noitotal1').value = dentalsuplies1 + laboratoryfee1 +staffandpayroll1 +marketing1 +rent1 +generalAdmin1;
;

var total_expense2= document.getElementById('noitotal2').value = dentalsuplies2 + laboratoryfee2 +staffandpayroll2 +marketing2 +rent2 +generalAdmin2;


var total_expense3 = document.getElementById('noitotal3').value = dentalsuplies3 + laboratoryfee3 +staffandpayroll3 +marketing3 +rent3 +generalAdmin3;

 document.getElementById('total_net_income1').value =(total_grossprofit1 + total_otherincome1)- (total_expense1 + total_other_expenses1) ;
 document.getElementById('total_net_income2').value =(total_grossprofit2 + total_otherincome2)- (total_expense2 + total_other_expenses2) ;

 document.getElementById('total_net_income3').value =(total_grossprofit3 + total_otherincome3)- (total_expense3 + total_other_expenses3) ;



            }

        
            