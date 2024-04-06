import toastr from "toastr";
import './App.css';
import { OverlayLoader } from './components/mainComponents/OverlayLoader/OverlayLoader';
import RouteDefinitions from './components/mainComponents/Routes/RouteDefinitions';
import axiosInstance from "./core/interceptors/axios-interceptor";
import { useEffect } from "react";

function App() {
 
  useEffect(() => {
    axiosInstance.get("Brands?PageIndex=0&PageSize=10").then((r)=>console.log(r)).catch((r)=>console.log(r));
  
    
  }, [])
  
  return (
    <>

     <OverlayLoader />
			<RouteDefinitions />
    </>
  );
}

export default App;
