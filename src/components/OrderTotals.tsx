
import { formatCurrency } from "@/helpers"
import { OrderItem } from "@/types"
import { useMemo } from "react"

interface OrderTotalsProps{
  order: OrderItem[],
  tip: number 
}

export const OrderTotals: React.FC<OrderTotalsProps> = ({
  order,
  tip
}) => {

  const subTotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0) , [order])

  const propinaAmount = useMemo(() => subTotalAmount * tip , [subTotalAmount, tip])

  const totalAmount = useMemo(() => subTotalAmount + propinaAmount, [subTotalAmount, propinaAmount])

  return (
    <div className="m-5 space-y-3">
        <h2 className="font-bold text-2xl mb-5">Total y Propinas</h2>
        <p>
          Sub total: {''}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina: {''}
          <span className="font-bold">{formatCurrency(propinaAmount)}</span>
        </p>
        <p>
          Total a pagar: {''}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
  )
}
