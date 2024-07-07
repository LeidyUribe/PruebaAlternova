import React from "react";
import uuid from "react-uuid";
import { Fragment } from "react/jsx-runtime";
import style from "./shopPage.module.scss";
import NavBar from "../Components/navBarComponent/NavBar";
import ButtonCo from "../Components/buttonComponent/Button";
import { product } from "../utils/Interfaces/interfaces";
import data from "../utils/mockApi.json";

const ShopPage = () => {
  const [alert, setAlert] = React.useState(false);
  const [counter, setCounters] = React.useState([{}]);
  const newUuid = parseInt(uuid());

  const incrementCounter = (key: number) => {
    // debugger
    setCounters((prevCounters) => ({
      ...prevCounters,
      [key]: prevCounters[key],
    }));
  };

  //   const handleQuantityChange = (id: number,  stock: number) => {
  //     stock > 1 ? setAlert(true): setAlert(false)
  //     // setCounters(
  //     //   data.products.map((product) =>
  //     //     product.id === id ? { ...product, stock: stock } : product
  //     //   )
  //     // );
  //   };

  return (
    <>
      <NavBar>Alternova Shop</NavBar>
      {alert && <span>No hay cantidad suficiente para el pedido</span>}
      {data.products.map((data: product) => (
        <div key={data.id} className={style.card}>
          <div id="name">{data.name}</div>
          <img
            src={`${data.img}`}
            key={data.name}
            id="img"
            width={200}
            height={150}
          />
          <div className={style.actions}>
            <div>{0}</div>
            <div>
              <ButtonCo
                key={newUuid}
                type={"button"}
                //   onClick={incrementCounter(newUuid)}
              >
                Add to cart
              </ButtonCo>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShopPage;
