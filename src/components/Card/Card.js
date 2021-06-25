import "./Card.scss";
import { Link } from "react-router-dom";
const Card = ({ filteredCandidates }) => {
  return (
    <div className="Card">
      <div className="card-center">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="avatar"
        ></img>
        <h3>{filteredCandidates.name}</h3>
        <p>{filteredCandidates.email}</p>
      </div>
    </div>
  );
};

export default Card;
