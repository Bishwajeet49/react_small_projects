import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div className="logoWrapper">
        <div className="inner-border">
          <img
            src="src/img/myPic.jpg"
          />
        </div>
      </div>

      <nav className="navStyle">
        <div className="navitem">
          <NavLink to="/">Home</NavLink>
        </div>

        <div className="navitem">
          <NavLink to="/save">Save</NavLink>
        </div>

        <div className="navitem">
          <NavLink to="/show">Show</NavLink>
        </div>
      </nav>
    </div>
  );
}
