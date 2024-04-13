import toastr from "toastr";
import './App.css';
import { OverlayLoader } from './components/mainComponents/OverlayLoader/OverlayLoader';
import RouteDefinitions from './components/mainComponents/Routes/RouteDefinitions';
import axiosInstance from "./core/interceptors/axios-interceptor";
import { useEffect } from "react";
import tokenService from "./core/services/token-service";

function App() {
  useEffect(() => {
    if (!tokenService.hasToken()) {
      window.location.href="/authpage";
    }else if (!tokenService.hasMainToken()) {
      window.location.href="/profileloginpage";
      console.log("maintoken yok");
      
    }
    
  
  })
  return (
    <>

     <OverlayLoader />
			<RouteDefinitions />
    </>
  );
}

export default App;
