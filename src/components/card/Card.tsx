import { Link } from 'react-router-dom';
import './card.css';
import { AnimatePresence, motion } from 'framer-motion';
interface dataProps {
  id: number;
  name: string;
  details: string;
  status: string;
  launches: Array<string>;
  images: {
    large: string;
  };
}
const Card = ({ id, name, details, status, launches, images }: dataProps) => {
  return (
    <div className="card" key={id}>
      <img src={images.large} alt="" className="card-img" />
      <b className="card-title">{name}</b>
      <p className="card-detail">{details.slice(0, 100)}</p>
      <span className="card-status">{status}</span>
      <div className="launch-container">
        {launches.length > 0 ? (
          launches.slice(0, 3).map((item, index) => (
            <p className="card-launch" key={index}>
              <Link to={item} className="link">
                Launch {index + 1}
              </Link>
            </p>
          ))
        ) : (
          <p>No Launch Available</p>
        )}
      </div>
    </div>
  );
};

export default Card;
