# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Build Setup

```bash
# install
$ yarn
# or
$ npm install
```

#### 起動

```bash
# serve with hot reload at http://localhost:5173/
$ yarn dev
# or
$ npm run dev
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## gitについて

### ブランチ

- master: マスタブランチ
- feat/...: 機能追加ブランチ
- fix/...: 機能修正ブランチ
- chore/...: その他ブランチ

基本的に masterブランチで

```bash
git pull
```

を行った後(最新の状態を取得)、ブランチを新しく切ってください

```bash
git checkout -b feat/...
```

※上の場合、新たに作成した機能追加用ブランチ'feat/...'を作成後、移動する

機能追加、修正等が終わったらcommit, pushを行ってください。

```bash
git push origin feat/...
```

必要に応じて(主にコンフリクトが起きた際)rebase, forth-pushをお願いします。

プルリク後、レビューが必要であればgithub画面からレビュアーを設定してメンションしておいてください。
問題なければマージします。

## UI ライブラリ

### Tailwind CSS

https://tailwindcss.com/

### Material Tailwind

https://www.material-tailwind.com/
