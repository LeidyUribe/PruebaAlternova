import style from "./cardStyles.module.scss";

function CardCo({ ...props }) {
  return (
    <div className={style.card}>
      {props.children.img}
      <div className={style.title}>{props.name}</div>

      <div className={style.actions}>
        <div className={style.actionsI}>{props.children}</div>
      </div>
    </div>
  );
}
export default CardCo;
