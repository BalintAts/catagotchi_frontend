import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import SideBar from './components/sideBar/sideBar';
import CatGrid from './components/catGrid';
import { FilterProvider } from './components/searchAttributes/filterContext';

function App() {
  return (
    <FilterProvider>
      <Router>
        <Navbar />
        <SideBar />
        <Switch>
          <Route path={"/"} exact component={() => <CatGrid isUsersCats={false} />} />
          <Route path={"/my-cats"} exact component={() => <CatGrid isUsersCats={true} />} />
          {/* <Route path={"/my-cats/:catId"} component={MyCatDetail} />
          <Route path={"/all-cats/:catId"} component={BaseCatDetail} /> */}
        </Switch>
      </Router >
    </FilterProvider>
  );
}

export default App;
