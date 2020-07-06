import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
//import Contact from "./pages/contact";
//import orderServices from "./pages/orderServices";
//import rentalServices from "./pages/rentalServices";
//import transferServices from "./pages/transferServices";
/* <Route component={Contact} path="/contact" exact />
      <Route component={orderServices} path="/order" exact />
      <Route component={rentalServices} path="/rentacar" exact />
      <Route component={transferServices} path="/transfer" exact />
    */

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
