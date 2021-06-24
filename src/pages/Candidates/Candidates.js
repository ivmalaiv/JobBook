import "./Candidates.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
const Candidates = ({ candidates, isToken }) => {
  return (
    <div className="Candidates">
      <Header isToken={isToken} />
      <input type="text" placeholder="search candidate"></input>
      <div className="Main">
        {candidates.map((e) => (
          <>
            <Link to={`/report/${e.id}`}>
              <Card candidates={e} />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Candidates;
