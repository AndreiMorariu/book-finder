import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
import Preferences from './pages/Preferences';
import Feedback from './pages/Feedback';
import Details from './pages/Details';
import BookDetail from './components/BookDetail/BookDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/preferences' element={<Preferences />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/details' element={<Details />} />
        <Route path='/information' element={<BookDetail />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
