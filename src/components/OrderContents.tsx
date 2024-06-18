import { OrderItem } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface OrderContentsProps {
  order: OrderItem[]
}

const OrderContents: React.FC<OrderContentsProps> = ({
  order
}) => {
  return ( 
    <div className="mx-4">
      <h2 className="font-bold text-4xl mb-5">Consumo</h2>
      
      { order.length === 0 
        ? <p>No hay items</p> 
        : (order.map( item => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-sm font-medium leading-none">
              Precio: S/.{item.price}
            </p>
            <p className="text-sm text-muted-foreground">
              Cantidad: {item.quantity}
            </p>
            </CardContent>
          </Card>
        )))
      }


    </div>
   );
}
 
export default OrderContents;