import "./SingleCandidate.scss";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
const SingleCandidate = ({ candidates, companies, reports, match }) => {
  const [candidate, setCandidate] = useState(null);

  const filterReports = reports?.filter(
    (e) => e.candidateId == match.params.id
  );

  useEffect(() => {
      const filtered = candidates?.filter((e) => e.id == match.params.id);
      setCandidate(filtered[0])
  }, [candidates])

  return (
    <div className="SingleCandidate">
      <Header />
      <div className="InterviewReport">
        <div className="person-card">
          <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
          <h3>{candidate?.name}</h3>
          <p>{filterCandidate.birthday}</p>
          <p>{filterCandidate.email}</p>
          <p>{filterCandidate.education}</p>
        </div>
        <div className="person-reports">
          <h2>Reports</h2>
          <table>
            <tr>
              <th>Company</th>
              <th>Interview Date</th>
              <th>Status</th>
            </tr>
            {filterReports.map((e) => {
              return (
                <tr>
                  <td>{e.companyName}</td>
                  <td>{e.interviewDate}</td>
                  <td>{e.status}</td>
                  <td
                  // onClick={() => {
                  //   setModular(e.id);
                  // }}
                  >
                    More
                  </td>
                </tr>
              );
            })}
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
