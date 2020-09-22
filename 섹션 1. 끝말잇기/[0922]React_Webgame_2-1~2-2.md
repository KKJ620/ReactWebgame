### React Hooks

-  함수형 컴포넌트에 state랑 ref를 사용할 수 있게 해준다.  
- state 접근방법

```react
const [value, setValue] = React.userState("");

setValue((prevValue) => {
    return '정답 : ' + prevValue
});
```

- Ref 사용방법

```react
const inputRef = React.useRef(null);
<input ref={inputRef}/>
inputRef.current.focus();
```

