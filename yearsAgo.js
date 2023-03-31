const x = new Date();
yearNow = x.getFullYear();
console.log(yearNow)
function yearsAgo(yearThen){
  return yearNow - yearThen
}
console.log(yearsAgo(2000))