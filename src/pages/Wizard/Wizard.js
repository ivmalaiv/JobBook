import "./Wizard.scss";
import Header from "../../components/Header/Header";
import CreateReport from "../../components/CreateReport/CreateReport";
const Wizard = ({ isToken }) => {
  return (
    <div className="Wizard">
      <Header isToken={isToken} />
      <CreateReport />
    </div>
  );
};
export default Wizard;
