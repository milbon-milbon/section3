//レイアウトコンポーネントです。アプリケーションの共通レイアウト（ナビゲーションバー、フッターなど）を定義

import React from 'react';
import '../styles/globals.css'; // グローバルスタイルのインポート

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <head>
        <title>家計簿アプリ</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header>家計簿アプリ</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;