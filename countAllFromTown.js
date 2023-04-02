function countAllFromTown(regString, locator) {
  var regList = regString.split(",")
  var arrTownNo = []

  if (regString !== null && regString !== "") {
    if (locator !== null && locator !== "") {

      for (var i = 0; i < regList.length; i++) {
        var reg = regList[i].trim()
        if (reg.startsWith(locator)) {
          arrTownNo.push(reg)
        }
      }
      return arrTownNo.length
    }
  }

  else if (regString == null || regString == "") {
    return "Registration string is mising."
  }
  else if (locator === null || locator === "") {
    return "locator is mising."
  }

  else {
    return "Pleas enter registration string and locator"
  }
}
console.log(countAllFromTown('',))