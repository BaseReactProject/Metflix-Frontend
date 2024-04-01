
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SeriesPage from './pages/SeriesPage/seriesPage';
import MoviePage from './pages/MoviePage/moviePage';
import MainPage from './pages/MainPage/mainpage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/moviepage' element={<MoviePage/>}>
          </Route>
          <Route path='/seriespage' element={<SeriesPage/>}>
          </Route>
          <Route path='/mainpage' element={<MainPage/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
