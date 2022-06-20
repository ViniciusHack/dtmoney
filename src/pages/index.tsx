import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from '../components/Dashboard/index';
import { Header } from '../components/Header/index';
import { NewTransactionModal } from '../components/NewTransactionModal/index';
import { TransactionsProvider } from '../hooks/useTransactions';
import { GlobalStyle } from '../styles/global';
Modal.setAppElement('#__next')

export default function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider >
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard />
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
        <GlobalStyle />
    </TransactionsProvider>
  );
}