import "./SingleCandidate.scss";
import Header from "../../components/Header/Header";
import { useState } from "react";
import uuid from "react-uuid";

const SingleCandidate = ({ candidates, reports, match, setToken }) => {
  const [modular, setModular] = useState(null);

  const filterReports = reports?.filter(
    (e) => e.candidateId == match.params.id
  );
  const filterCandidate = candidates?.filter((e) => e.id == match.params.id);

  const filterModular = filterReports?.filter((e) => e.id === modular);

  return (
    <div
      className={
        !!filterModular.length ? "SingleCandidate Blur" : "SingleCandidate"
      }
    >
      <Header setToken={setToken} />
      <div className="InterviewReport">
        {!!filterCandidate.length && (
          <div className="person-card">
            <div className="person-card-center">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              ></img>
              <h3>{filterCandidate[0].name}</h3>
              <div>
                <p>
                  <span>date : </span>
                  {filterCandidate[0].birthday.slice(4, 16)}
                </p>
                <p>
                  <span>birthday : </span>
                  {filterCandidate[0].email}
                </p>
                <p>
                  <span>education : </span>
                  {filterCandidate[0].education}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="person-reports">
          <h2>Reports</h2>
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Interview Date</th>
                <th colSpan="2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filterReports.map((e) => {
                return (
                  <tr key={uuid()}>
                    <td>{e.companyName}</td>
                    <td>{e.interviewDate.slice(4, 16)}</td>
                    <td>{e.status}</td>
                    <td>
                      <button
                        onClick={() => {
                          setModular(e.id);
                        }}
                      >
                        More
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {!!filterModular.length && (
          <div className="modular">
            <div className="modular-name">
              <h3>{filterModular[0].candidateName}</h3>
              <button
                onClick={() => {
                  setModular(null);
                }}
              >
                close
              </button>
            </div>
            <hr></hr>
            <div className="modular-wrapper">
              <div className="modular-left">
                <p className="label-modular">Company</p>
                <p>{filterModular[0].companyName}</p>
                <p className="label-modular">Interview Date</p>
                <p>{filterModular[0].interviewDate.slice(4, 16)}</p>
                <p className="label-modular">Phase</p>
                <p>{filterModular[0].phase}</p>
                <p className="label-modular">Status</p>
                <p>{filterModular[0].status}</p>
              </div>
              <div className="modular-right">
                <p className="label-modular">Notes</p>
                <p>{filterModular[0].note}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SingleCandidate;
