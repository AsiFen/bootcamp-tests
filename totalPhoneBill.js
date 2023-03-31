function totalPhoneBill(billString){
    var billStr = billString.split(", ")
    //console.log(billStr);
    var call = 0
    var sms = 0 
  for (var i=0; i<billStr.length; i++){
  if(billStr[i] === "sms"){
    sms++
     }
     else if (billStr[i] === "call"){
       call++
  }
  } var  total = call*2.75 + sms*0.65;
  return  "R" +total.toFixed(2)
  }
  