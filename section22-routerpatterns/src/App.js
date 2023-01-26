import React, { Component } from "react";
import Food from "./Food";
import Meal from "./Meal";
import Navbar from "./Navbar";
import FoodSearch from "./FoodSearch";
import { Route, Routes } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* THIS VERSION USING COMPONENT WORKS AND IS SIMPLER */}
        {/* BUT IT WILL NOT WORK IF YOU NEED TO PASS ADDITIONAL PROPS*/}
        {/* <Route exact path='/food/:name' scomponent={Food} /> */}

        {/* THIS VERSION USING RENDER IS LESS CLEAN BUT MORE EXPLICIT */}
        {/* AND YOU CAN PASS IN YOUR OWN ADDITIONAL PROPS */}
        <Navbar />
        <Routes>
          <Route
            exact
            path='/food/:name'
            element={routeProps => <Food {...routeProps} />}
          />
          <Route
            exact
            path='/food/:foodName/drink/:drinkName'
            element={<Meal/>}
          />
          {/* <Route
            exact
            path='/'
            render={routeProps => <FoodSearch {...routeProps}/>}
          /> */}
          <Route exact path='/' element={<FoodSearch/>} />
          <Route element={() => <h1>ERROR NOT FOUND!!!</h1>} />
        </Routes>
      </div>
    );
  }
}

export default App;
