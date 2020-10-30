import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ListingsPage from './pages/listings/listings.component';
import AgentsPage from './pages/agents/agents.component';
import AboutPage from './pages/about/about.component';
import Header from './components/header/header.component';
import { GlobalStyle } from './global.styles';
import { selectMobileMenuHidden } from './redux/menu/menu.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleMobileMenuHidden } from './redux/menu/menu.actions';
import Footer from './components/footer/footer.component';

class App extends React.Component {

  componentDidMount() {
    const { mobileMenuHidden, toggleMobileMenuHidden } = this.props;
    if(mobileMenuHidden) {
      return;
    } else {
      toggleMobileMenuHidden();
    };
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/listings' component={ListingsPage} />
          <Route exact path='/agents' component={AgentsPage} />
          <Route exact path='/about' component={AboutPage} />
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