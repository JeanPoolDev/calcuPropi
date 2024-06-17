import { useState } from "react";
import { OrderItem } from "../types";

const useOrder = () => {
  
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (id: number) => {
    alert(`La id es ${id}`)
  }

  return { addItem }
}
 
export default useOrder;