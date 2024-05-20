import { useEffect } from "react"
import { formatCurrency } from "../helpers"
import { orderActions, stateType } from "../reducers/propinas-reducer"

type OrderContentsProps = {
    state : stateType
    dispatch: React.Dispatch<orderActions>
}

export default function OrderContents({state, dispatch} : OrderContentsProps) {
    useEffect(() => localStorage.setItem('order', JSON.stringify(state.order)) ,[state.order])
    return (
    <>
        <div className=" space-y-3 mt-3">
            <h2 className=" font-black text-4xl ">Consumo</h2>
            {state.order.length === 0? <p>La Orden esta vacia</p>
            : (
                state.order.map( i => (
                    <div
                    className="flex justify-between border pl-7 pr-1 py-1 rounded-r-lg border-l-orange-600" 
                    key={i.id}
                    >
                        <p>{i.name} - {formatCurrency(i.price * i.quantity)} - x{i.quantity}</p>
                        <button 
                        className=" text-red-500 hover:bg-red-800 hover:text-white hover:px-3 transition-all hover:rounded-lg hover:font-bold"
                        onClick={()=> dispatch({type : 'remove-item', payload : { item : i.id } } ) } 
                        >
                        Eliminar
                        </button>
                    </div>
                ))
            )
            } 
        </div>
    </>
    )
}
