import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import 'whatwg-fetch'
import App from './components/App'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'


const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  target
)
registerServiceWorker();
