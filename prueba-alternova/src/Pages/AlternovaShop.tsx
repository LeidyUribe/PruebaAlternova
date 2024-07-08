import React, { useEffect, useState } from "react";
import style from "./shopPage.module.scss";
import NavBar from "../Components/navBarComponent/NavBar";
import ButtonCo from "../Components/buttonComponent/Button";
import { bill, product, shoppingCart } from "../utils/Interfaces/interfaces";
import data from "../utils/mockApi.json";
import bought from "../utils/mocApiBought.json";

const ShopPage = () => {
  const [alert, setAlert] = React.useState(false);
  const [items, setItems] = useState<shoppingCart[]>([]);
  const [object, setObjects] = useState<bill>();
  const [response, setResponse] = useState<product[]>();


  const handleIncreaseQuantity = (data: product) => {
    const items = bought.products.map((item: shoppingCart) => {
      if (item.id === data.id && item.quantity >= data.stock) {
        setAlert(true);
      } else if (item.id === data.id) {
        item.quantity++;
      }
    });
    setItems(items);
  };

  useEffect(() => {
    setItems(bought.products);
    setResponse(data.products);
  }, [items]);
  console.log(response);


  const getTotalPrice = (products: shoppingCart[]) => {
    products.map(
      (product: shoppingCart) =>
        (product.total_price = product.quantity * product.unit_price)
    );
  };

  const getTotal = (bill: bill) => {
    bill.total = bill.products
      .map((product) => product.total_price)
      .reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  };

  const createBill = () => {
    setObjects(bought.products);

    getTotalPrice(bought.products);
    getTotal(bought);
    console.log(bought);
  };

  const categoryFilter = (name: string) => {
    return response?.filter(item => item.type === name)
    
  };

  const productFilter = (name: string) => {
    return response?.filter(item => item.name === name)
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
          onChange={(e) =>  categoryFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Producto Filter"
          onChange={(e) =>  productFilter(e.target.value)}

        />
      </div>
      &nbsp;
      <div className={style.body}>        
        <div>
          {response?.map((data: product, index) => (
            <div key={data.id} className={style.card}>
              <div id="item">{data.name}</div>
              <div id="img">
                <img
                  src={`${data.img}`}
                  key={data.name}
                  width={200}
                  height={150}
                />
              </div>
              <div className={style.actions}>
                <div className={style.count}>{items[index]?.quantity}</div>
                <div id="btn">
                  <ButtonCo
                    type={"button"}
                    onClick={() => handleIncreaseQuantity(data)}
                  >
                    Add to cart
                  </ButtonCo>
                </div>
              </div>
            </div>
          ))}

          <ButtonCo type={"button"} onClick={() => createBill(bought)}>
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
              {bought.products.filter((item) => item.quantity > 0).map((item) => (
                <>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.unit_price}</td>
                    <td>{item.total_price}</td>
                  </tr>
                </>
              ))}
              <tr>Total: {bought?.total}</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
