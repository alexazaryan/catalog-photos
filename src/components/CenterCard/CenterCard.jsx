// CenterCard.js
import { useNavigate } from "react-router-dom";
import "./CenterCard.css";

export default function CenterCard({ id, title, src, date, views }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cards/${id}`); // Переход на страницу карточки по её ID
  };

  return (
    <div>
      <div className="lf-bloc" onClick={handleClick}>
        <div className="lf-li" style={{ backgroundImage: `url(${src})` }}>
          <span className="lf-li-text">{title}</span>
        </div>
        <div className="lf-info">
          <p className="card-date">{date}</p>
          <p className="card-views">{views}</p>
        </div>
      </div>
    </div>
  );
}
