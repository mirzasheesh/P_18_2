const initialState = {
    username: "",
    password: "",
    users: [],
};

export function Reducer(state = initialState, action) {

    switch (action.type) {

        case 'setUSER': {
            state.username = action.username;
            return state;
        }

        case 'setPASS': {
            state.password = action.password;
            return state;
        }

        case 'addUSER': {
            state.users.push(action.user);
            return state;
        }

        default: return state;
    }
}