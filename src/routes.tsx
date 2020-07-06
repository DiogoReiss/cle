import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import orderServices from "./pages/orderServices";
import rentalServices from "./pages/rentalServices";
import transferServices from "./pages/transferServices";
/* <Route component={Contact} path="/contact" exact />
 */

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Contact} path="/contact" exact />
      <Route component={orderServices} path="/orderServices" exact />
      <Route component={rentalServices} path="/rentalServices" exact />
      <Route component={transferServices} path="/transferServices" exact />
    </BrowserRouter>
  );
};

export default Routes;
