
export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case 'login':
            return {
                isAuth: true,
                user: action.payload.user,
            };
        case 'logout':
            return {
                isAuth: false,
                user: undefined,
            };
        default:
            return state;
    }

}