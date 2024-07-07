export interface product {
  id: number,
  name: string,
  unit_price: number,
  stock: number,
  type: string,
  img: string
}

export interface shoppingCart {//itemProduct
  id: number,
  name: string,
  unit_price: number,
  stock: number,
  quantity: number,
  total_price: number,
}

export interface bill{
  products:[shoppingCart],
  total: number
}