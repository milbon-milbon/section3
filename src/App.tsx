import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TransactionList from './components/TransactionList.tsx';
import TransactionDetail from './components/TransactionDetail.tsx';
import TransactionSummary from './components/TransactionSummary.tsx';


interface Transaction {
  id: number;
  date: string;
  amount: number;
  type: string;
  details: string;
}

const App: React.FC = () => {
  // useStateフックでtransactions状態変数とsetTransactions関数を定義
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // useEffectフックでコンポーネントがマウントされたときにデータをフェッチ
  useEffect(() => {
    console.log('Fetching transactions...');
    fetch('http://localhost:3001/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
      })// 取得したデータでtransactions状態を更新
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <Router>
      <div>
        <h1><Link to="/" className="line">家計簿アプリ</Link></h1>
       
        <Routes>
          
          <Route path="/" element={
            <div>
              <TransactionList transactions={transactions} />{/*取引詳細を表示*/}
              <TransactionSummary transactions={transactions} />{/*月次サマリー*/}
            </div>
          } />
          <Route path="/detail/:id" element={<TransactionDetail transactions={transactions} />} />{/*TransactionDetail コンポーネントに transactions というプロパティ（配列全体）を渡すす*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
