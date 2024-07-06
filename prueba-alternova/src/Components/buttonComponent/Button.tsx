import style from "./buttonStyles.module.scss"

function ButtonCo({ ...props }) {
  return (
    <button id={props.id} className={style.button} type={props.type} onClick={props.onClick}>
        {props.children}
    </button>
  );
}
export default ButtonCo;
