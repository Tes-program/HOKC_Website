// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Contactpage from './pages/Contact';
import Department from './pages/Department';
import isPwa from './constant/isaPwa';

const App: React.FC = () => {
  const isPwaMode = isPwa();
  return (
    <Routes>
      {isPwaMode ? (
        <Route path="/" element={<About />} />
      ) : (
        <Route path="/" element={<Home />} />
      )}
      <Route path="/about" element={<About />} />
      <Route path="/event" element={<Event />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/department" element={<Department />} />
    </Routes>
  );
};

export default App;
