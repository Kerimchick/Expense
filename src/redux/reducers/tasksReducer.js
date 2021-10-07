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
                initialAmount: state.initialAmount,
                currentBalance: state.currentBalance - action.payload.expense,
                costs: state.costs + action.payload.expense
            }
        case "REMOVE_FROM_LIST":
            return {
                ...state, tasks: state.tasks.filter(el => el.id !== action.payload),
                initialAmount: state.initialAmount,
                costs: state.costs - action.payload.expense,
                currentBalance: state.currentBalance + action.payload.expense
            }
        default:
            return state
    }
}