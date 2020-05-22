import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import SideSection from './components/sideBar/sideSection/sideSection';

function App() {
  return (
    <Router>
      <Navbar />
      <SideSection />
      {/* <Switch>
        <Route path={"/my-cats"} exact component={MyCatsList} />
        <Route path={"/my-cats/:catId"} component={MyCatDetail} />
        <Route path={"/all-cats/:catId"} component={BaseCatDetail} />
      </Switch> */}
      {/* <AllCatsList/> */}
    </Router >
  );
}

export default App;
