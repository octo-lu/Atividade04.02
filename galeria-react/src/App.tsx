import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ImageDetails from './pages/ImageDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/image/:id" element={<ImageDetails />} />
    </Routes>
  );
}

export default App;
