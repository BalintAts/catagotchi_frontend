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
import MainGridLayout from './components/mainGridLayout';
import { IsUsersCatsContext } from './contexts/isUsersCats_context';
import { IsUsersCatsProvider } from './contexts/isUsersCats_context';

function App() {

  return (

    <IsUsersCatsProvider>
      <Router >
        <Navbar />
        <Switch>
          <Route path={"/"} exact component={() => <MainGridLayout isUsersCats={false} />} />
          <Route path={"/my-cats"} exact component={() => <MainGridLayout isUsersCats={true} />} />
          <Route path={"/:id"} component={() => <CatDetail isUsersCats={false} />} />
          <Route path={"my-cats/:id"} component={() => <CatDetail isUsersCats={true} />} />

        </Switch>
      </Router >
    </IsUsersCatsProvider>
  );
}

export default App;
