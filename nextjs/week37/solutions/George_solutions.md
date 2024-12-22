## 1. 폰트를 최적화해야하는 이유를 설명하세요.
- 폰트가 변경되면 레이아웃 이동(CLS)가 발생합니다. CLS는 구글이 웹사이트의 성능과 사용자 경험을 평가하는 데 사용하는 지표인데, 폰트를 최적화 하면 CLS 점수를 향상시켜 검색 엔진 최적화에 기여할수 있습니다.
- 불필요한 폰트 파일을 네트워크 요청하지않아 로딩 속도가 향상돱나다.

## 2. next에서 image는 어떻게 최적화가 이루어지나요?
- 기본적으로 Lazy Loading을 제공해 사용자의 뷰포트에 이미지가 진입할 때만 로드합니다.
- 이미지 크기를 미리 지정하여 CLS를 방지합니다.
- 기기 크기와 화면 해상도에 맞는 적절한 이미지 크기를 자동으로 제공합니다.
- 다양한 옵션으로 최적화를 할 수 있습니다.
  - 지연 로딩 중 블러 처리: placeholder="blur"
  - 가장 큰 콘텐츠 페인트(LCP) 우선 순위 처리: priority

## 3. Next.js에서 레이아웃을 사용하는 이점을 설명하세요.
- 부분 렌더링을 통해 페이지 구성 요소만 업데이트되고 레이아웃은 렌더링되지 않습니다.