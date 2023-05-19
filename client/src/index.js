import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page from './Page';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouterMatch,
  useParams
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter >
  { /*Sidebar - Brand */}
  <>
  <Switch>
      <Route component={Page}/>
  </Switch>

  </>




  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
