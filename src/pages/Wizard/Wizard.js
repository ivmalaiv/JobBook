import "./Wizard.scss";
import Header from "../../components/Header/Header";
import CreateReport from "../../components/CreateReport/CreateReport";
const Wizard = ({ setToken }) => {
  return (
    <div className="Wizard">
      <Header setToken={setToken} />
      <CreateReport />
    </div>
  );
};
export default Wizard;
