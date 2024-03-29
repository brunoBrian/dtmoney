import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { useTransactions } from "../../hooks/useTransactions";

import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'

import * as S from "./style";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const {createTransaction} = useTransactions()
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    });

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

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

      <S.Container onSubmit={handleSubmit}>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder='Titulo' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number" placeholder='Valor' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />

        <S.TransactionTypeContainer>
          <S.RadioBox type='button'
            onClick={() => setType('deposit')}
            activeColor='green'
            isActive={type === 'deposit'}
          >
            <img src={incomeImg} alt='Entrda' />
            <span>Entrda</span>
          </S.RadioBox>
          <S.RadioBox type='button'
            onClick={() => setType('withdraw')}
            activeColor='red'
            isActive={type === 'withdraw'}
          >
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input type="text" placeholder='Categoria' value={category} onChange={(e) => setCategory(e.target.value)} />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}