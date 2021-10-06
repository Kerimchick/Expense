const initialState = {
    tasks: [],
    initialAmount: 400,
    costs: 10,
    currentBalance: 400,
    sort: "asc"
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COST":
            return state
        default:
            return state
    }
}