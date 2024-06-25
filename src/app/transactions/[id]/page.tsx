//動的パス（/transactions/[id]）に対応するページコンポーネント。特定の取引の詳細を表示

"use client";
import React, { useEffect, useState } from 'react'; 
import { usePathname } from 'next/navigation'; // Next.jsの新しいフックをインポート
import { data } from '../../../data'; 
import { Transaction } from '../../../types'; // '../types'からTransaction型をインポート
import Link from 'next/link'; // Next.jsのLinkコンポーネントをインポート

const DetailPage: React.FC = () => { // DetailPageって名前のReact Functional Componentを定義
  const pathname = usePathname(); // 現在のパスを取得するフックを使って状態管理
  const [transaction, setTransaction] = useState<Transaction | undefined>(undefined); 
  // transactionの状態とそれを更新するための関数
  //setTransactionをuseStateフックを使って宣言。初期値はundefined

  useEffect(() => {
    const id = pathname?.split("/").pop(); // パス名をスラッシュで分割して、最後の部分（ID）を取得
    if (id) {
      const foundTransaction = data.find(t => t.id === Number(id)); // IDに一致する取引をダミーデータから探su
      setTransaction(foundTransaction); // 見つかった取引を状態にセット
    }
  }, [pathname]); // パス名が変わるたびにこのエフェクトが実行される

  if (!transaction) return <div>取引が見つかりません</div>; // 取引が見つからなかった場合のメッセージ

  return <div>
  <h2>取引詳細</h2>
  <p>日付: {transaction.date}</p>
  <p>金額: {transaction.amount}円</p> 
  <p>種類: {transaction.type}</p>
  <p>詳細: {transaction.details}</p>
  <Link href="/">戻る</Link>
</div>; // 取引が見つかった場合はDetailコンポーネントを表示
};

export default DetailPage; // DetailPageコンポーネントをエクスポート