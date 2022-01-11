import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";

import {  BrowserRouter, 
          Routes,
          Route } from "react-router-dom";

function AppRoutes () {

    return(

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />}/>

                <Route path="/aboutus" element={<AboutUs />}/>

                <Route path="/login" element={<Login />}/>

            </Routes>
        </BrowserRouter>

    );

}


export default AppRoutes;
