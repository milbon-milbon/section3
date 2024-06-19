// 入出金履歴の一覧を表示
import React from 'react';     //reactライブラリからRReactをインポートする。
import { Link } from 'react-router-dom'; //react-router-domライブラリからLinkコンポーネンとをインポートする。

interface Transaction {   //「Transactionインターフェース」は、id、date,amount,type,detailsプロパティを定義する。
  id: number;
  date: string;
  amount: number;
  type: string;
  details: string;
}

interface TransactionListProps {//TransactionDetailPropsインターフェースには、 Transactionの配列を受け取るためのプロパティを定義する。
  transactions: Transaction[];   //transactions プロパティとして Transaction インターフェースの配列を受け取る
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {//TransactionListというリアクト関数コンポーネントを定義して、コンポーネントは、「Transactionインターフェース」のプロパティを受け取る
  // useEffectはここでは不要。APIデータはpropsから渡される
  return (
    <div>
      <h2>入出金履歴</h2>
      <ul>
        {transactions.map(transaction => (//transactions は Transaction の配列。map メソッドを使用して、transactions 配列の各要素に対して関数を適用
          <li key={transaction.id}>        {/*React が各リストアイテムを一意に識別するために使用。key 属性は配列の各要素に一意のキーを提供することで、パフォーマンスを最適化し、再レンダリングの際に効率的に差分を検出*/}
            {transaction.date} - {transaction.amount}円 - {transaction.type}
            <Link to={`/detail/${transaction.id}`}>詳細</Link>{/*各トランザクションに対する詳細リンクを表示。to={/detail/${transaction.id}} は、リンク先のURLパスを指定します。各トランザクションの id に基づいて、/detail/1, /detail/2 などのURLを生成*/}
          </li>//リンクをクリックすると、指定されたURLにナビゲートし、そのIDに対応するトランザクションの詳細ページに移動
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
