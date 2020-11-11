import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import SearchPage from './pages/search/search.component';
import AgentsPage from './pages/agents/agents.component';
import ContactPage from './pages/contact/contact.component';
import Header from './components/header/header.component';
import { GlobalStyle } from './global.styles';
import { selectMobileMenuHidden } from './redux/menu/menu.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleMobileMenuHidden } from './redux/menu/menu.actions';
import Footer from './components/footer/footer.component';
import axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    const options = {
      method: 'GET',
      url: 'https://realtor.p.rapidapi.com/properties/v2/list-for-sale',
      params: {
        city: 'New York City',
        limit: '20',
        offset: '0',
        state_code: 'NY',
        sort: 'relevance'
      },
      headers: {
        'x-rapidapi-key': 'c42992fb68msh32604a469264e77p1a20c1jsnefa8a4066bea',
        'x-rapidapi-host': 'realtor.p.rapidapi.com'
      }
    };

    axios.request(options)
    .then((response) => (console.log(response.data.properties)))
    .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/search' component={SearchPage} />
          <Route exact path='/agents' component={AgentsPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    );
  };
};

const mapStateToProps = createStructuredSelector({
  mobileMenuHidden: selectMobileMenuHidden
});

const mapDispatchToProps = dispatch => ({
  toggleMobileMenuHidden: () => dispatch(toggleMobileMenuHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);