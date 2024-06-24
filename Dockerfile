# Node.js lts image
FROM node:lts

# ワーキングディレクトリを指定
WORKDIR /usr/src/app

# 同一ディレクトリ内のファイルを全てコピー
COPY package*.json ./

# パッケージをインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY src/ ./src

# 3000番ポートでリッスン
EXPOSE 3000

# React の起動
CMD ["npm", "run", "dev"]