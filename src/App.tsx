import toastr from "toastr";
import './App.css';
import { OverlayLoader } from './components/mainComponents/OverlayLoader/OverlayLoader';
import RouteDefinitions from './components/mainComponents/Routes/RouteDefinitions';
import axiosInstance from "./core/interceptors/axios-interceptor";
import { useEffect } from "react";

function App() {
  
  return (
    <>

     <OverlayLoader />
			<RouteDefinitions />
    </>
  );
}

export default App;
