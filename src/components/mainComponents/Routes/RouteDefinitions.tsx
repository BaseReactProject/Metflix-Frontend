import React from "react";
import {Route, Routes} from "react-router-dom";
import LoginPage from "../../../pages/LoginPage/loginPage";
import MainPage from "../../../pages/MainPage/mainpage";
import MoviePage from "../../../pages/MoviePage/moviePage";
import SearchPage from "../../../pages/SearchPage/searchpage";
import SeriesPage from "../../../pages/SeriesPage/seriesPage";
import NotFound from "../../../pages/NotFoundPage/not-found";
import UpdatePasswordPage from "../../../pages/UpdatePasswordPage/updatepasswordpage";


type Props = {};

const RouteDefinitions = (props: Props) => {
	return (
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
          <Route path='/updatepasswordpage/:id' element={<UpdatePasswordPage/>}>
          </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
	);
};

export default RouteDefinitions;