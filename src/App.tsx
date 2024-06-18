import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order ,addItem } = useOrder()

  return (
    <>
      <header className="bg-teal-200 py-5">
        <h1 className="text-center text-2xl font-bold">
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

        <div className="space-y-10">
          <OrderContents order={order}/>
        </div>

        
      </main>
    </>
  )
}

export default App
