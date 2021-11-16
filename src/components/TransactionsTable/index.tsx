import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import * as S from './style'

type TransactionsData = {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  date: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<TransactionsData[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  console.log(transactions);


  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.date))}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </S.Container>
  )
}