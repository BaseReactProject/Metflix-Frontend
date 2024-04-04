
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SeriesPage from './pages/SeriesPage/seriesPage';
import MoviePage from './pages/MoviePage/moviePage';
import MainPage from './pages/MainPage/mainpage';
import SearchPage from './pages/SearchPage/searchpage';
import LoginPage from './pages/LoginPage/loginPage';

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
          <Route path='/searchpage' element={<SearchPage/>}>
          </Route>
          <Route path='/authpage' element={<LoginPage/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
