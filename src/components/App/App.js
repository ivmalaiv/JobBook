import "./App.scss";
import Candidates from "../../pages/Candidates/Candidates";
import SingleCandidate from "../../pages/SingleCandidate/SingleCandidate";
import Login from "../../pages/Login/Login";
import AdminPage from "../../pages/AdminPage/AdminPage";
import Wizard from "../../pages/Wizard/Wizard";
const App = () => {
  return (
    <div className="App">
      <Candidates></Candidates>
      <SingleCandidate />
      <Login />
      <AdminPage />
      <Wizard />
    </div>
  );
};
export default App;
