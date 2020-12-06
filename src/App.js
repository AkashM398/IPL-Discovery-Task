import React from 'react';
import './css/App.css';
import Header from "./components/header";
import MainContent from "./components/viewContent1";
import ViewContent2 from "./components/viewContent2"
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
          <Header />
          <Switch>
          <Route exact path="/" component={MainContent}/>
          <Route path="/view1" component={MainContent}/>
          <Route path="/view2" component={ViewContent2}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

