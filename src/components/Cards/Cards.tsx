import cardData from "@/data/cards.json";
import "./cardsStyle.scss";

interface CardDataType{
  iconClass:string;
  title:string;
  description:string;
}

export const Cards = () => {
  return (
    <div className="card-container">
      {cardData.map((item: CardDataType, i) => {
        return (
          <div className="card-items" key={i}>
            <div className="icon">
              <i className={item.iconClass}></i>
            </div>
            <div className="content">
              <h4 className="title">{item.title}</h4>
              <p className="description">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
