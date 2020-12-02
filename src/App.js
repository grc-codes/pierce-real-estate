import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import SearchPage from './pages/search/search.component';
import ContactPage from './pages/contact/contact.component';
import Header from './components/header/header.component';
import { GlobalStyle } from './global.styles';
import { selectMobileMenuHidden } from './redux/menu/menu.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleMobileMenuHidden } from './redux/menu/menu.actions';
import Footer from './components/footer/footer.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/search' component={SearchPage} />
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