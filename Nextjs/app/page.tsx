
"use client"; // これをファイルの最初に追加
import React, { useState, useEffect } from 'react';
import TransactionList from '../components/TransactionList';
import TransactionSummary from '../components/TransactionSummary';
import { Transaction } from '../types';
import { transactionss } from '../data';

const HomePage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // ダミーデータを使用
    setTransactions(transactionss);
  }, []);

  return (
    <div>
      <TransactionList transactions={transactions} />
      <TransactionSummary transactions={transactions} />

    </div>
  );
};

export default HomePage;