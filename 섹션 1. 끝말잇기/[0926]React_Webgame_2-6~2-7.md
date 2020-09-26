### webpack.config.js

- preset : plugin들의 모임이다.

  - preset 설정을 해주고 싶을때

  ```javascript
  options : {
      presets : [
          ["@babel/preset-env", {
              targets: {
                  //browserslist
                  browsers : ['> 5% in KR', 'last 2 chrome versions'],
              }, 
          }],
          "@babel/preset-react"
      ],
      plugins : ["@babel/plugin-proposal-class-properties"],
  }
  
  ```

  - preset-env : 자동으로 이전 버전 브라우저들을 지원해준다.