import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import totalImg from '../../assets/total.svg'

import * as S from './style'

export function Summary() {
  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1800,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>R$1800,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$1800,00</strong>
      </div>
    </S.Container>
  )
}