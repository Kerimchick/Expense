export const addCost = (data) => {
  return {type : "ADD_COST", payload: data}
}

export const removeFromList = (index) => {
  return {type:'REMOVE_FROM_LIST' , payload: index}
}

export const clearListExpense = () => {
  return {type:'CLEAR_LIST_EXPENSE'}
}