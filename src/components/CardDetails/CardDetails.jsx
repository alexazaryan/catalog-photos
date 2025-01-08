import { useParams } from "react-router-dom";
import cards from "../../mock/cards.json"; // Допустим, что данные о карточках у вас есть в этом файле

import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams(); // Извлекаем ID карточки из URL
  const card = cards.find((card) => card.id === parseInt(id)); // приведение id к числу

  if (!card) {
    return <div>Карточка не найдена</div>;
  }

  return (
    <div className="card-details">
      <div className="card-image-container">
        <div
          style={{ backgroundImage: `url(${card.src})` }}
          className="card-image"
        >
          Нет фото
        </div>
      </div>
      <div className="card-description">
        <h1>{card.title}</h1>
        <p>{card.date}</p>
        <p>{card.views} views</p>
        <p>{card.description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
