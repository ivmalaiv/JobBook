import "./SearchCard.scss";
const SearchCard = ({ report, setModular }) => {
  return (
    <div className="SearchCard">
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
      <div className="button-container">
        <button onClick={() => setModular(report.id)}>View More</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default SearchCard;
