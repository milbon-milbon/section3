import React, { useState } from 'react'; // ReactライブラリからReactとuseStateフックをインポートする。

interface Transaction { // Transactionインターフェースは、id、date、amount、type、detailsプロパティを定義する。
  id: number;
  date: string;
  amount: number;
  type: string;
  details: string;
}

interface TransactionSummaryProps { // TransactionSummaryPropsインターフェースは、Transactionの配列を受け取るためのプロパティを定義する。
  transactions: Transaction[]; // transactionsプロパティとしてTransactionインターフェースの配列を受け取る。
}

const TransactionSummary: React.FC<TransactionSummaryProps> = ({ transactions }) => { // TransactionSummaryというReact関数コンポーネントを定義し、TransactionSummaryProps型のプロパティを受け取る。
  const [selectedMonth, setSelectedMonth] = useState<string>(''); // selectedMonthという状態を管理し、setSelectedMonthでその状態を更新する。

  const summary = transactions.reduce((acc, transaction) => { // transactions配列を集計して月ごとの入金と出金の合計を計算する。
    const month = transaction.date.slice(0, 7); // YYYY-MM形式で月を取得する。
    if (!acc[month]) acc[month] = { income: 0, expense: 0 }; // 月ごとの初期値を設定する。
    if (transaction.type === '入金') { // トランザクションのタイプが入金の場合、収入に加算する。
      acc[month].income += transaction.amount;
    } else { // トランザクションのタイプが出金の場合、支出に加算する。
      acc[month].expense += transaction.amount;
    }
    return acc; // 集計結果を返す。
  }, {} as { [key: string]: { income: number; expense: number } }); // 初期値として空のオブジェクトを指定する。

  const months = Object.keys(summary); // 集計結果から月のリストを取得する。

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => { // 月選択の変更をハンドリングする関数。
    setSelectedMonth(event.target.value); // 選択された月を状態として設定する。
  };

  return (
    <div>
      <h2>月ごとの入出金履歴</h2>
      <div>
        <label htmlFor="month-select">月を選択:</label> {/*月選択のためのラベル。*/}
        <select id="month-select" onChange={handleMonthChange}> {/*月を選択するためのドロップダウンメニュー。*/}
          <option value="">--選択してください--</option> {/*デフォルトの選択肢。*/}
          {months.map(month => (
            <option key={month} value={month}> {/*月ごとのオプションを生成する。*/}
              {month}
            </option>
          ))}
        </select>
      </div>
      {selectedMonth && ( // 選択された月が存在する場合、その月の入出金履歴を表示する。
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

export default TransactionSummary; // TransactionSummaryコンポーネントをエクスポートする。
