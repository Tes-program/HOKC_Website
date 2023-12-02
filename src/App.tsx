
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Contact from './pages/Contact';
import Department from './pages/Department';

const App: React.FC = () => {
  return (

      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/event" element={<Event />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/department" element={<Department />} />
          </Routes>

        </main>
      </div>

  );
};

export default App;

