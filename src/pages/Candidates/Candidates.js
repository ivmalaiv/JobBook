import "./Candidates.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
const Candidates = ({ candidates }) => {
  return (
    <div className="Candidates">
      <Header />
      <input type="text" placeholder="search candidate"></input>
      <div className="Main">
        {candidates.map((e) => (
          <Card candidates={e} />
        ))}
      </div>
    </div>
  );
};

export default Candidates;


