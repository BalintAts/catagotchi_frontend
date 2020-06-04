import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import SideBar from './components/sideBar';
import CatGrid from './components/catGrid';
import { FilterProvider } from './components/searchAttributes/filterContext';
import CatDetail from './pages/catDetail';
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core';

function App() {




  return (
    <FilterProvider>
      <Router>
        {/* <CssBaseline /> */}
        <Navbar />
        {/* this Is for moving the siebar down, so it is not behind the navbar. Needs to be fixed */}
        <h1>CATS</h1>
        <SideBar />
        <Switch>
          <Route path={"/"} exact component={() => <CatGrid isUsersCats={false} />} />
          <Route path={"/my-cats"} exact component={() => <CatGrid isUsersCats={true} />} />
          <Route path={"/my-cats/:id"} component={CatDetail} />
          {/* <Route path={"/all-cats/:catId"} component={BaseCatDetail} /> */}
        </Switch>
      </Router >
    </FilterProvider>
  );
}

export default App;
