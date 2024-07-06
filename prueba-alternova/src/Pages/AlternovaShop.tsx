import { Fragment } from "react/jsx-runtime";
import NavBar from "../Components/NavBar";
import product from "../utils/interfaces";
import data from "../utils/mockApi.json";

// const images = require.context('../../')

const ShopPage = () => {
  return (
    <>
      <NavBar>Alternova Shop</NavBar>
      <Fragment>
        {data.products.map((data: product) => (
          <><div>{data.name}</div>
          <div>{data.type}</div>
          <div>{data.stock}</div>
          <img src={`${data.img}`} key={data.name} width={200} height={150}/>
          </>
        ))}
      </Fragment>
    </>
  );
};

export default ShopPage;