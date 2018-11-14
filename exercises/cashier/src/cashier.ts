interface CartItem{
   name: string;
   price: number;
   qty: number;
}
interface CartAPI{
  length: number;
  total: number;
  addItem(item: CartItem): CartAPI;
  add(name: string, price: number, qty: number): CartAPI;
}
export function cashier():CartAPI {
  let items: CartItem[]=[]
  return {
    get length() {
      return items.reduce((acc, cur)=> {
        return cur.qty + acc
      }, 0)
    },
   get total(){
    return items.reduce((acc, cur)=> {
      return (cur.qty * cur.price) + acc
    }, 0)
   },
    addItem(item): CartAPI{
      items.push(item)
      return this
    },
    add(name, price, qty=1): CartAPI{
      items.push({
        name,
        price, 
        qty
      })
      return this
    }
  };
}
