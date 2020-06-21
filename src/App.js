import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import CatDetail from './pages/catDetail';
import MainGridLayout from './components/mainGridLayout';
import { IsUsersCatsProvider } from './contexts/isUsersCats_context';

function App() {

  return (

    <IsUsersCatsProvider>
      <Router >
        <Navbar />
        <Switch>
          <Route path={"/"} exact component={() => <MainGridLayout isUsersCats={false} />} />
          <Route path={"/my-cats"} exact component={() => <MainGridLayout isUsersCats={true} />} />
          <Route path={"/my-cats/:id"} component={CatDetail} />
          <Route path={"/:id"} component={CatDetail} />

        </Switch>
      </Router >
    </IsUsersCatsProvider>
  );
}

export default App;
