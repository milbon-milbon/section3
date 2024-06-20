import React, { useState, useEffect } from 'react'; // ReactライブラリからReact、useState、useEffectフックをインポートする。
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // react-router-domライブラリから、Router、Routes、Route、Linkコンポーネントをインポートする。
import TransactionList from './components/TransactionList.tsx'; // TransactionListコンポーネントをインポートする。
import TransactionDetail from './components/TransactionDetail.tsx'; // TransactionDetailコンポーネントをインポートする。
import TransactionSummary from './components/TransactionSummary.tsx'; // TransactionSummaryコンポーネントをインポートする。

interface Transaction { // Transactionインターフェースは、id、date、amount、type、detailsプロパティを定義する。
  id: number;
  date: string;
  amount: number;
  type: string;
  details: string;
}

const App: React.FC = () => { // AppというReact関数コンポーネントを定義する。
  // useStateフックでtransactions状態変数とsetTransactions関数を定義
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // useEffectフックでコンポーネントがマウントされたときにデータをフェッチ
  useEffect(() => {
    console.log('Fetching transactions...');
    fetch('http://localhost:3001/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data); // 取得したデータでtransactions状態を更新
      })
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <Router>
      <div>
        <h1><Link to="/" className="line">家計簿アプリ</Link></h1>
        <Routes>
          <Route path="/" element={
            <div>
              <TransactionList transactions={transactions} />{/* 取引リストを表示 */}
              <TransactionSummary transactions={transactions} />{/* 月次サマリーを表示 */}
            </div>
          } />
          <Route path="/detail/:id" element={<TransactionDetail transactions={transactions} />} />{/* TransactionDetailコンポーネントにtransactionsというプロパティ（配列全体）を渡す */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Appコンポーネントをエクスポートする。
