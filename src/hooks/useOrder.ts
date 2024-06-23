import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

const useOrder = () => {
  
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItem) => {
    
    const itemExists = order.find( orderItem => orderItem.id === item.id );
    if( itemExists ) {
      const updateOrder = order.map( orderItem => orderItem.id === item.id 
        ? { ...orderItem, quantity: orderItem.quantity + 1 }
        : orderItem
      )
      setOrder( updateOrder )
    }else {
      const itemUpdate = { ...item, quantity: 1}
      setOrder([ ...order,  itemUpdate] )
    }
  }

  const removeItem = (id: MenuItem['id']) => {
    const removeOrder = order.filter( item => item.id !== id )
    setOrder(removeOrder)
  }

  return { 
    order,
    tip,
    setTip,
    addItem,
    removeItem
   }
}
 
export default useOrder;