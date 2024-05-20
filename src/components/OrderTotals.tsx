import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { orderActions, stateType } from "../reducers/propinas-reducer";

type OrderTotalProps = {
    state : stateType
    dispatch: React.Dispatch<orderActions>
}

export default function OrderTotals({state, dispatch} : OrderTotalProps) {
    //funcion que calcula el subtotal de todos los elementos que se actualiza cuando el estado de order cambia
    const subTotalAmount = useMemo(() => state.order.reduce((total, item) => total + (item.price * item.quantity), 0),[state.order])
    const tipAmount = useMemo(() => subTotalAmount * state.tip  ,[subTotalAmount, state.tip])
    const totalAmount = useMemo(()=> subTotalAmount + tipAmount ,[subTotalAmount, tipAmount])

    return (
        <section
        className="grid grid-cols-2 p-3 rounded-lg border-yellow-800 border-dashed border-2"
        >
            <div>
                <h2><strong>Totales y Propinas:</strong></h2>
                <p>Subtotal a pagar:{' '}
                    <strong>{formatCurrency(subTotalAmount)}</strong>
                </p>
                <p>Propina:{' '}
                    <strong>{formatCurrency(tipAmount)}</strong>
                </p>
                <p>Total a pagar:{' '}
                    <strong>{formatCurrency(totalAmount)}</strong>
                </p>
            </div>
            <div
            className=" grid justify-end gap-2"
            >
                <button 
                disabled={totalAmount === 0}
                onClick={()=> dispatch({type : 'place-Order'})}
                className=" bg-yellow-500 p-3 rounded-lg hover:bg-lime-400 hover:shadow-md transition-all hover:px-7 disabled:opacity-10">Enviar</button>
            </div>
        </section>
    )
}
