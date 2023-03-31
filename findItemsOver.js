function findItemsOver20(itemList){
    var items = []
    for(var i=0; i<itemList.length; i++){
      let item = itemList[i]
      if(item.qty > 20 ){
        items.push(item)
         }
    } return items
  }
  