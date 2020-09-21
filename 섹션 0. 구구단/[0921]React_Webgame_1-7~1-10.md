### setState 방식

- 기존 방식

```react
 this.setState({
              result: this.state.value + " 정답",
              firstNum: Math.ceil(Math.random() * 9),
              secondNum: Math.ceil(Math.random() * 9),
              value: "",
            });
```

- 리턴을 해주는 함수를 넣어주는 방식
  - prevState를 통해 이전 상태값을 활용할 수 있다.

```react
 this.setState((prevState) => {
              return {
                result: prevState.value + " 정답",
                firstNum: Math.ceil(Math.random() * 9),
                secondNum: Math.ceil(Math.random() * 9),
                value: "",
              };
            });
```



### ref

```jsx
hello;

this.hello.focus();

<input ref={(c) => { this.hello = c;}}></input>
```



### state가 변경될때 렌더링

- render함수 호출
  - setState가 실행될때
  - render()가 자주 호출되면 느려진다.
  - 최적화할 경우에 신경써줘야한다.

