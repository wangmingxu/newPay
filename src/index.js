require('fetch-ie8');
require('./css/newPay.css');

const React = require('react');
const render = require('react-dom').render;
const Provider = require('react-redux').Provider;
const App = require('./containers/App');
const OrderInfo = require('./containers/OrderInfo');
const configureStore = require('./store/configureStore');
import { initPage } from "./actions";
const store = configureStore();
Promise.all([
  store.dispatch(initPage())
])
.then(() => {
  render(
    <Provider store={store}>
      <OrderInfo />
    </Provider>,
    document.getElementById('app')
  );
});
