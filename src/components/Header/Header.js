import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderBack">
        <div className="logo">
          <h3>Admin Panel</h3>
        </div>
        <div className="button-wrapper">
          <button>Reports</button>
          <button>Create Report</button>
          <button>Log out</button>
        </div>
      </div>

      <div className="HeaderFront">
        <div className="logo">
          <h3>JobBook</h3>
        </div>
        <div className="admin-login">
          <button>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
