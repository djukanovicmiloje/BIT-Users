import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import "./App.css";
class App extends Component {
  render() {
    // return <>
    //     <Header/>
    //     <Content/>
    //     <Footer/>
    // </>
    return (
      <div id="user_dashboard">
        <Header />
        <Content />
        <Footer />
        <Route exact path="/about" component={About} />
      </div>
    );
  }
}

export default App;
