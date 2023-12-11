import { counterTypes } from "../action/counterAction";



const initialState = 0;

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case counterTypes.INCREMENT:
            return state + 1;
        case counterTypes.DECREMENT:
            return state - 1;
        case counterTypes.INCREMENTbyN:
            return state + action.payload;
        default:
            return state
    }
}

export default counterReducer;