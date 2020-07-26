import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'	
import Home from './pages/Home';
import Movies from './pages/Movies'
import Movie from './pages/Movie'
import Aseries from './pages/Aseries'
import Episode from './pages/Episode'
import Series from './pages/Series'
import Profile from './pages/Profile'
import Login from './pages/Login'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfServices from './pages/TermsOfServices'
import InstallPromote from './components/install_promote';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path = "/" component = {Home} />
        <Route path = "/movies" component = {Movies} />
        <Route path = "/series" component = {Series} />
        <Route path = "/profile" component = {Profile} />
        <Route path = "/login" component = {Login} />
        <Route path = "/privacy-policy" component = {PrivacyPolicy} />
        <Route path = "/terms-of-services" component = {TermsOfServices} />
        <Route path = "/movie/:id/:name" component = {Movie} />
        <Route path = "/aseries/:id/:name" component = {Aseries} />
        <Route path = "/episode/:id" component = {Episode} />
      </Router>
      <InstallPromote />
    </React.Fragment>
  );
}

export default App;
