import React, { useContex } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
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
        <CatGrid />
        {/* <Switch>
        <Route path={"/my-cats"} exact component={MyCatsList} />
        <Route path={"/my-cats/:catId"} component={MyCatDetail} />
        <Route path={"/all-cats/:catId"} component={BaseCatDetail} />
      </Switch> */}
        {/* <AllCatsList/> */}
      </Router >
    </FilterProvider>
  );
}

export default App;
