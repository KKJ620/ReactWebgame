### 노드는 자바스크립트 실행기!

- 리액트할 때 노드
  - 자바스크립트 실행기이므로 알아야 한다



### 리액트 세팅(create react-app 없이!)

```js
npm init // package.json 생성
npm i react react-dom
npm i -D webpack webpack-cli //react시 필요한 웹팩과 웹팩 cli 설치, -D는 개발용
//실제 서비스 시에는 웹팩이 필요 없다.
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plugin-proposal-class-properties
//바벨 설치 - jsx관련
npx webpack //웹팩 실행
```



### 컴포넌트 생성시

```React
const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {};

  render() {}
}

module.exports = WordRelay; //컴포넌트를 밖에서도 사용할 수 있게 해주는 노드 모듈 시스템
```



### webpack.config.js

```javascript
const path = require("path"); // 노드에서 경로를 조작하기 위해

module.exports = {
  name: "wordrelay-setting",
  mode: "development", //실서비스 : production
  devtool: "eval", //빠르게
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  }, //입력

  module: {
    rules: [
      {
        //js랑 jsx파일에 바벨을 적용, 최신 문법이 호환되게 바꿔주는 역할
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  output: {
    //path.join : 경로를 합쳐준다.
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, //출력 : jsx파일을 하나로 합쳐서 app.js로
};

```

