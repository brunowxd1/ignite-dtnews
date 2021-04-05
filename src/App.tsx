import { useState } from 'react';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './components/hooks/useTransactions';

export function App() {
  const [ isNewTransacionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  function handleOpenNewTransactionMoal() {
      setIsNewTransactionModalOpen(true);
  };

  function handleCloseNewTransactionMoal() {
      setIsNewTransactionModalOpen(false);
  };

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionMoal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransacionModalOpen} onRequestClose={handleCloseNewTransactionMoal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
