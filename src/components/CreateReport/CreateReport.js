import "./CreateReport.scss";

const CreateReport = () => {
  return (
    <div className="CreateReport">
      <div id="select-candidate">
        <div className="left">
          <p className="active"> 1.Select Candidate</p>
          <p>2.Select Company</p>
          <p>3.Fill Report Details</p>
        </div>
        <div className="right">
          <input type="text" placeholder="search candidate"></input>
          <div className="users-container">
            <div className="single-user">
              <img
                src="https://assets.webiconspng.com/uploads/2016/11/avatar_business_costume_male_man_office_work_icon_628289.png"
                alt="avatar"
              />
              <h5>Johan Doe</h5>
              <p>johndoe@gmail.com</p>
            </div>
          </div>
          <button>Next</button>
        </div>
      </div>

      <div id="select-company">
        <div className="left">
          <div className="select-wrapper">
            <p> 1.Select Candidate</p>
            <p className="active">2.Select Company</p>
            <p>3.Fill Report Details</p>
          </div>
          <div className="selected">
            <p>Candidate: John Doe</p>
          </div>
        </div>
        <div className="right">
          <input type="text" placeholder="search company"></input>
          <div className="company-container">
            <select>
              <option value="google">Google</option>
              <option value="google">Google</option>
              <option value="google">Google</option>
            </select>
          </div>
          <div className="btn-container">
            <button>Back</button>
            <button>Next</button>
          </div>
        </div>
      </div>

      <div id="fill-report ">
        <div className="left">
          <div className="select-wrapper">
            <p> 1.Select Candidate</p>
            <p>2.Select Company</p>
            <p className="active">3.Fill Report Details</p>
          </div>
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
            <button>Back</button>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateReport;
