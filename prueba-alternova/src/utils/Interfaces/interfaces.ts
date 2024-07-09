export interface Product {
  name: string,
  unit_price: number,
  stock: number,
  type: string,
  img: string
}

export interface Item {
  name: string,
  unit_price: number,
  stock: number,
  quantity: number,
  total_price: number,
}

export interface Bill{
  products:[Item],
  total: number
}