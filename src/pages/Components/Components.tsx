import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DownloadAllButton } from "@/components/DownloadButton";
import { ChevronLeftIcon, HomeIcon, LayoutGridIcon, BoxIcon, PanelLeftIcon, DownloadIcon, TabletSmartphoneIcon } from "lucide-react";
import { Link } from "react-router-dom";

// 컴포넌트 메뉴 아이템 정의
const menuItems = [
  { id: "button", name: "Button", icon: BoxIcon },
  { id: "card", name: "Card", icon: PanelLeftIcon },
  { id: "tabs", name: "Tabs", icon: TabletSmartphoneIcon },
  { id: "download", name: "DownloadButton", icon: DownloadIcon },
];

export const Components = () => {
  const [selectedComponent, setSelectedComponent] = useState("button");

  const renderComponentShowcase = () => {
    switch (selectedComponent) {
      case "button":
        return <ButtonShowcase />;
      case "card":
        return <CardShowcase />;
      case "tabs":
        return <TabsShowcase />;
      case "download":
        return <DownloadShowcase />;
      default:
        return <ButtonShowcase />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 왼쪽 사이드바 */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* 사이드바 헤더 */}
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <ChevronLeftIcon className="w-5 h-5" />
            <span className="font-medium">메인으로</span>
          </Link>
        </div>

        {/* 메뉴 타이틀 */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <LayoutGridIcon className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-lg">공통 컴포넌트</h2>
          </div>
          <p className="text-sm text-gray-500 mt-1">UI 컴포넌트 현황</p>
        </div>

        {/* 메뉴 리스트 */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setSelectedComponent(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                      selectedComponent === item.id
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 사이드바 푸터 */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500">
            총 {menuItems.length}개 컴포넌트
          </div>
        </div>
      </aside>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 p-8 overflow-auto">
        {renderComponentShowcase()}
      </div>
    </div>
  );
};

// Button 컴포넌트 쇼케이스
const ButtonShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Button</h1>
        <p className="text-gray-600 mt-2">다양한 변형(variant)과 크기(size)를 지원하는 버튼 컴포넌트</p>
        <p className="text-sm text-gray-500 mt-1">
          경로: <code className="bg-gray-100 px-1 py-0.5 rounded">src/components/ui/button.tsx</code>
        </p>
      </div>

      {/* Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Variants (변형)</CardTitle>
          <CardDescription>버튼의 시각적 스타일 변형</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button variant="default">Default</Button>
              <span className="text-xs text-gray-500">default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="destructive">Destructive</Button>
              <span className="text-xs text-gray-500">destructive</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="outline">Outline</Button>
              <span className="text-xs text-gray-500">outline</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="secondary">Secondary</Button>
              <span className="text-xs text-gray-500">secondary</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="ghost">Ghost</Button>
              <span className="text-xs text-gray-500">ghost</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="link">Link</Button>
              <span className="text-xs text-gray-500">link</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card>
        <CardHeader>
          <CardTitle>Sizes (크기)</CardTitle>
          <CardDescription>버튼의 크기 옵션</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button size="lg">Large</Button>
              <span className="text-xs text-gray-500">lg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="default">Default</Button>
              <span className="text-xs text-gray-500">default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="sm">Small</Button>
              <span className="text-xs text-gray-500">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="icon">
                <HomeIcon className="w-4 h-4" />
              </Button>
              <span className="text-xs text-gray-500">icon</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage */}
      <Card>
        <CardHeader>
          <CardTitle>사용법</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { Button } from "@/components/ui/button"

// 기본 사용
<Button>Click me</Button>

// variant 변경
<Button variant="destructive">Delete</Button>

// size 변경
<Button size="lg">Large Button</Button>

// 조합
<Button variant="outline" size="sm">Small Outline</Button>`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

// Card 컴포넌트 쇼케이스
const CardShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Card</h1>
        <p className="text-gray-600 mt-2">콘텐츠를 그룹화하는 카드 컴포넌트</p>
        <p className="text-sm text-gray-500 mt-1">
          경로: <code className="bg-gray-100 px-1 py-0.5 rounded">src/components/ui/card.tsx</code>
        </p>
      </div>

      {/* 실제 사용 예시 섹션 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">📌 실제 사용 예시</h2>
        <p className="text-sm text-blue-700">앱에서 실제로 사용되는 Card 스타일링 패턴입니다.</p>
      </div>

      {/* Favorite 페이지 스타일 */}
      <Card className="border border-gray-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-500">Favorite 페이지 - 수취인 카드</CardTitle>
          <CardDescription>수취인 정보를 표시하는 카드 스타일</CardDescription>
        </CardHeader>
        <CardContent>
          {/* 실제 Favorite 페이지 카드 예시 */}
          <Card className="flex flex-col items-center relative self-stretch w-full flex-none bg-white rounded-xl border border-solid border-variable-collection-BG-09-dfe3ec">
            <CardContent className="p-0 w-full">
              {/* 국가 + 이름 영역 */}
              <div className="flex items-center gap-4 px-5 py-4 w-full border-b border-variable-collection-BG-09-dfe3ec">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-lg">🇳🇵</div>
                <div className="flex flex-col">
                  <span className="font-body-14-SB text-variable-collection-grayscale-04-3a3f47 text-lg">Ashok Limbu</span>
                </div>
              </div>
              {/* 정보 영역 */}
              <div className="flex flex-col gap-1 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-variable-collection-grayscale-08-6e7781">연락처:</span>
                  <span className="text-sm text-variable-collection-grayscale-04-3a3f47">+977-9841234567</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-variable-collection-grayscale-08-6e7781">은행:</span>
                  <span className="text-sm text-variable-collection-grayscale-04-3a3f47">Nepal Bank Ltd. (1234567890)</span>
                </div>
              </div>
              {/* 버튼 영역 */}
              <div className="flex w-full border-t border-variable-collection-BG-09-dfe3ec">
                <button className="flex-1 py-3 text-sm text-variable-collection-blue-02-3182f6 font-medium hover:bg-blue-50 border-r border-variable-collection-BG-09-dfe3ec">
                  즐겨찾기 등록하기
                </button>
                <button className="flex-1 py-3 text-sm text-white font-medium bg-variable-collection-blue-02-3182f6 hover:bg-variable-collection-blue-03-1b64da">
                  송금하기
                </button>
              </div>
            </CardContent>
          </Card>
          <p className="text-xs text-gray-500 mt-3">
            사용 위치: <code className="bg-gray-100 px-1 py-0.5 rounded">src/screens/Favorite/Favorite.tsx</code>
          </p>
        </CardContent>
      </Card>

      {/* Transform 페이지 스타일 */}
      <Card className="border border-gray-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-500">Transform 페이지 - 송금 정보 카드</CardTitle>
          <CardDescription>환율 및 수수료 정보를 표시하는 카드 스타일</CardDescription>
        </CardHeader>
        <CardContent>
          {/* 실제 Transform 페이지 카드 예시 */}
          <Card className="w-full bg-variable-collection-BG-03-f4f7fd rounded-xl border-0">
            <CardContent className="flex flex-col items-start gap-2.5 p-5">
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-variable-collection-grayscale-08-6e7781">송금 환율</span>
                <span className="text-sm font-medium text-variable-collection-grayscale-04-3a3f47">10.11 KRW = 1 NPR</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-variable-collection-grayscale-08-6e7781">송금 수수료</span>
                <span className="text-sm font-medium text-variable-collection-grayscale-04-3a3f47">5,000 KRW</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-variable-collection-grayscale-08-6e7781">예상 소요 시간</span>
                <span className="text-sm font-medium text-variable-collection-grayscale-04-3a3f47">영업일 기준 1~2일</span>
              </div>
            </CardContent>
          </Card>
          <p className="text-xs text-gray-500 mt-3">
            사용 위치: <code className="bg-gray-100 px-1 py-0.5 rounded">src/screens/Transform/sections/FrameSubsection/FrameSubsection.tsx</code>
          </p>
        </CardContent>
      </Card>

      {/* 기본 카드 섹션 구분선 */}
      <div className="border-t border-gray-200 pt-8">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">📚 기본 컴포넌트 문서</h2>
          <p className="text-sm text-gray-600">shadcn/ui Card 컴포넌트의 기본 구조와 사용법입니다.</p>
        </div>
      </div>

      {/* 기본 카드 */}
      <Card>
        <CardHeader>
          <CardTitle>기본 카드 예시</CardTitle>
          <CardDescription>Card, CardHeader, CardTitle, CardDescription 조합</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            카드는 관련 콘텐츠를 그룹화하는 컨테이너입니다.
            헤더, 콘텐츠, 푸터 등 다양한 하위 컴포넌트로 구성됩니다.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline">취소</Button>
          <Button>확인</Button>
        </CardFooter>
      </Card>

      {/* 하위 컴포넌트 설명 */}
      <Card>
        <CardHeader>
          <CardTitle>하위 컴포넌트</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <code className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-mono">Card</code>
              <span className="text-gray-700">카드 컨테이너 (루트 컴포넌트)</span>
            </li>
            <li className="flex items-start gap-3">
              <code className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-mono">CardHeader</code>
              <span className="text-gray-700">카드 헤더 영역</span>
            </li>
            <li className="flex items-start gap-3">
              <code className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-mono">CardTitle</code>
              <span className="text-gray-700">카드 제목</span>
            </li>
            <li className="flex items-start gap-3">
              <code className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-mono">CardDescription</code>
              <span className="text-gray-700">카드 설명 텍스트</span>
            </li>
            <li className="flex items-start gap-3">
              <code className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-mono">CardContent</code>
              <span className="text-gray-700">카드 메인 콘텐츠 영역</span>
            </li>
            <li className="flex items-start gap-3">
              <code className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-mono">CardFooter</code>
              <span className="text-gray-700">카드 푸터 영역 (버튼 등)</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Usage */}
      <Card>
        <CardHeader>
          <CardTitle>사용법</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
    <CardDescription>설명</CardDescription>
  </CardHeader>
  <CardContent>
    <p>내용</p>
  </CardContent>
  <CardFooter>
    <Button>액션</Button>
  </CardFooter>
</Card>`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

// Tabs 컴포넌트 쇼케이스
const TabsShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tabs</h1>
        <p className="text-gray-600 mt-2">콘텐츠를 탭으로 구분하는 네비게이션 컴포넌트</p>
        <p className="text-sm text-gray-500 mt-1">
          경로: <code className="bg-gray-100 px-1 py-0.5 rounded">src/components/ui/tabs.tsx</code>
        </p>
      </div>

      {/* 탭 예시 */}
      <Card>
        <CardHeader>
          <CardTitle>탭 예시</CardTitle>
          <CardDescription>Radix UI 기반 탭 컴포넌트</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tab1">계정</TabsTrigger>
              <TabsTrigger value="tab2">비밀번호</TabsTrigger>
              <TabsTrigger value="tab3">설정</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>계정 정보</CardTitle>
                  <CardDescription>계정 관련 설정을 변경하세요.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">여기에 계정 관련 콘텐츠가 들어갑니다.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>비밀번호 변경</CardTitle>
                  <CardDescription>비밀번호를 변경하세요.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">여기에 비밀번호 변경 폼이 들어갑니다.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab3" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>설정</CardTitle>
                  <CardDescription>앱 설정을 관리하세요.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">여기에 설정 옵션들이 들어갑니다.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 하위 컴포넌트 설명 */}
      <Card>
        <CardHeader>
          <CardTitle>하위 컴포넌트</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <code className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm font-mono">Tabs</code>
              <span className="text-gray-700">탭 컨테이너 (루트 컴포넌트)</span>
            </li>
            <li className="flex items-start gap-3">
              <code className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm font-mono">TabsList</code>
              <span className="text-gray-700">탭 버튼들의 컨테이너</span>
            </li>
            <li className="flex items-start gap-3">
              <code className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm font-mono">TabsTrigger</code>
              <span className="text-gray-700">개별 탭 버튼</span>
            </li>
            <li className="flex items-start gap-3">
              <code className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm font-mono">TabsContent</code>
              <span className="text-gray-700">탭별 콘텐츠 영역</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Usage */}
      <Card>
        <CardHeader>
          <CardTitle>사용법</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">탭 1</TabsTrigger>
    <TabsTrigger value="tab2">탭 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    탭 1 내용
  </TabsContent>
  <TabsContent value="tab2">
    탭 2 내용
  </TabsContent>
</Tabs>`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

// DownloadButton 컴포넌트 쇼케이스
const DownloadShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">DownloadButton</h1>
        <p className="text-gray-600 mt-2">소스 코드를 ZIP 파일로 다운로드하는 버튼 컴포넌트</p>
        <p className="text-sm text-gray-500 mt-1">
          경로: <code className="bg-gray-100 px-1 py-0.5 rounded">src/components/DownloadButton.tsx</code>
        </p>
      </div>

      {/* 버튼 예시 */}
      <Card>
        <CardHeader>
          <CardTitle>버튼 예시</CardTitle>
          <CardDescription>실제 동작하는 다운로드 버튼들</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center gap-2">
              <DownloadAllButton />
              <span className="text-xs text-gray-500">DownloadAllButton</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 컴포넌트 설명 */}
      <Card>
        <CardHeader>
          <CardTitle>컴포넌트 설명</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-3">
            <code className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-mono">DownloadAllButton</code>
            <span className="text-gray-700">전체 소스 다운로드 버튼</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">모든 화면과 공통 파일을 ZIP으로 다운로드합니다. Props 없이 사용 가능합니다.</p>
        </CardContent>
      </Card>

      {/* Usage */}
      <Card>
        <CardHeader>
          <CardTitle>사용법</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { DownloadAllButton } from "@/components/DownloadButton"

// 전체 소스 다운로드
<DownloadAllButton />`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};
