import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';
import { GlobalStyle } from './styles/global';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 3340,
          type: 'deposit',
          category: 'Picpay',
          date: new Date()
        },
        {
          id: 2,
          title: 'Transaction 2',
          amount: 233,
          type: 'withdraw',
          category: 'Course',
          date: new Date()
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
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