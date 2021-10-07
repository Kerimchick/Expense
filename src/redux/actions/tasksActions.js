export const addCost = (data) => {
  return {type : "ADD_COST", payload: data}
}

export const removeFromList = (el) => {
  return {type:'REMOVE_FROM_LIST' , payload: el.id}
}