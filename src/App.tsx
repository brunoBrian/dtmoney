import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

export function App() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header openNewTransaction={openModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </>
  );
}