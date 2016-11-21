import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './reducers/index.js'

import './index.css'
import App from './pages/Home/index'
import SignIn from './pages/SignIn/index'
import SignUp from './pages/SignUp/index'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </Router>
  </Provider>
),document.getElementById('root'))
