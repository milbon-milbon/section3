
"use client"; // これをファイルの最初に追加
import React from 'react'; // Reactをインポート
import { Transaction } from '../types'; // '../types'から' 'Transaction'型をインポート
import Link from 'next/link'; // Next.jsのLinkコンポーネントをインポート

interface TransactionDetailProps { // TransactionDetailコンポーネントのプロパティの型を定義
  transaction: Transaction; // transactionプロパティはTransaction型
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({ transaction }) => { // TransactionDetailって名前のReact Functional Componentを定義
  console.log('Transaction:', transaction); // デバッグ用に取引の詳細をログに出力

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

export default TransactionDetail; // TransactionDetailコンポーネントをエクスポート
