// 入出金履歴の一覧を表示

"use client"; // これをファイルの最初に追加します
import React from 'react';
import Link from 'next/link';
import { Transaction } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <div>取引がありません</div>;
  }
  return (
    <div>
      <h2>取引リスト</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
          {transaction.date} - {transaction.amount}円 - {transaction.type}
          <Link href={`/transactions/${transaction.id}`}>詳細</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
