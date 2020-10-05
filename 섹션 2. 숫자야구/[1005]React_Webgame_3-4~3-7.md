### 컴포넌트화

- 분리 이유
  - 코드의 간결화(가독성)
  - 성능 최적화
  - 코드의 재사용성



### 화살표 함수

- 안쓸경우

  ```react
  onChangeInput(e){
      this.setState({ // this에 접근할 수 없다.
          value:e.target.value,
      })
  }
  ```

  - 위 코드를 해결하기 위해서는 `constructor` 가 필요하다.

  ```react
  class NumberBaseball extends Component {
      constructor(props){
          super(props);
          this.state = {
              value = ""
          };
          this.onChangeInput = this.onChangeInput.bind(this) // 메서드 바인딩
      }
  }
  ```

 

### 배열의 변화

```react
const arr = [];
arr.push(1);
arr === arr // true 

const arr1 = []
const arr2 = [...arr1, 1]
arr1 === arr2 // false
```

> 첫번째 방식으로 했을 때 비교값이 true로 나오기 때문에 리액트가 변화를 감지하지 못한다.