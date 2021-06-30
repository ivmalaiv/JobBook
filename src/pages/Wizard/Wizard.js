import "./Wizard.scss";
import Header from "../../components/Header/Header";
import CreateReport from "../../components/CreateReport/CreateReport";
import { useEffect, useState } from "react";

const Wizard = ({ setToken, candidates, setReports, reports }) => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  return (
    <div className="Wizard">
      <Header setToken={setToken} />
      <CreateReport
        reports={reports}
        setReports={setReports}
        candidates={candidates}
        companies={companies}
      />
    </div>
  );
};
export default Wizard;
