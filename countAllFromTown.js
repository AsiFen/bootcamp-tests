function countAllFromTown(regString, locator){
    var regList = regString.split(",")
    var arrTownNo = []  
  for(var i=0; i<regList.length; i++){
    var reg = regList[i].trim()  
     if(reg.startsWith(locator)){
       arrTownNo.push(reg)
         }  
  }
   return arrTownNo.length
  }

   console.log(countAllFromTown("",""))