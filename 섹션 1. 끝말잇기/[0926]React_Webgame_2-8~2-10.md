### 자동으로 build

```js
npm i -D react-hot-loader
npm i -D webpack-dev-server
```

> 코드의 변경점을 감지해서 자동으로 build를 해주고 변경사항을 적용

- package.json

```json
"scripts" : {
    "dev" : "webpack-dev-server"
}
```

### webpack-dev-server

1. webpack.config.json 파일을 읽어 build
2. build 내용을 서버에서 유지
3. localhost:8080에서 소스를 실행할 수 있다.



### webpack-dev-server --hot

> 코드가 변경된 후 저장을 하면 감지해서 빌드를 하고 적용을 해준다.

- package.json

```json
"scripts" : {
    "dev" : "webpack-dev-server --hot"
}
```

- client.js

```javascript
const React = require("react");
const ReactDom = require("react-dom");
const { hot } = require("react-hot-loader/root");

const WordRelay = require("./WordRelay");

const Hot = hot(WordRelay);
ReactDom.render(<Hot />, document.querySelector("#root")); // 변경코드
```

> ReactDom.render(<WordRelay />, document.querySelector("#root")); // 기존 코드에서 변경



- webpack.config.js

```js
module: {
    rules: [
      {
        //js랑 jsx파일에 바벨을 적용, 최신 문법이 호환되게 바꿔주는 역할
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: [" > 1% in KR"],
                },
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel",
          ],
        },
      },
    ],
  },
```

> plugins에 **"react-hot-loader/babel"** 추가!



- index.html

```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>끝말잇기</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./app.js"></script>
  </body>
</html>
```

> `<script src = "./dist/app.js"></script>` 에서 
>
> `<script src="./app.js"></script>` 로 변경



- webpack.config.js

```js
output : {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
}
```

>path : 실제 경로
>
>publicPath : 가상 경로
>
>webpack.config.js는 변경시 서버를 재시작 해줘야 한다.