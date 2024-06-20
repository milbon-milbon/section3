"use client";

import React from 'react';
import TransactionList from '../../components/TransactionList'; // 正しい相対パス
import { transactionss } from '../../data'; // 正しい相対パス


const TransactionsPage: React.FC = () => {
  return (
    <div>
      <h1>取引一覧</h1>
      <TransactionList transactions={transactionss} />
    </div>
  );
};

export default TransactionsPage;
