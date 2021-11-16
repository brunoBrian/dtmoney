import logoImg from '../../assets/logo.svg'
import * as S from './style'

type HeaderProps = {
  openNewTransaction: () => void;
}

export function Header({ openNewTransaction }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={openNewTransaction}>Nova transação</button>
      </S.Content>
    </S.Container>
  )
}