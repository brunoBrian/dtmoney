import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { api } from '../services/api';

type TransactionsData = {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  date: string;
}

type TransactionInput = Omit<TransactionsData, 'id' | 'date'>

type TransactionProviderProps = {
  children: ReactNode;
}

type TransactionsContextData = {
  transactions: TransactionsData[],
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionProvider({children}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsData[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('transactions', {
      ...transactionInput,
      date: new Date()
    })

    const {transaction} = response.data;

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionContext.Provider value={{
      transactions,
      createTransaction
    }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionContext)

  return context;
}