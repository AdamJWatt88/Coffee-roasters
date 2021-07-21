import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Home/Home";
import About from "./AboutUs/About";
import CreatePlan from "./CreatePlan/CreatePlan";
import Footer from "./Layout/Footer";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/about-us"} component={About} />
        <Route exact path={"/create-plan"} component={CreatePlan} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
