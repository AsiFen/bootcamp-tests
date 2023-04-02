function findItemsOver(itemsList, threshold) {
  var items = []
  if (itemsList !== null && itemsList !== "") {
    for (var i = 0; i < itemsList.length; i++) {
      let item = itemsList[i]
      if (item.qty > threshold) {
        items.push(item)
      }
    }
    if (items.length === 0) {
      return "No items had quantities over the threshold."
    }
    return items
  }
  else {
    return "You have entered an empty list."
  }
}
