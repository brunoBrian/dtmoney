import { useState } from "react";
import Modal from "react-modal";
import * as S from "./style";

import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  Modal.setAppElement('#root');
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button type='button' onClick={onRequestClose} className='react-modal-close'>
        <img src={closeImg} alt='Fechar' />
      </button>

      <S.Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder='Titulo' />
        <input type="number" placeholder='Valor' />

        <S.TransactionTypeContainer>
          <S.RadioBox type='button' onClick={() => setType('deposit')} activeColor='green' isActive={type === 'deposit'}>
            <img src={incomeImg} alt='Entrda' />
            <span>Entrda</span>
          </S.RadioBox>
          <S.RadioBox type='button' onClick={() => setType('withdraw')} activeColor='red' isActive={type === 'withdraw'}>
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input type="text" placeholder='Categoria' />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}