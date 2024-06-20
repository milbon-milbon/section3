"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Next.jsの新しいフック
import TransactionDetail from '../../../components/TransactionDetail';
import { transactionss } from '../../../data';
import { Transaction } from '../../../types';

const TransactionDetailPage: React.FC = () => {
  const pathname = usePathname();
  const [transaction, setTransaction] = useState<Transaction | undefined>(undefined);

  useEffect(() => {
    const id = pathname?.split("/").pop();
    if (id) {
      const foundTransaction = transactionss.find(t => t.id === Number(id));
      setTransaction(foundTransaction);
    }
  }, [pathname]);

  if (!transaction) return <div>取引が見つかりません</div>;

  return <TransactionDetail transaction={transaction} />;
};

export default TransactionDetailPage;

