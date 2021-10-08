const initialState = {
    tasks: [],
    initialAmount: 400,
    costs: 0,
    currentBalance: 400,
    sort: "asc"
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COST":
            return {...state, tasks: [...state.tasks, action.payload],
                currentBalance: state.currentBalance - action.payload.expense,
                costs: state.costs + action.payload.expense
            }
        case "REMOVE_FROM_LIST":
            const deletedItem = state.tasks[action.payload]
            return {
                ...state, tasks: state.tasks.filter((el, index) => index !== action.payload),
                costs: state.costs - +deletedItem.expense,
                currentBalance: state.currentBalance + +deletedItem.expense
            }
        case "CLEAR_LIST_EXPENSE":
            return state = initialState
        case "SORT_TASKS_LIST":
            state.tasks.sort((a, b) => {
              return   state.sort ==="asc" ? a.expense - b.expense : b.expense - a.expense
            })
            return {...state, tasks: [...state.tasks], sort: state.sort === "asc" ? "desc" : "asc"}
        default:
            return state
    }
}