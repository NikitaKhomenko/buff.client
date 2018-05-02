import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import routes from './routes';
import store from './Store/store';
import { createMemoryHistory } from 'history';
import './main-style.scss';

const syncHistoryWithStore = (store, history) => {
  const { routing } = store.getState();
  if(routing && routing.location) {
    history.replace(routing.location);
  }
};

const initialState = {
  history: 0,
  allHistory:[],
};
const routerHistory = createMemoryHistory();
// syncHistoryWithStore(store, routerHistory);

let rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild( rootElement );
const rootE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={routerHistory}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  rootE
);
