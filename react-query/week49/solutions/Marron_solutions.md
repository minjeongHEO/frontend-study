# Infinite Queries, Initial Query Data

1. `useQuery`와 `useInfiniteQuery`의 응답 data 차이를 설명해주세요.

_답_

- `useQuery` 응답 데이터 객체
- `useInfiniteQuery` {pages, pageParams} 객체 형태

2. API가 cursor 기반으로 페이지네이션하는 방식과 cursor를 반환하지 않는 경우의 차이를 설명해주세요.

_답_

Cursor-based

- API 응답에 다음 페이지를 요청할 때 사용할 cursor 값을 포함시킴.
- 이후 요청에서 이 커서 값을 사용해 다음 데이터를 가져옴.

- 장단점:
  - 무한스크롤, 동적 데이터에 적합. 성능, 페이징 좋음
  - 특정 페이지 이동이 어렵고 정렬 기준이 변경되면 커서값이

Page-based

- page 또는 offset 값을 사용하여 데이터를 특정 위치에서 가져옴.
- 일반적으로 ?page=1, ?page=2 같은 방식으로 요청함.

- 장단점:
  - 특정 페이지로 바로 이동할 수 있음
  - 대량 데이터 성능 저하, 중간에 데이터 추가/삭제 시 문제가 생길 수 있음

| 비교 항목               | Cursor-based Pagination                | Page-based (Offset) Pagination        |
| ----------------------- | -------------------------------------- | ------------------------------------- |
| **페이징 방식**         | `nextCursor` 기반으로 가져옴           | `page` 또는 `offset` 값으로 가져옴    |
| **특정 페이지 이동**    | ❌ 어려움 (순차적으로 이동해야 함)     | ✅ 가능 (`?page=5` 같은 요청 가능)    |
| **대량 데이터 성능**    | ✅ 빠름 (필요한 부분만 가져옴)         | ❌ 느림 (`OFFSET`이 클수록 성능 저하) |
| **데이터 추가/삭제 시** | ✅ 안전 (이미 본 데이터가 밀리지 않음) | ❌ 데이터가 밀릴 위험 있음            |
| **정렬 변경 시**        | ❌ 커서가 무용지물 될 가능성 있음      | ✅ 페이지 단위로 가져오므로 문제 없음 |

3. initialData가 완전히 fresh하지 않다면 어떤 옵션을 사용하는 것이 좋은지, 이 옵션에 대해 설명해주세요.

_답_

```
initialDataUpdatedAt

initialData가 staleTime보다 오래된 경우 마운트 시 데이터를 다시 가져올 수 있도록 합니다.
```
