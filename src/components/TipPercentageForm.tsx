import { orderActions, stateType } from "../reducers/propinas-reducer"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    state : stateType
    dispatch: React.Dispatch<orderActions>
}

export default function TipPercentageForm({state, dispatch} : TipPercentageFormProps) {
    return (
        <div>
            <h3 className=" font-black text-2xl mb-2">Propina:</h3>
            <form className=" flex gap-6 border-orange-800 p-2 border-2 border-dashed rounded-lg bg-stone-300" >
                {tipOptions.map(TipOption=> (
                    <div
                    className=" border-2 border-dashed  border-orange-800 p-1 px-2 rounded-lg bg-stone-200" 
                    key={TipOption.id}>
                        <label
                        className=" pr-2"
                        htmlFor={TipOption.id}
                        ><strong>{TipOption.label}</strong></label>
                        <input 
                        id={TipOption.id}
                        type="radio"
                        name="tip"
                        value={TipOption.value}
                        onChange={ e => dispatch({type : 'add-tip', payload : {value : +e.target.value}})}
                        checked={TipOption.value === state.tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
