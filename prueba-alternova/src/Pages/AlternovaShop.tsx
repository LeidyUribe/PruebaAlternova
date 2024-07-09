import React, { useEffect, useState } from "react";
import style from "./shopPage.module.scss";
import NavBar from "../Components/navBarComponent/NavBar";
import ButtonCo from "../Components/buttonComponent/Button";
import { Bill, Product, Item } from "../utils/Interfaces/interfaces";
import data from "../utils/mockApi.json";
// import bought from "../utils/mocApiBought.json";

const ShopPage = () => {
  const [alert, setAlert] = React.useState(false);

  const [billData, setBillData] = useState<Bill>();
  const [response, setResponse] = useState<Product[]>();

  const handleIncreaseQuantity = (product: Product) => {
    return  billData?.products.map((item: Item) => {
      if (item.name === product.name && item.quantity >= product.stock) {
        setAlert(true);
      } else if (item.name === product.name) {
        item.quantity++;
      }
    });
  };

  const addProduct = (product: Product) => {
    if (billData?.products.length > 0) {
      let items: [Item];
      items = [
        {
          name: product.name,
          unit_price: product.unit_price,
          stock: product.stock,
          quantity: 0,
          total_price: 0,
        },
      ];

      const concatItem = billData?.products.concat(items);
      billData.products = concatItem;
      
      handleIncreaseQuantity(product);
      setBillData({ products: billData?.products, total: 0 });
    } else {
      let items: [Item];
      items = [
        {
          name: product.name,
          unit_price: product.unit_price,
          stock: product.stock,
          quantity: 0,
          total_price: 0,
        },
      ];
      setBillData({ products: items, total: 0 });
    }

    console.log("billdata",billData);
  };

  useEffect(() => {
    setResponse(data.products);
  }, [billData]);

  const getTotalPrice = (products: Item[]) => {
    return products.map(
      (product: Item) =>
        (product.total_price = product.quantity * product.unit_price)
    );
  };

  const getTotal = (bill: Bill) => {
     bill.total = bill.products
      .map((product) => product.total_price)
      .reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  };

  const createBill = () => {
    getTotalPrice(billData.products);
    getTotal(billData);

     setBillData(billData);

    console.log(billData);
  };

  const categoryFilter = (name: string) => {
     const result = response?.filter((item) => item.type === name);
     console.log("Categoryfilter",result);
     return result;
  };

  const productFilter = (name: string) => { 
    const result = response?.filter((item) => item.name === name);
    console.log(result);
    return result;
  };

  return (
    <div className="body">
      <NavBar>Alternova Shop</NavBar>
      {alert && (
        <span style={{ backgroundColor: "red", color: "black" }}>
          No hay cantidad suficiente para el pedido
        </span>
      )}
      <div>
        <input
          type="text"
          placeholder="Category Filter"
          onChange={(e) => categoryFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Producto Filter"
          onChange={(e) => productFilter(e.target.value)}
        />
      </div>
      &nbsp;
      <div className={style.body}>
        <div>
          {response?.map((product: Product, index) => (
            <div key={product.name} className={style.card}>
              <div id="item">{product.name}</div>
              <div id="img">
                <img
                  src={`${product.img}`}
                  key={product.name}
                  width={200}
                  height={150}
                />
              </div>
              <div className={style.actions}>
                <div className={style.count}>
                  {billData?.products[index+1]?.quantity}
                </div>
                <div id="btn">
                  <ButtonCo type={"button"} onClick={() => addProduct(product)}>
                    Add to cart
                  </ButtonCo>
                </div>
              </div>
            </div>
          ))}

          <ButtonCo type={"button"} onClick={() => createBill(billData)}>
            Total
          </ButtonCo>
        </div>

        <div>
          <table style={{ borderColor: "black" }}>
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Unit price</th>
                <th scope="col">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {billData?.products.map((item) => (
                <>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.unit_price}</td>
                    <td>{item.total_price}</td>
                  </tr>
                </>
              ))}
              <tr>Total: {billData?.total}</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
