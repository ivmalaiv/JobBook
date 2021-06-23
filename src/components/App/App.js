import "./App.scss";
import Candidates from "../../pages/Candidates/Candidates";
import SingleCandidate from "../../pages/SingleCandidate/SingleCandidate";
import Login from "../../pages/Login/Login";
import AdminPage from "../../pages/AdminPage/AdminPage";
import Wizard from "../../pages/Wizard/Wizard";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);
  const [candidateId, setCandidateId] = useState("");

  

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Candidates
           
            candidates={candidates}
          ></Candidates>
        </Route>
        <Route
          path="/report/:id"
          render={(r) => (
            <SingleCandidate
              {...r}
              candidates={candidates}
              companies={companies}
              reports={reports}
            />
          )}
        ></Route>
        <Route path="/2">
          <Login />
        </Route>
        <Route path="/3">
          <AdminPage />
        </Route>
        <Route path="/4">
          <Wizard />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
