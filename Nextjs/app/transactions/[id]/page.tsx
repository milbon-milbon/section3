//動的パス（/transactions/[id]）に対応するページコンポーネントです。特定の取引の詳細を表示

"use client";
import React, { useEffect, useState } from 'react'; // ReactとuseEffect, useStateフックをインポート
import { usePathname } from 'next/navigation'; // Next.jsの新しいフックをインポート
import TransactionDetail from '../../../components/TransactionDetail'; // TransactionDetailコンポーネントをインポート
import { data } from '../../../data'; // ダミーデータをインポート
import { Transaction } from '../../../types'; // '../types'からTransaction型をインポート

const TransactionDetailPage: React.FC = () => { // TransactionDetailPageって名前のReact Functional Componentを定義
  const pathname = usePathname(); // 現在のパスを取得するフックを使って状態管理
  const [transaction, setTransaction] = useState<Transaction | undefined>(undefined); // transactionの状態とそれを更新するための関数setTransactionをuseStateフックを使って宣言。初期値はundefined

  useEffect(() => {
    const id = pathname?.split("/").pop(); // パス名をスラッシュで分割して、最後の部分（ID）を取得
    if (id) {
      const foundTransaction = data.find(t => t.id === Number(id)); // IDに一致する取引をダミーデータから探su
      setTransaction(foundTransaction); // 見つかった取引を状態にセット
    }
  }, [pathname]); // パス名が変わるたびにこのエフェクトが実行される

  if (!transaction) return <div>取引が見つかりません</div>; // 取引が見つからなかった場合のメッセージ

  return <TransactionDetail transaction={transaction} />; // 取引が見つかった場合はTransactionDetailコンポーネントを表示
};

export default TransactionDetailPage; // TransactionDetailPageコンポーネントをエクスポート

