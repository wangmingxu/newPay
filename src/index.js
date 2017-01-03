require('fetch-ie8');

const React = require('react');
const render = require('react-dom').render;
const Provider = require('react-redux').Provider;
const App = require('./containers/App');
const OrderInfo = require('./containers/OrderInfo');
const configureStore = require('./store/configureStore');

const store = configureStore();
import { initPage } from "./actions";

render(
  <Provider store={store}>
    <OrderInfo />
  </Provider>,
  document.getElementById('app')
)
store.dispatch(initPage());
