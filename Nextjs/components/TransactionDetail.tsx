
"use client"; // これをファイルの最初に追加します
import React from 'react';
import { Transaction } from '../types';
import Link from 'next/link';

;

interface TransactionDetailProps {
  transaction: Transaction;
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({ transaction }) => {
  console.log('Transaction:', transaction);  // デバッグ用ログ

  return (
    <div>
      <h2>取引詳細</h2>
      <p>日付: {transaction.date}</p>
      <p>金額: {transaction.amount}円</p>
      <p>種類: {transaction.type}</p>
      <p>詳細: {transaction.details}</p>
      <Link href="/">戻る</Link>
    </div>
  );
};

export default TransactionDetail;
