import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Snapbase</h1>
      <div className="links">
        <Link to="/">HomePage</Link>
        <Link to="/Snap">Snap</Link>
      </div>
    </nav>
  );
};

export default Navbar;
