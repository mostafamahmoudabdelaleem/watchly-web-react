import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'	
//import Home from './pages/Home';
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
import Landing from './pages/landing'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path = "/" component = {Landing} />

        <Route exact path = "/movies" component = {Movies} />
        <Route path = "/movies/page/:page" component = {Movies} />
        <Route path = "/movie/:name" component = {Movie} />

        <Route exact path = "/series" component = {Series} />
        <Route path = "/series/page/:page" component = {Series} />
        <Route exact path = "/aseries/:id/:name" component = {Aseries} />
        <Route path = "/aseries/:id/:name/page/:page" component = {Aseries} />
        <Route path = "/episode/:name" component = {Episode} />

        <Route path = "/profile" component = {Profile} />
        <Route path = "/login" component = {Login} />
        
        <Route path = "/privacy-policy" component = {PrivacyPolicy} />
        <Route path = "/terms-of-services" component = {TermsOfServices} />
        
      </Router>
      <InstallPromote />
    </React.Fragment>
  );
}

export default App;
