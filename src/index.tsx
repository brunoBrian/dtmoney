import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';

import { App } from './App';
import { GlobalStyle } from './styles/global';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 3340,
          type: 'deposit',
          category: 'Food',
          date: new Date()
        },
        {
          id: 2,
          title: 'Transaction 1',
          amount: 233,
          type: 'withdraw',
          category: 'Food',
          date: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);