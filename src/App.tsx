import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import {TransactionProvider} from './hooks/useTransactions'

export function App() {


  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <TransactionProvider>
      <Header openNewTransaction={openModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </TransactionProvider>
  );
}