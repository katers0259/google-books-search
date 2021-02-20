  
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Jumbotron/>
      <Switch>
        <Route exact path="/" component={SearchBooks} />
        <Route exact path="/saved" component={SaveBooks} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
