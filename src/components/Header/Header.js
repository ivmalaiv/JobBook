import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ isToken }) => {
  const logOut = () => {
    localStorage.removeItem("token");
    isToken(false);
  };

  return (
    <div className="Header">
      {localStorage.getItem("token") ? (
        <div className="HeaderBack">
          <div className="logo">
            <h3>Admin Panel</h3>
          </div>
          <div className="button-wrapper">
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/adminPage">
              <button>Reports</button>
            </Link>
            <Link to="/wizard">
              <button>Create Report</button>
            </Link>
            <button onClick={logOut}>Log out</button>
          </div>
        </div>
      ) : (
        <div className="HeaderFront">
          <div className="logo">
            <Link to="/">
              <h3>JobBook</h3>
            </Link>
          </div>
          <div className="admin-login">
            <Link to="/login">
              <button>Log in</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
