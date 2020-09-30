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

  output: {
    //path.join : 경로를 합쳐준다.
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  }, //출력 : jsx파일을 하나로 합쳐서 app.js로
};
