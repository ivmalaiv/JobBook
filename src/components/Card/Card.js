import "./Card.scss";

const Card = ({ filteredCandidate }) => {
  return (
    <div className="Card">
      <div className="card-center">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="avatar"
        ></img>
        <h3>{filteredCandidate.name}</h3>
        <p>{filteredCandidate.email}</p>
      </div>
    </div>
  );
};

export default Card;
