import "./SingleCandidate.scss";
import Header from "../../components/Header/Header";
import { useState } from "react";
const SingleCandidate = ({ candidates, companies, reports, match }) => {
  

  const filterCandidate = candidates?.filter((e) => e.id == match.params.id);
  console.log(filterCandidate);
  const filterReports = reports?.filter(
    (e) => e.candidateId == match.params.id
  );
  console.log(filterReports);

  return (
    <div className="SingleCandidate">
      <Header />
      <div className="InterviewReport">
        <div className="person-card">
          <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="person-reports">
          <h2>Reports</h2>
          <table>
            <tr>
              <th>Company</th>
              <th>Interview Date</th>
              <th>Status</th>
            </tr>
          </table>
        </div>
        <div className="modular">
          <div className="modular-name">
            <h3></h3>
            <button>close</button>
          </div>
          <div className="modular-wrapper">
            <div className="modular-left">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <div className="modular-right">
              <p>Notes</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleCandidate;
