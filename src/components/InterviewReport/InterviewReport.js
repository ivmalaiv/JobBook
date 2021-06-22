import "./InterviewReport.scss";
const InterviewReport = () => {
  return (
    <div className="InterviewReport">
      <div className="person-card">
        <img src="https://assets.webiconspng.com/uploads/2016/11/avatar_business_costume_male_man_office_work_icon_628289.png"></img>
        <h3>Brian Johnson</h3>
        <p>Date of birth: 01.01.1991</p>
        <p>Email: b.johnson@gmail.com</p>
        <p>Education: BIT</p>
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
              <h3>Brian Johnson</h3>
              <button>close</button>
          </div>
          <div className="modular-wrapper">
              <div className="modular-left">
                  <p>Company:Google</p>
                  <p>Interview Date : 01.01.2022</p>
                  <p>Phase : Tech</p>
                  <p>Status : Passed</p>
              </div>
              <div className="modular-right">
                  <p>Notes</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo cum nobis, quaerat impedit sint illo quam nam quis consequuntur. Distinctio possimus dolorum vel. Fuga consectetur provident deserunt enim dignissimos?</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default InterviewReport
