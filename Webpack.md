## 웹팩 (모듈 번들러)

자바스크립트 코드가 많아지면 하나의 파일로 관리하는데 한계가 있음.

여러개 파일을 브라우저에서 로딩할 경우 그만큼 네트워크 비용을 치뤄야 함.

또 각 파일은 서로의 Scope를 침범하지 않아야 하는데 잘못 작성할 경우 변수 충돌의 위험성도 있다.

------

함수 스코프를 사용하는 자바스크립트는 즉시호출함수(IIFE)를 사용해 모듈을 만들 수 있다.

CommonJS나 AMD 스타일의 모듈 시스템을 사용하면 파일별로 모듈을 관리할 수도 있다.

하지만 여전히 브라우저에서는 파일 단위 모듈 시스템을 사용하는 것은 쉽지 않은 일이라 모듈을 IIFE 스타일로 변경해주는 과정뿐만 아니라 하나의 파일로 묶어(bundled) 네트워크 비용을 최소화할 수 있는 방법이 웹프론트엔드 개발 과정에는 필요함

------

> 엔트리, 아웃풋, 로더, 플러그인

### 엔트리

웹팩에서 모든 것은 **모듈**이다. 자바스크립트, 스타일시트, 이미지 등 모든 것을 자바스크립트 모듈로 로딩해서 사용하도록 한다.

![](https://jeonghwan-kim.github.io/static/e96314e3ed607f2fd38244fe0d6355c5/f93b5/webpack-dependency-graph.jpg)

위 그림처럼 자바스크립트가 로딩하는 모듈이 많아질수록 모듈간의 의존성은 증가한다. 

의존성 그래프의 시작점을 웹팩에서는 **엔트리(entry)**라고한다. 

웹팩은 엔트리를 통해서 필요한 모듈을 로딩하고 하나의 파일로 묶는다. 

<설정파일 webpack.config.js>

```js
module.exports = {
  entry: {
    main: "./src/main.js",
  },
}
```

사용할 html에서 사용할 자바스크립트의 시작점은 src/main.js코드

entry키에 시작점 경로를 지정함

------

### 아웃풋

엔트리에 설정한 자바스크립트 파일을 시작으로 의존되어 있는 모든 모듈을 하나로 묶을 것이고, 번들된 결과물을처리할 위치는 **output**에 기록한다.

<설정파일 webpack.config.js>

```js
module.exports = {
  output: {
    filename: "bundle.js",
    path: "./dist",
  },
}
```

dist 폴더의 bundle.js 파일로 결과를 저장함.

html파일에서는 번들링된 이 파일을 로딩하게끔 한다.

<index.html>

```html
<body>
  <script src="./dist/bundle.js"></script>
</body>
```

엔트리에 설정한 자바스크립트는 Utils.js 모듈을 사용

<src/main.js>

```js
import Utils from "./Utils"
Utils.log("Hello webpack")
```

<src/Utils.js>

```js
export default class Utils {
  static log(msg) {
    console.log("[LOG] " + msg)
  }
}
```

웹팩은 터미널에서 webpack 커맨드로 빌드할 수 있음

------

### 로더

웹팩은 모든 파일을 모듈로 관리. 하지만 웹팩은 자바스크립트밖에 모르므로 비자바스크립트 파일을 웹팩이 이해하게끔 변경해야하는데 로더가 그 역할을 함.

로더는 <u>test</u>와 <u>use</u>키로 구성된 객체로 설정할 수 있다.

<u>test</u>에 로딩할 파일을 지정하고 <u>use</u>에 적용할 로더를 설정한다. 	

------

### ex. babel-loader

ES6에서 EX5로 변환할 때 바벨을 사용할 수 있는데, test에 ES6로 작성한 자바스크립트 파일을 지정하고 use에 이를 변환할 바벨 로더를 설정한다.

<webpack.config.js>

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "node_modules",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
          },
        },
      },
    ],
  },
}
```

test에 자바스크립트 확장자를 갖는 파일을 정규표현식으로 지정,

node_modules폴더는 패키지 폴더이므로 제외하기 위해서 exclude에 설정,

use에 로더를 설정하는데 babel-loader를 추가

```bash
npm i --save-dev babel-loader babel-core babel-preset-env
```

웹팩 커맨드라인으로 빌드하고 나면 bundle.js가 ES5문법으로 변경됨

------

### 플러그인

로더는 **파일단위**로 처리, 플로그인은 **번들된 결과물**을 처리

번들된 자바스크립트를 난독화하거나 특정텍스트를 추출하는 용도로 사용할 수 있다.

------

### ex. UglifyJsPlugin

UglifyJsPlugin은 로더로 처리된 자바스크립트 결과물을 난독화 처리하는 플러그인

플러그인을 사용할 때는 웹팩 설정 객체의 <u>plugins</u>배열에 추가한다.

```js
const webpack = require("webpack")

module.exports = {
  plugins: [new webpack.optimize.UglifyJsPlugin()],
}
```

## 정리

기본적으로 웹팩은 **모듈 번들러**다.

의존성 그래프에서 엔트리로 그래프의 시작점을 설정하면 웹팩은 모든 자원을 모듈로 로딩한 후 아웃풋으로 묶어준다. 

로더로 각 모듈별로 바벨, 사스변환 등의 처리하고 이 결과를 플러그인이 난독화, 텍스트 추출등의 추가 작업을 한다.

참고 자료: [https://jeonghwan-kim.github.io/js/2017/05/15/webpack.html]()

