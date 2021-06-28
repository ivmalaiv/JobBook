import "./Wizard.scss";
import Header from "../../components/Header/Header";
import CreateReport from "../../components/CreateReport/CreateReport";
const Wizard = ({ setToken, candidates, companies, setReports, reports }) => {
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
