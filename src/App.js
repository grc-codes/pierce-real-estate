import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import connect from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ServicesPage from './pages/services/services.component';
import ListingsPage from './pages/listings/listings.component';
import AgentsPage from './pages/agents/agents.component';
import AboutPage from './pages/about/about.component';
import Header from './components/header/header.component';
import { GlobalStyle } from './global.styles';

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/services' component={ServicesPage} />
          <Route path='/listings' component={ListingsPage} />
          <Route exact path='/agents' component={AgentsPage} />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
      </div>
    );
  };
};

export default App;