import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/:id" />
      </Routes>
    </div>
  );
}

export default App;
