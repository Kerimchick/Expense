const initialState = {
    name: ""
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {name: action.payload}
        default:
            return state
    }
}