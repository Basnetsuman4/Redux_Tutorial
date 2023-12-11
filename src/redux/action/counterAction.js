export const counterTypes = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    INCREMENTbyN: "INCREMENTbyN"
}


export const increment = () => {
    return {
        type: counterTypes.INCREMENT
    }
}

export const incrementByN = (payload) => {
    return {
        type: counterTypes.INCREMENTbyN,
        payload: payload
    }
}

export const decrement = () => {
    return {
        type: counterTypes.DECREMENT
    }
}