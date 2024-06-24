//ルートパス（/）に対応するページコンポーネントです。ホームページの内容を定義

"use client";                                      
import React, { useState, useEffect } from 'react';
import List from '../components/List'; 
import Summary from '../components/Summary'; 
import { Transaction } from '../types'; 


// HomePageって名前のReact Functional Componentを定義
const HomePage: React.FC = () => { 

  // transactionsの状態変数（コンポーネントの状態を保持するために使用する変数）を定義、初期値を空の配列に設定。これは初期値を空の配列に設定。
  //setTransactionsは、その状態を更新するための関数。
  //setTransactionsをuseStateフックを使って宣言。
  const [transactions, setTransactions] = useState<Transaction[]>([]); 

  useEffect(() => {
    
    fetch('http://localhost:3001/Transaction')
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Not Found');
        } else if (response.status === 500) {  
          throw new Error('Internal Server Error');
        } else {
          throw new Error('Network response was not ok');
        }
      }
      return response.json();
    })
    .then(result => {
      // 成功した場合の処理
      
      setTransactions(result);
      })
    .catch(error => {
      console.error('Error:', error);
      // エラーハンドリング
    });
}, []);

  //レンダリング
  return (
    <div className="flex-container">
      <List transactions={transactions} /> {/* Listコンポーネントにtransactionsの状態を渡し取引リストを表示 */}
      <Summary transactions={transactions} /> {/* Summaryコンポーネントにtransactionsの状態を渡して、取引の要約を表示 */}
    </div>
  );
};

export default HomePage; // HomePageコンポーネントをエクスポート