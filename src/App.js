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

function App() {




  return (
    <>
      <Router >
        <Navbar />
        <MainGridLayout />

        <Switch>

          {/* <Route path={"/"} exact component={() => <CatGrid isUsersCats={false} />} />
          <Route path={"/my-cats"} exact component={() => <CatGrid isUsersCats={true} />} />
          <Route path={"/my-cats/:id"} component={CatDetail} />
          <Route path={"/all-cats/:catId"} component={BaseCatDetail} /> */}

          <Route path={"/"} exact component={() => <CatGrid isUsersCats={false} />} />
          <Route path={"/my-cats"} exact component={() => <CatGrid isUsersCats={true} />} />
          {/* catDetail also needs an isUsersCats property */}
          <Route path={"/my-cats/:id"} component={CatDetail} />
          <Route path={"/:id"} component={CatDetail} />
        </Switch>
      </Router >

    </>
  );
}

export default App;
