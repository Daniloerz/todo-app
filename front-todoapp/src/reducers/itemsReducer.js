
export const itemsReducer = (state = [], action) => {

    switch (action.type) {
        case 'addItem':
            
            return [
                ...state,
                {
                    ...action.payload,
                }
            ];
        case 'removeItem':
            return state.filter(item => item.id !== action.payload);
        case 'updateItem':
            return state.map(i => {
                if (i.id === action.payload.id) {
                    return {
                        ...action.payload,
                    };
                }
                return i;
            })
        case 'loadingItems':
            return action.payload;
        default:
            return state;
    }
}