import CenterCard from "../CenterCard/CenterCard";
import cards from "../../mock/cards.json";

import "./CenterCards.css";

export default function CenterCards() {
  return (
    <>
      <div>
        <h1 className="lf-h1">Latest Photos</h1>
      </div>
      <div className="lf-li-box">
        {cards.map((element) => (
          <CenterCard
            key={element.id}
            id={element.id}
            title={element.title}
            src={element.src}
            date={element.date}
            views={element.views}
          />
        ))}
      </div>
    </>
  );
}
