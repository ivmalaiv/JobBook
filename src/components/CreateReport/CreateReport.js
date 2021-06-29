import { useState } from "react";
import "./CreateReport.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const CreateReport = ({ candidates, companies, setReports, reports }) => {
  const [phase, setPhase] = useState(1);
  const [user, setUser] = useState({
    interviewDate: `${new Date()}`,
    phase: "",
    status: "",
    note: "",
  });
  const [date, setDate] = useState(new Date());
  const [searchCandidates, setSearchCandidates] = useState("");
  const [searchCompany, setSearchCompany] = useState("");
  const filteredCandidates = candidates?.filter((e) =>
    e.name.toLowerCase().includes(searchCandidates.toLowerCase())
  );
  const filteredCompanies = companies?.filter((e) =>
    e.name.toLowerCase().includes(searchCompany.toLowerCase())
  );

  const submitReport = () => {
    fetch("http://localhost:3333/api/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => setReports([...reports, data]));
  };
  return (
    <div className="CreateReport">
      {phase == 1 && (
        <div className="wizard-candidates" id="select-candidate">
          <div className="left">
            <div className="select-wrapper">
              <p className="active">
                {" "}
                <span>1.</span>Select Candidate
              </p>
              <p>
                <span>2.</span>Select Company
              </p>
              <p>
                <span>3.</span>Fill Report Details
              </p>
            </div>
            <div className="selected"></div>
          </div>
          <div className="right">
            <input
              type="text"
              placeholder="search candidate"
              onChange={(e) => {
                setSearchCandidates(e.target.value);
              }}
            ></input>
            <div className="users-container">
              {filteredCandidates.map((e) => (
                <div
                  className={`single-user ${
                    user.candidateId === e.id ? "selected-report-property" : ""
                  }`}
                  onClick={() => {
                    setUser({
                      ...user,
                      candidateId: e.id,
                      candidateName: e.name,
                    });
                  }}
                >
                  <div className="single-user-wrapper">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt="avatar"
                    />
                    <h5>{e.name}</h5>
                    <p>{e.email}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => user.candidateName && setPhase(2)}>
              Next
            </button>
          </div>
        </div>
      )}

      {phase == 2 && (
        <div className="wizard-candidates" id="select-company">
          <div className="left">
            <div className="select-wrapper">
              <p>
                {" "}
                <span>1.</span>Select Candidate
              </p>
              <p className="active">
                <span>2.</span>Select Company
              </p>
              <p>
                <span>3.</span>Fill Report Details
              </p>
            </div>

            <hr></hr>
            <div className="selected">
              <p>Candidate: {user.candidateName}</p>
            </div>
          </div>
          <div className="right">
            <input
              type="text"
              placeholder="search company"
              onChange={(e) => {
                setSearchCompany(e.target.value);
              }}
            ></input>
            <div className="company-container">
              <ul>
                {filteredCompanies.map((e) => (
                  <li
                    className={`${
                      user.companyId === e.id ? "selected-report-property" : ""
                    }`}
                    onClick={() =>
                      setUser({ ...user, companyId: e.id, companyName: e.name })
                    }
                  >
                    {e.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn-container">
              <button onClick={() => setPhase(1)}>Back</button>
              <button onClick={() => user.companyName && setPhase(3)}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {phase == 3 && (
        <div className="wizard-candidates" id="fill-report ">
          <div className="left">
            <div className="select-wrapper">
              <p>
                {" "}
                <span>1.</span>Select Candidate
              </p>
              <p>
                <span>2.</span>Select Company
              </p>
              <p className="active">
                <span>3.</span>Fill Report Details
              </p>
            </div>

            <hr></hr>
            <div className="selected">
              <p>Candidate: {user.candidateName}</p>
              <p>Company: {user.companyName}</p>
            </div>
          </div>
          <div className="right">
            <div className="inputs-container">
              <div className="interview-date-container">
                <p>Interview Date:</p>
                <DatePicker
                  selected={date}
                  maxDate={Date.now()}
                  onChange={(date) => {
                    setDate(date);
                    setUser({
                      ...user,
                      interviewDate: `${date}`,
                    });
                  }}
                />
              </div>

              <div className="interview-phase-container">
                <p>Phase:</p>
                <select
                  onClick={(e) => setUser({ ...user, phase: e.target.value })}
                >
                  <option value="cv">CV</option>
                  <option value="hr">HR</option>
                  <option value="tech">Tech</option>
                  <option value="final">Final</option>
                </select>
              </div>

              <div className="interview-status-container">
                <p>Status:</p>
                <select
                  onClick={(e) => setUser({ ...user, status: e.target.value })}
                >
                  <option value="passed">Passed</option>
                  <option value="declined">Declined</option>
                </select>
              </div>
            </div>

            <div className="notes">
              <p>Notes:</p>
              <textarea
                onChange={(e) => setUser({ ...user, note: e.target.value })}
              ></textarea>
            </div>

            <div className="btn-container">
              <button onClick={() => setPhase(2)}>Back</button>
              <Link to="/adminPage">
                <button onClick={submitReport}>Submit</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CreateReport;
