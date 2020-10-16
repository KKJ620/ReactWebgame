### ref

##### class에서 기존 ref 사용법

```react
class Test extends Component {
    inputRef;
    onClick = () => {
        this.inputRef.focus();
    }
    render(){
        return(
        	<>
            	<input
                	ref = {(c) => {this.inputRef = c;}} 
                	...
                />
        	</>
        )
    }
}
```



##### hooks처럼 ref 사용하는 법

```react
import React, {Component, createRef} from "react";

class Test extends Component {
    inputRef = createRef();

    onClick = () => {
        this.inputRef.current.focus();
    }

    render(){
        return(
        	<>
            	<input
                	ref = {this.inputRef}
                    ...
                />
        	</>
        );
    }
}
```

> `this.inputRef.focus()` => `this.inputRef.current.focus()`

- 이전 방식에서는 함수 설정으로 미세한 조정이 가능하다.
  - `console.log` 나 다른 동작을 추가하여 자유도가 증가한다.



### 부모로 받은 `props` 값을 변경하고 싶을 때

- 자식은 `state` 에 부모로부터 받은 `props` 값을 저장해 변경 가능하다.
  - 부모한테 영향을 끼치면 안된다.

```react
const Try = (props) => {
    //부모로부터 받은 props 중 result 값을 자신의 state 값에 저장
    const [result, setResult] = useState(props.result);
    
    const onClick = () => {
        setResult('1'); //부모로부터 받은 props 값을 setResult를 통해 값 변경
    };
    
    return (
    	<li>
        	<div onClick={onClick}>{result}</div>
        </li>
    )
}
```



### constructor가 쓰이는 경우

```react
class Test extends Component {
    constructor(props){
      super(props);
      //다른 동작을 추가 할 수 있다, 정밀한 동작
      //ex) props로 받은 값을 필터링해서 state에 저장
      const filtered = this.props.filter(() => {
         ... 
      });
      this.state = {
          result : filtered
      }
    }
}
```

