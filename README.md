#### 220726

리액트쿼리 4버전부터 react query -> @tanstack/react-query로 변경됨
import 별칭 절대 경로를 사용할려면 두가지 설정을 해줘야한다.
tsconfig.json 과 webpack 하지만 CRA 으로 리액트를 만들면 webpack이 안보인다.
그래서 직접 eject 해야하지만 그러면 복잡해지고 다시 집어 넣을 수 없어서
craco (create react app configuration override) 라는 라이브러리를 사용해 webpack alias 설정했다.
