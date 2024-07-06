// import "./navStyles.scss"

function NavBar({...props }) {
  return (    
    <nav className="navStyle">
      <h1>
        {props.children}
      </h1>
    </nav>
  );
}
export default NavBar