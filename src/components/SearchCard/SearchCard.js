import "./SearchCard.scss";
const SearchCard = ({ report, setModular, setReports, reports }) => {
  const deleteReport = () => {
    fetch(`http://localhost:3333/api/reports/${report.id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then(() => setReports([...reports.filter((e) => e.id !== report.id)]));
  };

  return (
    <div className="SearchCard">
      <div className="search-card-left">
        <div>
          <h3>{report.candidateName}</h3>
          <p className="label-report">Name</p>
        </div>
        <div>
          <p>{report.companyName}</p>
          <p className="label-report">Company</p>
        </div>
        <div>
          <p>{report.interviewDate.slice(4, 16)}</p>
          <p className="label-report">Date</p>
        </div>
        <div>
          <p>{report.status}</p>
          <p className="label-report">Status</p>
        </div>
      </div>

      <div className="button-container">
        <button onClick={() => setModular(report.id)}>View More</button>
        <button onClick={deleteReport}>Delete</button>
      </div>
    </div>
  );
};

export default SearchCard;
