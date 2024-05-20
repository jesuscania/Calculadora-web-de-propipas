import { orderActions } from "../reducers/propinas-reducer"
import { menuItemsTypes } from "../types"


type MenuItemsProps = {
    item : menuItemsTypes
    dispatch : React.Dispatch<orderActions>
}

export default function MenuItems({item, dispatch} : MenuItemsProps) {
    return (
    <button 
    className=" border-2 flex justify-between w-full p-3 hover:border-l-neutral-600 transition-all hover:scale-105 rounded-xl hover:shadow-lg shadow-sm"
    onClick={() => dispatch({type : 'add-item', payload : {item}})}
    >
        <p>{item.name}</p>
        <p className=" font-black">${item.price}</p>
    </button>
    )
}
