///transactionsパスに対応するページコンポーネント。取引の一覧を表示

"use client";


import TransactionList from '../../components/TransactionList'; // 正しい相対パス
import { data } from '../../data'; // 正しい相対パス


const TransactionsPage: React.FC = () => { // TransactionsPageって名前のReact Functional Componentを定義してる
  return (
    <div>
      <h1>取引一覧</h1> {/* タイトル */}
      <TransactionList transactions={data} />
       {/* TransactionListコンポーネントにダミーデータのdataを渡してる 。ダミーデータを渡す理由は、
       TransactionListコンポーネントが取引データを表示するために必要だか。*/}
    </div>
  );
};

export default TransactionsPage; // TransactionsPageコンポーネントをエクスポートしてる

