import { useEffect } from 'react'
import { api } from '../../services/api'

import * as S from './style'

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(data => console.log(data))
  }, [])

  return (
    <S.Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td>R12.39</td>
            <td>Tecnologia</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td>R12.39</td>
            <td>Tecnologia</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td>R12.39</td>
            <td>Tecnologia</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  )
}