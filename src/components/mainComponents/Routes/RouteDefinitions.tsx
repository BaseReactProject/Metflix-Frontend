
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../../pages/LoginPage/loginPage";
import MainPage from "../../../pages/MainPage/mainpage";
import MoviePage from "../../../pages/MoviePage/moviePage";
import SearchPage from "../../../pages/SearchPage/searchpage";
import SeriesPage from "../../../pages/SeriesPage/seriesPage";
import NotFound from "../../../pages/NotFoundPage/not-found";
import UpdatePasswordPage from "../../../pages/UpdatePasswordPage/updatepasswordpage";
import ProfileLoginPage from "../../../pages/LoginPage/profileLoginPage";
import authService from "../../../core/services/auth-service";
import tokenService from "../../../core/services/token-service";
import MainLayout from "../../../pages/MainLayout";
import { useEffect } from "react";
import AccountPage from "../../../pages/AccountPage/accountPage";


type Props = {};

const RouteDefinitions = (props: Props) => {
  useEffect(() => {
    if (!tokenService.hasToken()) {
      window.location.href = "/authpage";
    } else if (!tokenService.hasMainToken()) {
      window.location.href = "/profileloginpage";
      console.log("maintokenyok");
      
    }


  }, [])
  return (
    <>
      {/* {tokenService.hasToken() ? (
        <Navigate to="/profileloginpage" replace />
      ) : (
        <Navigate to="/authpage" replace />
      )} */}
      <Routes>


        <Route path='/profileloginpage' element={<ProfileLoginPage />} />
        <Route path='/accountpage' element={<AccountPage />} />
        <Route path='/mainpage' element={<MainPage />} />

        <Route path='/moviepage' element={<MoviePage />}>
        </Route>
        <Route path='/seriespage' element={<SeriesPage />}>
        </Route>
        <Route path='/searchpage' element={<SearchPage />} />




        <Route path='/authpage' element={<LoginPage />} />
        <Route path='/updatepasswordpage/:id' element={<UpdatePasswordPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes></>
  );
};

export default RouteDefinitions;