import { Navigate, Outlet } from "react-router-dom";
import tokenService from "../core/services/token-service";
import { useEffect } from "react";

const MainLayout = ({ showLayout = true }) => {



  return (

      <>
        {tokenService.hasMainToken()?(
            <Outlet />
        ): (
          <>
            <Navigate to="/authpage" />
          </>
        )}
      </>
  );
};

export default MainLayout;