1. 다음과 같은 인덱스 시그니처를 포함한 객체 타입은 언제 쓰는 것이 좋을까요?

```typescript
const object: { [property: string]: any } = {};
```

답: 런타임을 돌리기 전까지 객체의 속성을 알 수 없을 때

2. 함수를 작성할 때 매개변수를 `readonly` 로 선언하면 좋은 점은 무엇이 있을까요?

답: 사이드 이펙트를 줄인다.

3. `readonly` 가 위처럼 좋은 점이 있어도 보완할 점이 있습니다. 이는 무엇이고 어떻게 보완할까요?

답: 
- readonly가 얕게 동작하여 readonly의 자식 값에는 readonly가 적용되지 않는다.
- 제너릭으로 직접 구현하거나 라이브러리를 사용한다.