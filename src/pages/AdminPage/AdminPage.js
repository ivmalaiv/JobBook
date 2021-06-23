import "./AdminPage.scss";
import Header from "../../components/Header/Header";
import SearchCard from "../../components/SearchCard/SearchCard";

const AdminPage = () => {
  return (
    <div className="AdminPage">
      <Header />
      <div className="ReportsAdministration">
        <input type="text" placeholder="Search"></input>
        <div className="cardsContainer">
          <SearchCard />
        </div>

        <div className="modular">
          <div className="modular-name">
            <h3>Brian Johnson</h3>
            <button>close</button>
          </div>
          <div className="modular-wrapper">
            <div className="modular-left">
              <p>Company:Google</p>
              <p>Interview Date : 01.01.2022</p>
              <p>Phase : Tech</p>
              <p>Status : Passed</p>
            </div>
            <div className="modular-right">
              <p>Notes</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident explicabo cum nobis, quaerat impedit sint illo quam
                nam quis consequuntur. Distinctio possimus dolorum vel. Fuga
                consectetur provident deserunt enim dignissimos?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
