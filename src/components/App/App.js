import "./App.scss";
import Candidates from "../../pages/Candidates/Candidates";
import SingleCandidate from "../../pages/SingleCandidate/SingleCandidate";
import Login from "../../pages/Login/Login";
import AdminPage from "../../pages/AdminPage/AdminPage";
import Wizard from "../../pages/Wizard/Wizard";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);
  const [candidateId, setCandidateId] = useState("");
  let tokenA = localStorage?.getItem("token");
  const [token, setToken] = useState(tokenA);
  // const [reRender, setReRender] = useState(null);
  console.log(reports);

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
          <Candidates setToken={setToken} candidates={candidates}></Candidates>
        </Route>
        <Route
          path="/report/:id"
          render={(r) => (
            <SingleCandidate
              {...r}
              candidates={candidates}
              companies={companies}
              reports={reports}
              setToken={setToken}
            />
          )}
        ></Route>
        <Route path="/login">
          {token ? <Redirect to="/adminPage" /> : <Login setToken={setToken} />}
        </Route>
        <Route path="/adminPage">
          {token ? (
            <AdminPage
              setToken={setToken}
              reports={reports}
              setReports={setReports}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/wizard">
          {token ? (
            <Wizard
              reports={reports}
              setReports={setReports}
              candidates={candidates}
              companies={companies}
              setToken={setToken}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </div>
  );
};
export default App;
