//取引明細の詳細画面
import React from 'react';             // リアクトライブラリからReactをインポートする。"リアクトセット" は具体的でない
import { useParams, Link } from 'react-router-dom';         //react-router-domライブラリからuseParamsフックとLinkコンポーネントをインポートする

interface Transaction {           //「Transactionインターフェース」は、id、date,amount,type,detailsプロパティを定義する。
  id: number;
  date: string;
  amount: number;
  type: string;
  details: string;
}

interface TransactionDetailProps {  //TransactionDetailPropsインターフェースには、 Transactionの配列を受け取るためのプロパティを定義する。
  transactions: Transaction[];     //transactions プロパティとして Transaction インターフェースの配列を受け取る
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({ transactions }) => {//TransactionDetail という名前の React 関数コンポーネントを定義。コンポーネントは、TransactionDetailProps インターフェースに基づくプロパティを受け取る
  const { id } = useParams<{ id: string }>();                        // URLパラメータからidを取得する。
  console.log('Transaction ID:', id);                                // デバッグ用にTransaction IDをコンソールに出力する。
  const transaction = transactions.find(t => t.id === Number(id));   // transactions配列から、idが一致するトランザクションを見つける。
  console.log('Transaction:', transaction);                         // デバッグ用に見つけたトランザクションをコンソールに出力する。
  if (!transaction) return <div>取引が見つかりません</div>;               // トランザクションが見つからなかった場合の処理。

  return (                     //data.tsxファイルのtransactions変数の日付、金額、種類、詳細を返す。
    <div>
      <h2>取引詳細</h2>
      <p>日付: {transaction.date}</p>
      <p>金額: {transaction.amount}円</p>
      <p>種類: {transaction.type}</p>
      <p>詳細: {transaction.details}</p>
      <Link to="/">戻る</Link>
    </div>
  );
};

export default TransactionDetail;// TransactionDetailコンポーネントをエクスポートする。