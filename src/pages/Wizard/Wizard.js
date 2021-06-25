import "./Wizard.scss";
import Header from "../../components/Header/Header";
import CreateReport from "../../components/CreateReport/CreateReport";
const Wizard = ({ setToken, candidates, companies }) => {
  return (
    <div className="Wizard">
      <Header setToken={setToken} />
      <CreateReport candidates={candidates} companies={companies} />
    </div>
  );
};
export default Wizard;
