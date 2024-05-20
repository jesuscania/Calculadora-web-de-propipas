import { menuItemsTypes, orderType } from "../types";

export type orderActions = 
    {type : 'add-item', payload : {item : menuItemsTypes}} |
    {type : 'remove-item', payload : {item : menuItemsTypes['id']}} |
    {type : 'add-tip', payload : {value : number}} |
    {type : 'place-Order'} 

export type stateType = {
    order : orderType[],
    tip : number
}

const initialOrder = () : orderType[] => {
    const initialLocal = localStorage.getItem('order')
    return initialLocal? JSON.parse(initialLocal) : ""
}


export const initialState : stateType = {
    order : initialOrder(),
    tip : 0
}
export const orderReducer = (state : stateType = initialState, action : orderActions) => {
    
    if(action.type === 'add-item') {
        let updatedBoard : orderType[] = []
        const itemExist = state.order.find(orderType => orderType.id === action.payload.item.id)
        if(itemExist){
            updatedBoard = state.order.map(orderType => orderType.id === action.payload.item.id ?{...orderType, quantity : orderType.quantity + 1} : orderType)
        } else{
            const newItem : orderType = {...action.payload.item, quantity : 1}
            updatedBoard = [...state.order, newItem]
        }

        return { 
            ...state,
            order: updatedBoard
        }
    }


    if(action.type === 'remove-item') {
        const updatedOrder = state.order.filter(item => item.id !== action.payload.item)
        return {
            ...state,
            order : updatedOrder
        }
    }

    if(action.type === 'place-Order') {

        return {
            order : [],
            tip : 0
        }
    }

    if(action.type === 'add-tip') {
        return {
            ...state,
            tip: action.payload.value
        }
    }

    return { ...state }
}
