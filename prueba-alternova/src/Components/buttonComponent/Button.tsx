import style from "./buttonStyles.module.scss"

function ButtonCo({ ...props }) {
  return (
    <button className={style.btn} type={props.type} onClick={props.onClick}>
        {props.children}
    </button>
  );
}
export default ButtonCo;
