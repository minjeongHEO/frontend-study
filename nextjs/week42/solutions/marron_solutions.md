# nextjs

## Loading UI and Streaming, Redirecting, Route Groups

1. loading.tsx 파일을 추가하면 어떠한 방식으로 로딩처리가 되는지 설명해주세요.

_답_

```
React Suspense를 사용해 비동기 데이터 로드 및 렌더링이 완료되기 전 로딩 상태를 사용자에게 보여줍니다.

사용자가 특정 경로로 접근하면, 해당 페이지 또는 레이아웃에서 필요한 데이터를 서버에서 가져오거나 컴포넌트를 비동기로 렌더링합니다.

데이터 로드가 완료되기 전까지 React의 Suspense 메커니즘에 의해 loading.tsx에 정의된 로딩 UI가 클라이언트에 표시됩니다.

데이터가 로드되거나 렌더링이 완료되면, loading.tsx는 자동으로 사라지고 실제 콘텐츠가 화면에 표시됩니다.
```

2. 프로그래밍 방식으로 사용자를 내비게이트할 필요가 없다면 <Link> 컴포넌트를 사용하는 것이 좋습니다.
   어떤 경우에 useRouter()를 사용하는지 설명해주세요.

_답_

```
프로그래밍적으로 페이지를 이동시켜야 할 때 (예: 로그인 후 대시보드로 이동)
조건부 내비게이션 (예: 특정 조건이 만족되었을 때만 페이지 이동)
URL 쿼리 파라미터를 동적으로 변경할 때 (예: 동적 검색 결과 페이지)
폼 제출 후 페이지 이동 (예: 제출 후 성공 메시지 페이지로 이동)

그리고 useRouter는 프리패칭 기능이 없다.
```

3. app/(shop)/layout.js를 사용하는 /cart에서 app/(marketing)/layout.js를 사용하는 /blog로 내비게이션하는 경우
   어떻게 되나요?

_답_

```
전체 페이지 로드가 발생합니다.
해당 경로에 지정된 레이아웃이 동적으로 새롭게 적용되며 전체 페이지가 로드된다.
```
