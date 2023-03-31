function mostProfitableDepartment(salesData){
    var saleMap = {}
    for(var i=0; i<salesData.length; i++){
    var sale = salesData[i].department
    if( saleMap[sale] === undefined ){
     saleMap[sale]= salesData[i].sales // these are values
       }
      else{
       saleMap[sale]+= salesData[i].sales          
          }
    } console.log(saleMap)
    var counter = 0, dprt;
    for( var department in saleMap){
    if (saleMap[department] > counter){
      counter = saleMap[department]
      dprt = department 
    }
     }
    return dprt
  }
  function mostProfitableDay(salesData){
    var dayMap = {}
    for(var i=0; i<salesData.length; i++){
    var day = salesData[i].day
    if( dayMap[day] === undefined ){
     dayMap[day]= salesData[i].sales 
       }
      else{
      dayMap[day] += salesData[i].sales          
          }
        var counter = 0, dayOfTheWeek;
      for( var dayOfWeek in dayMap){
        if (dayMap[dayOfWeek] > counter ){
          counter = dayMap[dayOfWeek]
          dayOfTheWeek = dayOfWeek
        } 
      }
  }//console.log(dayMap)
   return dayOfTheWeek
  }