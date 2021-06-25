import { useState } from "react";
import "./CreateReport.scss";

const CreateReport = ({ candidates, companies }) => {
  const [phase, setPhase] = useState(1);

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
            <input type="text" placeholder="search candidate"></input>
            <div className="users-container">
              {candidates.map((e) => (
                <div className="single-user">
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
            <button onClick={() => setPhase(2)}>Next</button>
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
              <p>Candidate: John Doe</p>
            </div>
          </div>
          <div className="right">
            <input type="text" placeholder="search company"></input>
            <div className="company-container">
              <ul>
                {companies.map((e) => (
                  <li>{e.name}</li>
                ))}
              </ul>
            </div>
            <div className="btn-container">
              <button onClick={() => setPhase(1)}>Back</button>
              <button onClick={() => setPhase(3)}>Next</button>
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
              <p>Candidate: John Doe</p>
              <p>Company:Google</p>
            </div>
          </div>
          <div className="right">
            <div className="inputs-container">
              <div className="interview-date-container">
                <p>Interview Date:</p>
                <input type="date" />
              </div>

              <div className="interview-phase-container">
                <p>Phase:</p>
                <select>
                  <option value="cv">CV</option>
                  <option value="hr">HR</option>
                  <option value="tech">Tech</option>
                  <option value="final">Final</option>
                </select>
              </div>

              <div className="interview-status-container">
                <p>Status:</p>
                <select>
                  <option value="passed">Passed</option>
                  <option value="declined">Declined</option>
                </select>
              </div>
            </div>

            <div className="notes">
              <p>Notes:</p>
              <textarea></textarea>
            </div>

            <div className="btn-container">
              <button onClick={() => setPhase(2)}>Back</button>
              <button>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CreateReport;
