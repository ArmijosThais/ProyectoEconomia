import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
      <Header />

    </Router>
  );
}

export default App;

/*
<Switch>
        <Route path="/pagina1" component={Page1} />
        <Route path="/pagina2" component={Page2} />
        <Route path="/" component={HomePage} />
      </Switch>

*/
