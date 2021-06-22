import "./Main.scss";
import Search from "../Search/Search";
import Card from "../Card/Card";
const Main = () => {
  return (
    <div className="Main">
      <Search></Search>
      <div className="cards-container">
        <Card></Card>
      </div>
    </div>
  );
};
export default Main;
