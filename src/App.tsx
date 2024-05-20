import styles from "./styles"
import { menuItems } from "./data/db"
import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { useReducer } from "react"
import { initialState, orderReducer } from "./reducers/propinas-reducer"


export default function App() {
  
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className={` bg-black py-3 `}>
        <h1 className={` text-white px-3 ${styles.paragraph}`}>Consumo & Propinas</h1>
      </header>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <section>
          <h2 className=" font-black text-4xl">Menu</h2>
          <div className=" py-2 space-y-3">
            {menuItems.map( item => (
              <MenuItems 
              key={item.id}
              item={item}
              dispatch={dispatch}
              />
              ))}
          </div>
        </section>
        <aside className=" border border-dashed border-slate-300 p-5 rounded-xl space-y-10 mx-4 bg-yellow-50 flex flex-col justify-between">
          <OrderContents 
          state={state}
          dispatch={dispatch}
          />

          <div className=" grid gap-3">

            <TipPercentageForm 
            dispatch={dispatch}
            state={state}
            />
            <OrderTotals 
            state={state}
            dispatch={dispatch}
            />
          </div>
        </aside>
      </main>  
    </>
  )
}
