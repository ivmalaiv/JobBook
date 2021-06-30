import "./Candidates.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { useState } from "react";
import uuid from "react-uuid";

const Candidates = ({ candidates, setToken }) => {
  const [search, setSearch] = useState("");

  const filteredCandidates = candidates?.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Candidates">
      <Header setToken={setToken} />
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="search candidate"
      ></input>
      <div className="Main">
        {filteredCandidates.map((e) => (
          <>
            <Link to={`/report/${e.id}`}>
              <Card key={uuid()} filteredCandidate={e} />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Candidates;
