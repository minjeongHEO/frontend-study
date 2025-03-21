# nextjs 1 - 4

1. Next.js에서 colocation이란 무엇인지 설명해주세요.

_답_

```
코드, 데이터, 그리고 관련 리소스를 특정 컴포넌트나 페이지와 가까운 위치에 배치하는 방식
```

2. `clsx`는 어떤 라이브러리인가요?

_답_

```js
클래스 이름을 쉽게 전환할 수 있는 라이브러리입니다.

- 조건부 클래스 적용

클래스 이름을 특정 조건에 따라 동적으로 추가하거나 제외할 수 있습니다.

코드의 가독성을 높이고, 간단한 논리로 복잡한 클래스 구성을 처리합니다.

- 중복 제거 및 자동 병합

여러 클래스를 조합할 때 중복을 제거하고, 하나의 문자열로 병합합니다.

- Falsy 값 무시

null, undefined, false, 또는 빈 문자열 ""은 자동으로 무시됩니다.

```

3. Next.js는 글꼴을 어떻게 최적화하나요?

_답_

```
Next.js는 빌드 시점에 폰트를 다운로드하고, 이를 다른 정적 파일과 함께 호스팅합니다.
이로 인해 사용자가 애플리케이션을 방문할 때, 글꼴을 가져오기 위한 추가적인 네트워크 요청이 발생하지 않아 성능에 영향을 미치지 않습니다.
```
