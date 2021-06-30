import "./AdminPage.scss";
import Header from "../../components/Header/Header";
import SearchCard from "../../components/SearchCard/SearchCard";
import { useState } from "react";
import uuid from "react-uuid";

const AdminPage = ({ setToken, reports, setReports }) => {
  const [modular, setModular] = useState("");
  const [search, setSearch] = useState("");
  
  const filteredReports = reports.filter(
    (e) =>
      e.candidateName.toLowerCase().includes(search.toLowerCase()) ||
      e.companyName.toLowerCase().includes(search.toLowerCase())
  );

  const filteredModular = reports?.filter((e) => e.id === modular);
  
  return (
    <div className={!!filteredModular.length ? "AdminPage Blur" : "AdminPage"}>
      <Header setToken={setToken} />
      <div className="ReportsAdministration">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
        ></input>
        <div className="cardsContainer">
          {filteredReports.map((e) => (
            <SearchCard
              key={uuid()}
              reports={reports}
              setReports={setReports}
              setModular={setModular}
              report={e}
            />
          ))}
        </div>

        {!!filteredModular.length && (
          <div className="modular">
            <div className="modular-name">
              <h3>{filteredModular[0].candidateName}</h3>
              <button onClick={() => setModular(null)}>close</button>
            </div>
            <hr></hr>
            <div className="modular-wrapper">
              <div className="modular-left">
                <p className="label-modular">Company</p>
                <p>{filteredModular[0].companyName}</p>
                <p className="label-modular">Interview Date</p>
                <p>{filteredModular[0].interviewDate.slice(4, 16)}</p>
                <p className="label-modular">Phase</p>
                <p>{filteredModular[0].phase}</p>
                <p className="label-modular">Status</p>
                <p>{filteredModular[0].status}</p>
              </div>
              <div className="modular-right">
                <p className="label-modular">Notes</p>
                <p>{filteredModular[0].note}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminPage;
