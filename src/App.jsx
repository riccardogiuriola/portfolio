/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { withRouter, BrowserRouter, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

/**
 * Internal Dependencies
 */
import './components/animated-route';
import reducers from './reducers';
import Routes from './Routes';
import PageLogo from './components/page-logo';
import PageNavbar from './components/page-navbar';
import PageYaybar from './components/page-yaybar';
import Particles from './components/particles';
import ThemeMode from './components/theme-mode';

const createStoreWithMiddleware = applyMiddleware()(createStore);

/**
 * Component PageWrap
 */
class PageWrap extends Component {
  constructor(props) {
    super(props);
  }

  setTheme(theme = undefined) {
    const {
      settings
    } = this.props;
    let htmlTag = document.getElementsByTagName("html")[0];
    if (theme != undefined) {
      htmlTag.setAttribute("data-theme", theme);
    } else {
      htmlTag.setAttribute("data-theme", settings.theme);
    }
  }

  componentDidMount() {
    this.setTheme();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.settings.theme !== this.props.settings.theme) {
      this.setTheme(this.props.settings.theme);
    }
  }

  render() {
    const {
      location,
    } = this.props;

    return (
      <>
        <Particles />
        <ThemeMode />
        <Route>
          <Route component={PageLogo} />
          <Route component={PageNavbar} />
          <Route component={PageYaybar} />
        </Route>
        <Routes location={location} />
      </>
    );
  }
}

const PageWrapWithState = connect(({ settings }) => (
  {
    settings
  }
))(withRouter(PageWrap));

/**
 * Component App
 */
class App extends Component {
  constructor(props) {
    super(props);

    // create redux store.
    this.store = createStoreWithMiddleware(reducers);
  }

  render() {
    return (
      <Provider store={this.store}>
        <BrowserRouter >
          <PageWrapWithState />
        </BrowserRouter >
      </Provider>
    );
  }
}

export default App;
