function countAllPaarl(registration){
  var reg = registration.split(", ")
 // console.log(reg)
  var arrReg = []
  var count = 0 
  for(var i=0; i<reg.length; i++){
    var rreg = reg[i]
   
    if(rreg.startsWith("CJ")){
     arrReg.push(rreg)
      count += 1
       }
  }
  //console.log(arrReg.length)
  
  return count
}
console.log(countAllPaarl('CJ 345 123, CK 345, CJ 123'))