import { formatCurrency } from "@/helpers";
import { MenuItem, OrderItem } from "../types";

interface OrderContentsProps {
  order: OrderItem[]
  removeItem: (id: MenuItem['id']) => void
}

const OrderContents: React.FC<OrderContentsProps> = ({
  order,
  removeItem
}) => {
  return (
    <div className="m-5">

      
      <h2 className="font-bold text-4xl mb-5">Resumen</h2>
      
      { order.length === 0 
        ? <p>No hay items</p> 
        : (order.map( item => (
          <div key={item.id} className="border-y-2 pb-4">
            <div className="flex justify-between mt-5">
              <p className="text-lg ">{item.name} - {formatCurrency(item.price)}</p>
              <button 
              onClick={() => removeItem(item.id)}
              className="bg-red-600 text-white w-7 h-7 
              rounded-full items-center">
                X
              </button>
            </div>
            <div>
              <p className="text-md font-bold">
                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
          </div>
        )))
      }
      
    </div> 
   );
}
 
export default OrderContents;