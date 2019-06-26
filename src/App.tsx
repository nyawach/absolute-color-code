import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home"
import About from "./pages/About"
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
