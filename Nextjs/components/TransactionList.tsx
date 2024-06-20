// 入出金履歴の一覧を表示

"use client"; // これをファイルの最初に追加
import React from 'react'; // Reactをインポート
import Link from 'next/link'; // Next.jsのLinkコンポーネントをインポート
import { Transaction } from '../types'; // '../types'から' 'Transaction'型をインポート

interface TransactionListProps { // TransactionListコンポーネントのプロパティの型を定義
  transactions: Transaction[]; // transactionsプロパティはTransaction型の配列
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => { // TransactionListっていう名前のReact Functional Componentを定義
  if (!transactions || transactions.length === 0) { // transactionsがないか、空の場合
    return <div>取引がありません</div>; // "取引がありません"ってメッセージを表示する
  }
  return (
    <div>
      <h2>取引リスト</h2> {/* タイトル */}
      <ul>
        {transactions.map(transaction => ( // transactions配列を使ってリストを動的に生成
          <li key={transaction.id}> {/* 各取引に対して一意のキーを指定 */}
            {transaction.date} - {transaction.amount}円 - {transaction.type} {/* 取引の日付、金額、種類を表示 */}
            <Link href={`/transactions/${transaction.id}`}>詳細</Link> {/* 詳細ページへのリンクを表示 */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList; // TransactionListコンポーネントをエクスポート
