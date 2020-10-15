### 렌더링 되는 걸 시각화로 확인

- 개발자 도구 -> React -> Highlight 체크



### 렌더링

- setState 함수만 호출하면 렌더링이 다시 일어난다

  - shouldComponentUpdate 함수 사용해서 해결

  ```react
  shouldComponentUpdate(nextProps, nextState, nextContext){
          if(this.state.conuter !== nextState.conuter){
              return true;
          }
          return false;
      }
  ```

  > `this.state.counter` 은 지금 `state`에 있는 `counter` 값
  >
  > `nextState.count` 는 `setState` 함수 이후에 변경될 `counter` 값
  >
  > 위 두 값을 비교해서 다를 경우에만 렌더링이 되게 해준다.

  - **최적화**에 사용!!



### PureComponent

- `shouldComponentUpdate `를 알아서 구현
- `state` 값이 바뀌었는지 보고 판단
- 객체나 배열같이 복잡한 구조의 경우 바뀌었는지 어려워한다.

```react
onClick = () => {
        const newArray = this.state.array;
        newArray.push(1);
        this.setState({
            array:newArray
        });
    };
```

> 변경점을 모른다 - > 렌더링이 되지 않는다.



```react
 onClick = () => {
        this.setState({
            array:[...this.state.array, 1]
        });
    };
```

> 위 방식으로 접근해야 변경점을 인지 -> 렌더링이 된다.



### hooks에서는 `memo`