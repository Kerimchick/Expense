const initialState = {
    user: ""
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EXAMPLE":
            return state
        default:
            return state
    }
}