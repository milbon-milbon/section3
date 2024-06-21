//ルートパス（/）に対応するページコンポーネントです。ホームページの内容を定義

"use client";                                       // このファイルがクライアントサイドで実行されることを示
import React, { useState, useEffect } from 'react';          // ReactとuseState, useEffectフックをインポート
import TransactionList from '../components/TransactionList'; // TransactionListコンポーネントをインポート
import TransactionSummary from '../components/TransactionSummary'; // TransactionSummaryコンポーネントをインポート
import { Transaction } from '../types';                 // '../types'からTransaction型をインポート
import { data } from '../data';                // ダミーデータをインポート

// HomePageって名前のReact Functional Componentを定義
const HomePage: React.FC = () => { 

  // transactionsの状態変数（コンポーネントの状態を保持するために使用する変数）を定義、初期値を空の配列に設定。これは初期値を空の配列に設定。
  //setTransactionsは、その状態を更新するための関数。
  //setTransactionsをuseStateフックを使って宣言。
  const [transactions, setTransactions] = useState<Transaction[]>([]); 

  useEffect(() => {
    // ダミーデータを使用
    setTransactions(data); // useEffectフックを使って、コンポーネントがマウントされたときにtransactionsの状態をダミーデータで更新
  }, []); // 空の依存配列を渡してるから、マウント時に一度だけ実行される

  //レンダリング
  return (
    <div className="flex-container">
      <TransactionList transactions={transactions} /> {/* TransactionListコンポーネントにtransactionsの状態を渡し取引リストを表示 */}
      <TransactionSummary transactions={transactions} /> {/* TransactionSummaryコンポーネントにtransactionsの状態を渡して、取引の要約を表示 */}
    </div>
  );
};

export default HomePage; // HomePageコンポーネントをエクスポート
