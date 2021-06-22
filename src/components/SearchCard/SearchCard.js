import "./SearchCard.scss";
const SearchCard = () => {
  return (
    <div className="SearchCard">
      <h3>Brian Johnson</h3>
      <p>Company: Google</p>
      <p>Interview Date: 23.09.2020.</p>
      <p>Status: Passed</p>
      <div className="button-container">
        <button>View More</button>
        <button>Delete</button>
      </div>
    </div>

    
  );
};

export default SearchCard;
