import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './Main';
import Registration from './components/registration';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route exact path="/registration/" component={Registration} />
      </div>
    </Router>
  );
}
export default App;
