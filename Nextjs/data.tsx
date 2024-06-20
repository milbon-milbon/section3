// transactions変数にトランザクションデータの配列を格納する

import { Transaction } from './types';

export const transactionss: Transaction[] = [
  { id: 1, date: '2024-06-01', amount: 10000, type: '入金', details: '給与' },
  { id: 2, date: '2024-06-05', amount: 5000, type: '出金', details: '家賃' },
  { id: 3, date: '2024-06-25', amount: 1000, type: '出金', details: '食費' },
  { id: 4, date: '2024-07-01', amount: 20000, type: '入金', details: '給与' },
  { id: 5, date: '2024-07-07', amount: 5000, type: '出金', details: '家賃' },
  { id: 6, date: '2024-07-25', amount: 5000, type: '出金', details: '食費' },
];