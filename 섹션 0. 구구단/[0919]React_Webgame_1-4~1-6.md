### 바벨

- 최신 문법이랑 실험적인 문법을 자바스크립트에서 쓸 수 있게 해준다.

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
	 class LikeButton extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            liked: false,
          };
        }

        render() {
          return (
            <button
              type="submit"
              onClick={() => {
                this.setState({ liked: true });
              }}
            >
              {this.state.liked === true ? "Liked" : "Like"}
            </button>
            //JSX ( JS + XML )
          );
	}
</script>
<script type="text/babel">
      ReactDOM.render(<LikeButton />, document.querySelector("#root"));
</script>
```



### JSX ( JS + XML )

- 태그 사이의 {}중괄호를 넣으면 안에는 Javascript 문법을 사용할 수 있다.

### 구구단

- state : 바뀌는 것들 속성을 추가!
  - state값을 변경해줄때는 `this.setState({value : e.target.value})`

- 화살표 함수 익히기.

```javascript
changeValue = (e) => {
    this.setState({value : e.target.value});
}
```