import "./navStyles.scss"

function Card({ ...props }) {
  return (
    <div className="card">
      {props.children}
      <div className="">

      </div>
      <div className="">

      </div>
    </div>
  );
}
export default Card;
