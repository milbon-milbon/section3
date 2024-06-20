// app/components/TransactionSummary.tsx
"use client"; // これをファイルの最初に追加します
import React, { useState } from 'react';
import { Transaction } from '../types';

interface TransactionSummaryProps {
  transactions: Transaction[];
}

const TransactionSummary: React.FC<TransactionSummaryProps> = ({ transactions }) => {
  const [selectedMonth, setSelectedMonth] = useState<string>('');

  const summary = transactions.reduce((acc, transaction) => {
    const month = transaction.date.slice(0, 7);
    if (!acc[month]) acc[month] = { income: 0, expense: 0 };
    if (transaction.type === '入金') {
      acc[month].income += transaction.amount;
    } else {
      acc[month].expense += transaction.amount;
    }
    return acc;
  }, {} as { [key: string]: { income: number; expense: number } });

  const months = Object.keys(summary);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div>
      <h2>月ごとの入出金履歴</h2>
      <div>
        <label htmlFor="month-select">月を選択:</label>
        <select id="month-select" onChange={handleMonthChange}>
          <option value="">--選択してください--</option>
          {months.map(month => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      {selectedMonth && (
        <div>
          <h3>{selectedMonth} の入出金履歴</h3>
          <p>入金: {summary[selectedMonth].income}円</p>
          <p>出金: {summary[selectedMonth].expense}円</p>
          <p>差額: {summary[selectedMonth].income - summary[selectedMonth].expense}円</p>
        </div>
      )}
    </div>
  );
};

export default TransactionSummary;