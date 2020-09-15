# 리액트는 왜 쓰는가

### 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리

1. 사용자 경험이 좋아진다
   - 웹에서 앱과 같은 사용자 경험
2. 데이터를 화면에 반영할때  일치시는 점이 좋아진다
3. 중복된 요소들을 하나로 묶어줄 수 있어 유지보수 하기 좋다.



### 웹팩

- 나눠진 자바스크립트 파일을 html이 실행할 수 있는 자바스크립트파일로 만들어준다.  



### ReactDOM

- 컴포넌트로 만들겠다고 해놓은 것을 웹에 렌더링을 해준다, 실제로 반영



### React.createElement

- JSX없이 React를 사용할 수 있다.

```javascript
const e = React.createElement;

ReactDOM.render(
	e(LikeButton), document.querySelector('#root'));
```



### state는 Component의 강점!

- 바뀌거나 바뀔 수 있는 부분
- state 안의 값이 바뀌면 화면이 저절로 바뀐다.
- state를 데이터라 생각하면 데이터와 화면이 같은지 확인을 한다.