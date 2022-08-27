import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Card from '../../components/card/Card';

type dataProps = {
  id: number;
  name: string;
  details: string;
  status: string;
  launches: Array<string>;
  images: {
    large: string;
  };
};
const Home = () => {
  const [data, setData] = useState<dataProps[]>([]);
  const fetchData = async () => {
    const data = await fetch('https://api.spacexdata.com/v4/launchpads')
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
    >
      {data.map((item, i) => (
        <Card {...item} />
      ))}
    </motion.div>
  );
};

export default Home;
