import React, { useEffect, useState } from "react";
import style from "./shopPage.module.scss";
import NavBar from "../Components/navBarComponent/NavBar";
import ButtonCo from "../Components/buttonComponent/Button";
import { product, shoppingCart } from "../utils/Interfaces/interfaces";
import data from "../utils/mockApi.json";
import bought from "../utils/mocApiBought.json";

const ShopPage = () => {
  const [alert, setAlert] = React.useState(false);
  const [items, setItems] = useState<shoppingCart[]>([]);

  const handleIncreaseQuantity = (id: number) => {
    console.log("entro");

    setItems(
      bought.products.map((item: shoppingCart) =>
        item.id === id ? { ...item, quantity: item.quantity++ } : item
      )
    );
    console.log(items);
    
  };

  useEffect(() => {
    setItems(bought.products);
  }, [items]);

  return (
    <div className="body">
      <NavBar>Alternova Shop</NavBar>
      {alert && <span>No hay cantidad suficiente para el pedido</span>}
      <div className={style.body}>
        <div>
          {data.products.map((data: product,index) => (
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
                <div className={style.count}>
                {items[index]?.quantity}
                </div>
                <div id="btn">
                  <ButtonCo
                    type={"button"}
                    onClick={() => handleIncreaseQuantity(data.id)}
                  >
                    Add to cart
                  </ButtonCo>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <table>
            <thead>product</thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
