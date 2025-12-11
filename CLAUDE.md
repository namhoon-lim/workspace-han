# Hanpass Favorite 프로젝트 규칙

## 프로젝트 개요
- **스택**: React + TypeScript + Vite + Tailwind CSS
- **용도**: 한패스 송금 앱 퍼블리싱

---

## 1. Tailwind 디자인 토큰 규칙

### 필수 원칙
- **매직넘버 사용 금지**: 하드코딩된 픽셀값 대신 `tailwind.config.js`에 정의된 토큰 사용
- **일관성 유지**: 동일한 UI 요소는 동일한 토큰 사용
- **임의값 클래스 사용 절대 금지**: `w-[123px]`, `text-[#abc]`, `font-['...']` 등 대괄호 임의값 사용 금지

### 임의값 금지 규칙
모든 색상, 폰트, 간격, 사이즈 등은 반드시 `tailwind.config.js`의 theme 토큰으로만 정의합니다.

#### ❌ 금지 패턴
```tsx
// 픽셀값 임의 사용
<div className="w-[300px] ml-[140px]">
// 색상 임의 사용
<span className="text-[#ff5500] bg-[rgb(255,0,0)]">
// 폰트 임의 사용
<p className="font-['Pretendard-SemiBold']">
```

#### ✅ 올바른 사용법
```tsx
// tailwind.config.js에 토큰 정의 후 사용
<div className="min-w-input-container ml-140">
// CSS 변수 기반 색상 토큰 사용
<span className="text-variable-collection-primary-primary-0d56e4">
// font-family 토큰 사용
<p className="font-body-14-SB">
```

#### 새 토큰 추가 방법
1. `tailwind.config.js`의 `theme.extend` 해당 속성에 토큰 추가
2. 의미 있는 토큰명 사용 (예: `input-container`, `card-header`)
3. 주석으로 용도 명시

### 정의된 토큰 (tailwind.config.js)

#### Height 토큰
```js
height: {
  'status-bar': '44px',
  'nav-header': '56px',
  'input-field': '50px',
  'button-lg': '56px',
  'button-md': '48px',
  'card-sm': '54px',
  'card-md': '86px',
  'card-lg': '120px',
  // ... 추가 토큰
}
```

#### Width 토큰
```js
width: {
  'screen-min': '375px',
  'screen-max': '414px',
  'status-content': '283px',
  'clock-time': '54px',
  'mini-logo': '43.5px',
  // ... 추가 토큰
}
```

#### Gap/Spacing 토큰
```js
gap: {
  '5px': '5px',
  '8-91': '8.91px',
  // ... 추가 토큰
}
```

### 사용 예시
```tsx
// ❌ 잘못된 예시 - 매직넘버 사용
<div className="h-[44px] w-[375px]">

// ✅ 올바른 예시 - 토큰 사용
<div className="h-44 w-375">
```

---

## 2. 상태관리 구조 규칙

### 디렉토리 구조
```
src/store/
├── types.ts        # 타입 정의
├── reducer.ts      # 리듀서 함수 및 초기 상태
├── AppContext.tsx  # Context Provider 및 커스텀 훅
└── index.ts        # 모듈 export
```

### 타입 정의 (types.ts)
```typescript
// 사용자 정보
interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

// 즐겨찾기 수신자
interface FavoriteRecipient {
  id: string;
  name: string;
  country: string;
  accountNumber: string;
  bankName: string;
}

// 송금 정보
interface TransferInfo {
  sendAmount: number;
  receiveAmount: number;
  exchangeRate: number;
  fee: number;
  currency: {
    from: string;
    to: string;
  };
}
```

### Context 사용 패턴
```tsx
// Provider 감싸기 (App.tsx 또는 main.tsx)
import { AppProvider } from '@/store';

<AppProvider>
  <App />
</AppProvider>

// 컴포넌트에서 사용
import { useAppState, useAppDispatch } from '@/store';

const MyComponent = () => {
  const { user, favorites } = useAppState();
  const dispatch = useAppDispatch();

  // 액션 디스패치
  dispatch({ type: 'SET_USER', payload: userData });
};
```

### 액션 타입
```typescript
type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_FAVORITES'; payload: FavoriteRecipient[] }
  | { type: 'ADD_FAVORITE'; payload: FavoriteRecipient }
  | { type: 'REMOVE_FAVORITE'; payload: string }
  | { type: 'SET_TRANSFER_INFO'; payload: TransferInfo }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };
```

---

## 3. API 서비스 레이어 규칙

### 디렉토리 구조
```
src/services/api/
├── client.ts           # API 클라이언트 (fetch 래퍼)
├── transferService.ts  # 송금 관련 API
├── favoriteService.ts  # 즐겨찾기/수신자 API
├── userService.ts      # 사용자/인증 API
└── index.ts            # 모듈 export
```

### API 클라이언트 (client.ts)
```typescript
// 기본 설정
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

// 공통 fetch 래퍼
async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T>

// 에러 처리
class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  )
}
```

### 서비스 사용 패턴
```typescript
import { transferService, favoriteService, userService } from '@/services/api';

// 송금 API
const rates = await transferService.getExchangeRates('KRW', 'NPR');
const result = await transferService.initiateTransfer(transferData);

// 즐겨찾기 API
const favorites = await favoriteService.getFavorites();
await favoriteService.addFavorite(recipientData);

// 사용자 API
const user = await userService.getCurrentUser();
await userService.login(credentials);
```

### API 응답 타입
```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
```

---

## 4. 컴포넌트 작성 규칙

### 파일 구조
```
src/screens/[ScreenName]/
├── [ScreenName].tsx           # 메인 컴포넌트
├── sections/                   # 섹션별 분리
│   └── [SectionName]/
│       └── [SectionName].tsx
└── index.ts                    # export
```

### 컴포넌트 템플릿
```tsx
import { FC } from 'react';

interface Props {
  // props 정의
}

export const ComponentName: FC<Props> = ({ ...props }) => {
  // 상태 관리
  const { state } = useAppState();

  // API 호출
  // 이벤트 핸들러

  return (
    <div className="tailwind-classes">
      {/* JSX */}
    </div>
  );
};
```

---

## 5. 이미지 리소스 규칙

### 외부 이미지 URL
- **CDN 경로**: `https://c.animaapp.com/ppTMEOHB/img/`
- 모든 이미지는 위 CDN 경로 사용

### 사용 예시
```tsx
<img
  src="https://c.animaapp.com/ppTMEOHB/img/battery-2.svg"
  alt="Battery"
/>
```

---

## 6. 스타일링 규칙

### CSS 변수 (index.css)
```css
:root {
  --variable-collection-basic-white: #ffffff;
  --variable-collection-basic-black: #000000;
  --variable-collection-blue-01-0d1458: #0d1458;
  --variable-collection-BG-03-f4f7fd: #f4f7fd;
  /* ... 추가 변수 */
}
```

### Tailwind에서 CSS 변수 사용
```tsx
<div className="bg-variable-collection-basic-white text-variable-collection-basic-black">
```

---

## 7. Import 규칙

### 경로 별칭
```typescript
// tsconfig.json에 정의된 별칭 사용
import { Button } from '@/components/ui/button';
import { useAppState } from '@/store';
import { transferService } from '@/services/api';
```

### Import 순서
1. React 및 외부 라이브러리
2. 내부 컴포넌트 (@/components)
3. 상태관리 (@/store)
4. 서비스 (@/services)
5. 유틸리티 (@/lib)
6. 타입 정의
