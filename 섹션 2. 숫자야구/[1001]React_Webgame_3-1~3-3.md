### import 와 require

#### require : node의 모듈 시스템

- `module.exports` 한 스크립트를 가져와서 사용할 수 있다.
- 기존 스크립트로 사용하던 것을 node에 모듈을 이용해서 불러온다.

- `module.export` 랑 `export default` 비슷하고 어느정도 호환된다.

### 구조분해

> exports 되는게 객체나 배열일 경우, 구조 분해로 접근할 수 있따.



#### import

```react
export default NumberBaseball;
// 위의 경우로 export를 해줬을 경우
import NumberBaseball from  "./NumberBaseball"
```

---

```react
export const hello = "hello";
export const bye = "bye"
// 위의 경우로 export를 해줬을 경우(default)가 아닐 경우
import { hello, bye } from "./hello";
```



### map

> key : 리액트가 key를 보고 같은 컴포넌트인지 확인한다 ( 주의 ! )
>
> - 고유의 key 값을 줘야 한다.

```react
[].map((data ,idx) => {
    return <li key = {idx}>{data}</li>
})
```

> map의 인자 중 두번째 값은 몇 번째 인자인지 알려준다.
>
> 요소를 추가만 하는 배열의 경우는 idx 값을 key로 사용해도 되지만
>
> 삭제 기능이 있는 경우에는 사용하면 안된다.
>
> - idx를 사용할 경우 성능 최적화에서 문제가 발생한다.

