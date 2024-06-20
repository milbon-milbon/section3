//ルートパス（/）に対応するページコンポーネントです。ホームページの内容を定義

"use client"; // このファイルがクライアントサイドで実行されることを示
import React, { useState, useEffect } from 'react'; // ReactとuseState, useEffectフックをインポート
import TransactionList from '../components/TransactionList'; // TransactionListコンポーネントをインポート
import TransactionSummary from '../components/TransactionSummary'; // TransactionSummaryコンポーネントをインポート
import { Transaction } from '../types'; // '../types'からTransaction型をインポート
import { transactionss } from '../data'; // ダミーデータをインポート

const HomePage: React.FC = () => { // HomePageって名前のReact Functional Componentを定義
  const [transactions, setTransactions] = useState<Transaction[]>([]); // transactionsの状態と、それを更新するための関数setTransactionsをuseStateフックを使って宣言。初期値は空の配列

  useEffect(() => {
    // ダミーデータを使用
    setTransactions(transactionss); // useEffectフックを使って、コンポーネントがマウントされたときにtransactionsの状態をダミーデータで更新
  }, []); // 空の依存配列を渡してるから、マウント時に一度だけ実行される

  return (
    <div>
      <TransactionList transactions={transactions} /> {/* TransactionListコンポーネントにtransactionsの状態を渡す */}
      <TransactionSummary transactions={transactions} /> {/* TransactionSummaryコンポーネントにtransactionsの状態を渡す */}
    </div>
  );
};

export default HomePage; // HomePageコンポーネントをエクスポート
