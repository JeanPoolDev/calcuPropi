import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import { OrderTotals } from "./components/OrderTotals"
import { PorcentageForm } from "./components/PorcentageForm"
import { Card } from "./components/ui/card"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addItem, removeItem, replaceOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-200 py-5 ">
        <h1 className="text-center text-2xl font-bold ">
          App de Calculadora de Propinas y Consumo
        </h1>
      </header>
      
      <main className="max-w-6xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className="mb-5 font-bold text-4xl">Menú</h2>

          <div className="space-y-2">
            {menuItems.map( item => (
              <MenuItems 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>

        </div>

        <Card className="space-y-10 m-5">
          <OrderContents 
            order={order} 
            removeItem={removeItem} />

          <PorcentageForm
            setTip={setTip}
            tip={tip} 
          /> 

          <OrderTotals 
            order={order}
            tip={tip}
            replaceOrder={replaceOrder}
            /> 
        </Card>

        

      </main>
    </>
  )
}

export default App
