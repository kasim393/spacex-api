import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './detail.css';
type dataProps = {
  name: string;
  details: string;
  date_local: string;
  links: {
    patch: {
      small: string;
    };
    flickr: {
      original: string;
    };
  };
};
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState<dataProps>();
  const fetchData = () => {
    const data = fetch(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      className="detail-container"
    >
      <div className="back-btn">
        <Link to="/" className="link">
          {' '}
          Back
        </Link>
      </div>
      {data ? (
        <div className="detail-wrapper">
          <div className="detail-title">
            <h1>{data.name}</h1>
            <img src={data.links.patch.small} alt="" />
          </div>
          <p className="detail-date">{data.date_local.slice(0, 10)}</p>
          <p className="detail-desc">{data.details}</p>
        </div>
      ) : (
        <span className="rotate-center"></span>
      )}
    </motion.div>
  );
};

export default Detail;
