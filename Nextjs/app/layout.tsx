import React from 'react';
import '../styles/globals.css'; // グローバルスタイルのインポート

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <head>
        <title>My Budget App</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header>My Budget App</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;