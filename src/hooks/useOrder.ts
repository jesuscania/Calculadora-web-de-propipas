import { useState } from "react"
import { menuItemsTypes, orderType } from "../types"


export default function useOrder() {
    const [order, setOrder] = useState<orderType[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item : menuItemsTypes) => {
        const itemExist = order.find(orderType => orderType.id === item.id)
        if(itemExist){
            const updatedBoard = order.map(orderType => orderType.id === item.id ?{...orderType, quantity : orderType.quantity + 1} : orderType)
            setOrder(updatedBoard)
        } else{
            const newItem = {...item, quantity : 1}
            setOrder([...order, newItem])
        }

    }
    function removeItem (id : menuItemsTypes['id']) {
        setOrder(order.filter(item => item.id !== id))
    }
    function sendOrder (){
        setOrder([])
        setTip(0)
    }
    return {
        order,
        setOrder,
        tip,
        setTip,
        addItem,
        removeItem,
        sendOrder
    }
}
