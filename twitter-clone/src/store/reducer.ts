

interface payloadType {
    id:number,
    name:string,
    description:string
}


interface actionType {
    type:string | null,
    payload: payloadType
}

type tweet = payloadType[]

type reducerType = (state:tweet,action:actionType) => tweet | undefined


const reducer= (state:tweet = [],action:actionType) => {
    switch(action.type)
    {
        case "add":
            return [...state,action.payload]
            
        case "remove":
            return state.filter((obj) => obj.id === action.payload.id)
            
    }

    return state
}

export default reducer