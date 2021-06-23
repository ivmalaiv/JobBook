import "./Candidates.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
const Candidates = () => {
  return (
    <div className="Candidates">
      <Header />
      <div className="Main">
        <input type="text" placeholder="search candidate"></input>
        <Card />
      </div>
    </div>
  );
};

export default Candidates;
