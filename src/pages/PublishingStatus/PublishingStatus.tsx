import { FolderIcon, CheckCircleIcon, ClockIcon, ExternalLinkIcon, CopyIcon, LockIcon, CheckIcon, LayoutGridIcon } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { DownloadAllButton } from "@/components/DownloadButton";

// 퍼블리싱 화면 데이터
type PublishingItem = {
  id: string;
  name: string;
  type?: "menu" | "section"; // type을 optional로 변경하거나 section과 menu를 명확히 구분해야 합니다.
  path?: string; // path를 optional로 변경
  status?: "completed" | "pending"; // status를 optional로 변경
  description?: string; // description을 optional로 변경
};

const publishingData: PublishingItem[] = [
  // 숨김 처리: 즐겨찾기
  // {
  //   id: "favorite",
  //   name: "즐겨찾기",
  //   path: "/favoriteu95375",
  //   status: "completed",
  //   description: "즐겨찾기 및 최근 송금내역 관리 화면",
  // },
  // 숨김 처리: 해외송금
  // {
  //   id: "transform",
  //   name: "해외송금",
  //   path: "/transformu95750",
  //   status: "completed",
  //   description: "송금 변환 화면",
  // },
  {
    id: "section-login",
    name: "로그인",
    type: "section",
  },
  {
    id: "login",
    name: "로그인",
    path: "/loginu95001",
    status: "completed",
    description: "로그인 화면 - 이메일/휴대폰 및 비밀번호 입력",
  },
  {
    id: "element",
    name: "신규 쿠폰 알림",
    path: "/elementu95002",
    status: "completed",
    description: "신규 쿠폰 알림 팝업",
  },
  {
    id: "elementscreen",
    name: "메인 랜딩 팝업",
    path: "/elementscreenu95003",
    status: "completed",
    description: "메인 랜딩 페이지 팝업",
  },
  {
    id: "elementwrapper",
    name: "보이스피싱 주의",
    path: "/elementwrapperu95004",
    status: "completed",
    description: "보이스피싱 주의 안내 팝업",
  },
  {
    id: "screen4",
    name: "개인정보 업데이트",
    path: "/screen4u95005",
    status: "completed",
    description: "개인정보 업데이트 요청 팝업",
  },
  {
    id: "home",
    name: "홈 (로그인 전) 1",
    path: "/homeu95006",
    status: "completed",
    description: "홈 화면 - 송금 방식 선택",
  },
  {
    id: "homescreen",
    name: "홈 (로그인 전) 2",
    path: "/homescreenu95007",
    status: "completed",
    description: "홈 화면 - 금액 입력",
  },
  {
    id: "homewrapper",
    name: "홈 (로그인 전) 3",
    path: "/homewrapperu95008",
    status: "completed",
    description: "홈 화면 - 은행 정보",
  },
  {
    id: "screen8",
    name: "홈 (로그인 전) 4",
    path: "/screen8u95009",
    status: "completed",
    description: "홈 화면 - 거래 내역",
  },
  {
    id: "common",
    name: "비밀번호 입력",
    path: "/commonu95010",
    status: "completed",
    description: "비밀번호 입력 화면",
  },
  {
    id: "section-signup",
    name: "회원가입",
    type: "section",
  },
  {
    id: "signup",
    name: "이용약관 동의",
    path: "/signupu95003",
    status: "completed",
    description: "회원가입 이용약관 동의 화면",
  },
  {
    id: "signup-wrapper",
    name: "이용약관 동의 2",
    path: "/signupwrapperu95004",
    status: "completed",
    description: "회원가입 이용약관 동의 (체크박스 기능)",
  },
  {
    id: "signup-screen",
    name: "서비스 이용약관 상세",
    path: "/signupscreenu95005",
    status: "completed",
    description: "서비스 이용약관 상세 내용 화면",
  },
  {
    id: "div-wrapper",
    name: "국적 선택",
    path: "/nationalityu95006",
    status: "completed",
    description: "국적 선택 화면 (내국인/중국인)",
  },
  {
    id: "signup-phone-email",
    name: "휴대폰/이메일 입력",
    path: "/signupphoneemailu95007",
    status: "completed",
    description: "휴대폰번호 또는 이메일 회원가입 입력 화면",
  },
  {
    id: "verification-code",
    name: "인증번호 입력",
    path: "/verificationcodeu95008",
    status: "completed",
    description: "휴대폰/이메일 인증번호 입력 화면",
  },
  {
    id: "verification-code-timeout",
    name: "인증번호 시간 초과",
    path: "/verificationcodetimeoutu95013",
    status: "completed",
    description: "인증번호 입력 시간 초과 팝업",
  },
  {
    id: "signup-email-tab",
    name: "이메일 탭 선택",
    path: "/signupemailtabu95009",
    status: "completed",
    description: "이메일 탭 선택 상태 화면",
  },
  {
    id: "signup-email-input",
    name: "이메일 입력 (입력됨)",
    path: "/signupemailinputu95010",
    status: "completed",
    description: "이메일 입력 완료 상태 화면",
  },
  {
    id: "signup-phone-input",
    name: "휴대폰번호 입력 (입력됨)",
    path: "/signupphoneinputu95011",
    status: "completed",
    description: "휴대폰번호 입력 완료 상태 화면",
  },
  {
    id: "verification-code-wechat",
    name: "인증번호 입력 (WeChat)",
    path: "/verificationcodewechatu95012",
    status: "completed",
    description: "WeChat 스타일 인증번호 입력 화면",
  },
  {
    id: "new-account-phone-input",
    name: "휴대폰번호 입력 (이메일 가입)",
    path: "/newaccountphoneinputu95014",
    status: "completed",
    description: "이메일 회원가입 시 휴대폰번호 입력 화면",
  },
  {
    id: "new-account-password-filled",
    name: "비밀번호 설정 (입력됨)",
    path: "/newaccountpasswordfilledu95015",
    status: "completed",
    description: "비밀번호 설정 완료 상태 화면",
  },
  {
    id: "new-account-password",
    name: "비밀번호 설정",
    path: "/newaccountpasswordu95016",
    status: "completed",
    description: "비밀번호 설정 초기 화면",
  },
  {
    id: "new-account-referral",
    name: "파트너사 코드 입력",
    path: "/newaccountreferralu95017",
    status: "completed",
    description: "파트너사/추천인 코드 입력 화면",
  },
  {
    id: "new-account-password-wechat",
    name: "비밀번호 설정 (WeChat)",
    path: "/newaccountpasswordwechatu95018",
    status: "completed",
    description: "WeChat 스타일 비밀번호 설정 화면",
  },
  {
    id: "photo-confirmation",
    name: "사진 확인",
    path: "/photoconfirmationu95019",
    status: "completed",
    description: "사진 확인 팝업 (재시도/확인)",
  },
  {
    id: "password-reset",
    name: "비밀번호 재설정",
    path: "/passwordresetu95020",
    status: "completed",
    description: "비밀번호 재설정 화면 (요구사항 표시)",
  },
  {
    id: "selfie-capture",
    name: "셀카 촬영",
    path: "/selfiecaptureu95021",
    status: "completed",
    description: "셀카 촬영 화면 (얼굴 가이드)",
  },
  {
    id: "selfie-verification",
    name: "셀카인증 진행중",
    path: "/selfieverificationu95022",
    status: "completed",
    description: "셀카 인증 진행 중 화면",
  },
  {
    id: "password-input-keypad",
    name: "비밀번호 입력 (키패드)",
    path: "/passwordinputkeypadu95023",
    status: "completed",
    description: "iOS 스타일 숫자 키패드 비밀번호 입력 화면",
  },
  {
    id: "section-verification",
    name: "인증",
    type: "section",
  },
  {
    id: "verification-steps",
    name: "인증 단계",
    path: "/verificationstepsu95024",
    status: "completed",
    description: "KYC 인증 단계 진행 화면",
  },
  {
    id: "id-registration-method",
    name: "신분증 등록 방법",
    path: "/idregistrationmethodu95025",
    status: "completed",
    description: "신분증 등록 방법 선택 화면",
  },
  {
    id: "capture-tips",
    name: "촬영 안내",
    path: "/capturetipsu95026",
    status: "completed",
    description: "신분증 촬영 안내 화면",
  },
  {
    id: "selfie-capture-countdown",
    name: "셀카 촬영 카운트다운",
    path: "/selfiecapturecountdownu95027",
    status: "completed",
    description: "셀카 촬영 카운트다운 화면",
  },
  {
    id: "photo-confirm-dialog",
    name: "사진 확인 다이얼로그",
    path: "/photoconfirmdialogu95028",
    status: "completed",
    description: "촬영된 사진 확인 팝업",
  },
  {
    id: "referral-code-input",
    name: "추천인 코드 입력",
    path: "/referralcodeinputu95029",
    status: "completed",
    description: "추천인 코드 입력 화면 (여권 안내)",
  },
  {
    id: "id-front-capture",
    name: "신분증 앞면 촬영",
    path: "/idfrontcaptureu95030",
    status: "completed",
    description: "신분증 앞면 촬영 화면",
  },
  {
    id: "id-type-selection",
    name: "신분증 종류 선택",
    path: "/idtypeselectiou95031",
    status: "completed",
    description: "신분증 종류 선택 화면 (주민등록증/운전면허증/여권)",
  },
  {
    id: "fund-source-selection",
    name: "자금 출처 선택",
    path: "/fundsourceselectiou95032",
    status: "completed",
    description: "자금 출처 선택 화면",
  },
  {
    id: "customer-info-form",
    name: "고객 정보 입력",
    path: "/customerinfoformu95033",
    status: "completed",
    description: "고객 정보 입력 폼 화면",
  },
  {
    id: "occupation-selection",
    name: "직업 선택",
    path: "/occupationselectiou95034",
    status: "completed",
    description: "직업 선택 화면",
  },
  {
    id: "customer-verification",
    name: "고객 정보 확인",
    path: "/customerverificatiou95035",
    status: "completed",
    description: "고객 정보 확인 화면",
  },
  {
    id: "wechat-verification",
    name: "WeChat 정보 확인",
    path: "/wechatverificatiou95036",
    status: "completed",
    description: "WeChat 정보 확인 화면",
  },
  {
    id: "address-input-method",
    name: "주소 입력 방법",
    path: "/addressinputmethodu95037",
    status: "completed",
    description: "주소 입력 방법 선택 화면 (직접 입력/사진 업로드)",
  },
  {
    id: "address-direct-input",
    name: "주소 직접 입력",
    path: "/addressdirectinputu95038",
    status: "completed",
    description: "주소 직접 입력 화면",
  },
  {
    id: "transaction-purpose",
    name: "거래목적 선택",
    path: "/transactionpurposeu95039",
    status: "completed",
    description: "거래목적 선택 바텀시트",
  },
  {
    id: "signup-history-dialog",
    name: "가입내역 다이얼로그",
    path: "/signuphistorydialogu95040",
    status: "completed",
    description: "기존 가입내역 확인 다이얼로그",
  },
  {
    id: "address-photo-confirm",
    name: "주소 사진 확인",
    path: "/addressphotoconfirmu95041",
    status: "completed",
    description: "주소 사진 촬영 후 확인 화면",
  },
  {
    id: "address-search-result",
    name: "주소 검색 결과",
    path: "/addresssearchresultu95042",
    status: "completed",
    description: "주소 검색 결과 목록 화면",
  },
  {
    id: "signup-complete-approved",
    name: "회원가입 완료 (승인)",
    path: "/signupcompleteu95043",
    status: "completed",
    description: "회원가입 완료 화면 (신분증 승인됨)",
  },
  {
    id: "address-photo-upload",
    name: "주소 사진 업로드",
    path: "/addressphotouploadu95044",
    status: "completed",
    description: "주소지 사진 업로드 화면",
  },
  {
    id: "address-detail-input",
    name: "상세 주소 입력",
    path: "/addressdetailinputu95045",
    status: "completed",
    description: "상세 주소 입력 화면",
  },
  {
    id: "address-search-api",
    name: "주소 검색 API",
    path: "/addresssearchapiu95046",
    status: "completed",
    description: "주소 검색 API 화면",
  },
  {
    id: "signup-complete-pending",
    name: "회원가입 완료 (대기)",
    path: "/signupcompletependingu95047",
    status: "completed",
    description: "회원가입 완료 화면 (신분증 승인 대기)",
  },
  {
    id: "section-account",
    name: "Account",
    type: "section",
  },
  {
    id: "account",
    name: "계좌관리",
    path: "/accountu95048",
    status: "completed",
    description: "계좌 관리 메인 화면",
  },
  {
    id: "screen6",
    name: "주계좌 선택",
    path: "/screen6u95049",
    status: "completed",
    description: "주계좌 선택 화면",
  },
  {
    id: "accountscreen",
    name: "계좌내역조회 안내",
    path: "/accountscreenu95050",
    status: "completed",
    description: "계좌내역 조회 안내 화면",
  },
  {
    id: "divwrapper",
    name: "계좌거래내역 조회",
    path: "/divwrapperu95051",
    status: "completed",
    description: "계좌 거래내역 조회 화면",
  },
  {
    id: "selfcheckauth",
    name: "셀프체크 인증",
    path: "/selfcheckauthu95052",
    status: "completed",
    description: "셀카 촬영 인증 화면",
  },
  {
    id: "accountwrapper",
    name: "계좌관리 2",
    path: "/accountwrapperu95053",
    status: "completed",
    description: "계좌 관리 화면 2",
  },
  {
    id: "loginscreen",
    name: "사진 확인",
    path: "/loginscreenu95054",
    status: "completed",
    description: "촬영된 사진 확인 화면",
  },
  {
    id: "accountverify",
    name: "계좌 인증",
    path: "/accountverifyu95055",
    status: "completed",
    description: "계좌 인증 화면",
  },
  {
    id: "pinentry",
    name: "PIN 입력 진입",
    path: "/pinentryu95056",
    status: "completed",
    description: "PIN 입력 진입 화면",
  },
  {
    id: "pininput",
    name: "PIN 번호 입력",
    path: "/pininputu95057",
    status: "completed",
    description: "PIN 번호 입력 화면",
  },
  {
    id: "pinconfirm",
    name: "PIN 확인",
    path: "/pinconfirmu95058",
    status: "completed",
    description: "PIN 확인 화면",
  },
  {
    id: "accountmain2",
    name: "계좌등록 메인",
    path: "/accountmain2u95059",
    status: "completed",
    description: "계좌등록 메인 화면 (은행 선택 및 키패드)",
  },
  {
    id: "withdrawcomplete",
    name: "출금계좌 등록 완료",
    path: "/withdrawcompleteu95060",
    status: "completed",
    description: "출금계좌 등록 완료 화면",
  },
  {
    id: "foreignidinput",
    name: "외국인등록번호 입력",
    path: "/foreignidinputu95061",
    status: "completed",
    description: "외국인등록번호 입력 화면",
  },
  {
    id: "withdrawfailed",
    name: "출금계좌 등록 실패",
    path: "/withdrawfailedu95062",
    status: "completed",
    description: "출금계좌 등록 실패 화면",
  },
  {
    id: "autowithdrawconsent",
    name: "자동출금 동의",
    path: "/autowithdrawconsentu95063",
    status: "completed",
    description: "자동출금 동의 화면",
  },
  {
    id: "authfailure",
    name: "인증 실패",
    path: "/authfailureu95064",
    status: "completed",
    description: "본인인증 실패 화면",
  },
  {
    id: "authmethodselect",
    name: "인증 방법 선택",
    path: "/authmethodselectu95065",
    status: "completed",
    description: "본인인증 방법 선택 화면",
  },
  {
    id: "emailinput",
    name: "이메일 입력",
    path: "/emailinputu95066",
    status: "completed",
    description: "이메일 입력 화면",
  },
  {
    id: "authinfoinput",
    name: "인증 정보 입력",
    path: "/authinfoinputu95067",
    status: "completed",
    description: "본인인증 정보 입력 화면",
  },
  {
    id: "certificateselect",
    name: "공동인증서 선택",
    path: "/certificateselectu95068",
    status: "completed",
    description: "공동인증서 선택 화면",
  },
  {
    id: "authcodeinput",
    name: "인증번호 입력",
    path: "/authcodeinputu95069",
    status: "completed",
    description: "인증번호 입력 화면",
  },
  {
    id: "serviceterms",
    name: "서비스 이용약관",
    path: "/servicetermsu95070",
    status: "completed",
    description: "서비스 이용약관 화면",
  },
  {
    id: "certificateimportguide",
    name: "공동인증서 가져오기 안내",
    path: "/certificateimportguideu95071",
    status: "completed",
    description: "공동인증서 가져오기 안내 화면",
  },
  {
    id: "certificateselectempty",
    name: "공동인증서 선택 (없음)",
    path: "/certificateselectemptyu95072",
    status: "completed",
    description: "공동인증서가 없는 경우 선택 화면",
  },
  {
    id: "certificatepasswordkeyboard",
    name: "인증서 비밀번호 입력 (키보드)",
    path: "/certificatepasswordkeyboardu95073",
    status: "completed",
    description: "인증서 비밀번호 입력 화면 (점 표시)",
  },
  {
    id: "certificateconfirmkeyboard",
    name: "인증서 비밀번호 확인 (키보드)",
    path: "/certificateconfirmkeyboardu95074",
    status: "completed",
    description: "인증서 비밀번호 확인 입력 화면",
  },
  {
    id: "simpleauthselect",
    name: "간편인증 선택",
    path: "/simpleauthselectu95075",
    status: "completed",
    description: "간편인증 방법 선택 화면",
  },
  {
    id: "cardverification",
    name: "카드 본인인증",
    path: "/cardverificationu95076",
    status: "completed",
    description: "카드 본인인증 정보 입력 화면",
  },
  {
    id: "carrierselect",
    name: "통신사 선택",
    path: "/carrierselectu95077",
    status: "completed",
    description: "통신사 선택 화면",
  },
  {
    id: "accountmanagement",
    name: "계좌관리 메인",
    path: "/accountmanagementu95078",
    status: "completed",
    description: "계좌관리 메인 화면",
  },
  {
    id: "arsverification",
    name: "ARS 인증",
    path: "/arsverificationu95079",
    status: "completed",
    description: "ARS 인증 화면",
  },
  {
    id: "autowithdrawfailed",
    name: "자동출금 등록 실패",
    path: "/autowithdrawfailedu95080",
    status: "completed",
    description: "자동출금 등록 실패 화면",
  },
  {
    id: "autowithdrawcomplete",
    name: "자동출금 완료",
    path: "/autowithdrawcompleteu95081",
    status: "completed",
    description: "자동출금 이체 동의 완료 화면",
  },
  {
    id: "selfieverificationprogress",
    name: "셀카인증 진행중",
    path: "/selfieverificationprogressu95082",
    status: "completed",
    description: "셀카인증 진행중 화면",
  },
  {
    id: "passportinfoinput",
    name: "여권정보 입력",
    path: "/passportinfoinputu95083",
    status: "completed",
    description: "여권정보 입력 화면",
  },
  {
    id: "section-overseasremit",
    name: "OverseasRemit",
    type: "section",
  },
  {
    id: "overseasremit",
    name: "해외송금 메인",
    path: "/overseasremitu95084",
    status: "completed",
    description: "해외송금 메인 화면",
  },
  {
    id: "overseasremitscreen",
    name: "해외송금 금액 입력",
    path: "/overseasremitscreenu95085",
    status: "completed",
    description: "해외송금 금액 입력 화면",
  },
  {
    id: "overseasremitwrapper",
    name: "해외송금 대상자 선택",
    path: "/overseasremitwrapperu95086",
    status: "completed",
    description: "해외송금 대상자 선택 화면",
  },
  {
    id: "overseasremitcoupon",
    name: "해외송금 쿠폰 선택",
    path: "/overseasremitcouponu95087",
    status: "completed",
    description: "해외송금 쿠폰 선택 화면",
  },
  {
    id: "overseasremitnickname",
    name: "해외송금 별명 설정",
    path: "/overseasremitnicknameu95088",
    status: "completed",
    description: "해외송금 수취인 별명 설정 화면",
  },
  {
    id: "overseasremitcontacts",
    name: "해외송금 즐겨찾기",
    path: "/overseasremitcontactsu95089",
    status: "completed",
    description: "해외송금 즐겨찾기 연락처 관리 화면",
  },
  {
    id: "overseasremitrecipient",
    name: "해외송금 대상자 등록",
    path: "/overseasremitrecipientu95090",
    status: "completed",
    description: "해외송금 대상자 등록 화면",
  },
  {
    id: "overseasremitidinput",
    name: "해외송금 고객정보 입력",
    path: "/overseasremitidinputu95091",
    status: "completed",
    description: "해외송금 고객정보 (신분증) 입력 화면",
  },
  {
    id: "overseasremitconfirm",
    name: "해외송금 확인",
    path: "/overseasremitconfirmu95092",
    status: "completed",
    description: "해외송금 송금 확인 화면",
  },
  {
    id: "overseasremitfail",
    name: "해외송금 실패",
    path: "/overseasremitfailu95093",
    status: "completed",
    description: "해외송금 송금 실패 화면",
  },
  {
    id: "overseasremitpaymentconfirm",
    name: "해외송금 결제 확인",
    path: "/overseasremitpaymentconfirmu95094",
    status: "completed",
    description: "해외송금 결제 확인 화면",
  },
  {
    id: "overseasremithistory",
    name: "해외송금 내역",
    path: "/overseasremithistoryu95095",
    status: "completed",
    description: "해외송금 내역 조회 화면",
  },
  {
    id: "overseasremitreceiverinfo",
    name: "해외송금 수취인 정보",
    path: "/overseasremitreceiverinfou95096",
    status: "completed",
    description: "해외송금 수취인 정보 입력 화면",
  },
  {
    id: "overseasremittransferinfo",
    name: "해외송금 이체 정보",
    path: "/overseasremitu95097",
    status: "completed",
    description: "해외송금 이체 정보 확인 화면",
  },
  {
    id: "overseasremitpin",
    name: "해외송금 PIN 입력",
    path: "/overseasremitpinu95098",
    status: "completed",
    description: "해외송금 6자리 비밀번호 입력 화면",
  },
  {
    id: "section-history",
    name: "History",
    type: "section",
  },
  {
    id: "historymain",
    name: "거래내역 메인",
    path: "/historymainu95099",
    status: "completed",
    description: "거래내역 메인 화면 (송금 현황 표시)",
  },
  {
    id: "historyempty",
    name: "거래내역 없음",
    path: "/historyemptyu95100",
    status: "completed",
    description: "거래내역이 없는 경우 빈 화면 표시",
  },
  {
    id: "historycancel",
    name: "거래내역 취소",
    path: "/historycancelu95101",
    status: "completed",
    description: "송금 취소된 거래내역 상세 화면",
  },
  {
    id: "historycomplete",
    name: "거래내역 완료",
    path: "/historycompleteu95102",
    status: "completed",
    description: "송금 완료된 거래내역 상세 화면",
  },
  {
    id: "historyprogress",
    name: "거래내역 진행중",
    path: "/historyprogressu95103",
    status: "completed",
    description: "송금 진행중인 거래내역 상세 화면",
  },
  {
    id: "historyperiodselect",
    name: "기간 선택",
    path: "/historyperiodselectu95104",
    status: "completed",
    description: "거래내역 조회 기간 선택 모달",
  },
  {
    id: "historyrefund",
    name: "환불 진행 상황",
    path: "/historyrefundu95105",
    status: "completed",
    description: "환불 진행 상황 타임라인 모달",
  },
  {
    id: "historydetail1",
    name: "송금 내역 상세 1",
    path: "/historydetail1u95106",
    status: "completed",
    description: "송금 내역 상세 화면 (해외송금 완료)",
  },
  {
    id: "historydetail2",
    name: "송금 내역 상세 2",
    path: "/historydetail2u95107",
    status: "completed",
    description: "송금 내역 상세 화면 (수령인/송금정보)",
  },
  {
    id: "historydetail3",
    name: "송금 내역 상세 3",
    path: "/historydetail3u95108",
    status: "completed",
    description: "송금 내역 상세 화면 (금액정보)",
  },
  {
    id: "historydetail4",
    name: "송금 내역 상세 4",
    path: "/historydetail4u95109",
    status: "completed",
    description: "송금 내역 상세 화면 (진행상황)",
  },
  {
    id: "historydetail5",
    name: "송금 추적",
    path: "/historydetail5u95110",
    status: "completed",
    description: "송금 추적 화면 (타임라인)",
  },
  {
    id: "historydetail6",
    name: "취소/환불 상세",
    path: "/historydetail6u95111",
    status: "completed",
    description: "취소/환불 상세 화면",
  },
  {
    id: "servicecertificate",
    name: "거래 증명서 발급",
    path: "/servicecertificateu95112",
    status: "completed",
    description: "거래 증명서 발급 화면 (이메일/PDF 선택)",
  },
  {
    id: "section-event",
    name: "Event",
    type: "section",
  },
  {
    id: "event",
    name: "이벤트",
    path: "/eventu95113",
    status: "completed",
    description: "이벤트 화면 (진행중/지난 이벤트 탭)",
  },
  {
    id: "eventempty",
    name: "이벤트 없음",
    path: "/eventemptyu95114",
    status: "completed",
    description: "종료된 이벤트가 없는 경우 빈 화면",
  },
  {
    id: "eventscreen",
    name: "이벤트 (과거)",
    path: "/eventscreenu95115",
    status: "completed",
    description: "지난 이벤트 목록 화면 (비활성화 표시)",
  },
  {
    id: "section-support",
    name: "Support",
    type: "section",
  },
  {
    id: "support",
    name: "고객센터",
    path: "/supportu95116",
    status: "completed",
  },
  {
    id: "supportscreen",
    name: "자주 묻는 질문",
    path: "/supportscreenu95117",
    status: "completed",
  },
  {
    id: "section-mypage",
    name: "MYPAGE",
    type: "section",
  },
  {
    id: "mypage",
    name: "마이페이지",
    path: "/mypageu95118",
    status: "completed",
  },
  {
    id: "mypagepopup",
    name: "쿠폰번호 오류",
    path: "/mypagepopupu95119",
    status: "completed",
  },
  {
    id: "mypagescreen",
    name: "신분증 관리",
    path: "/mypagescreenu95120",
    status: "completed",
  },
  {
    id: "mypagewrapper",
    name: "신분증 번호입력",
    path: "/mypagewrapperu95121",
    status: "completed",
  },
  {
    id: "screen4-mypage",
    name: "개인정보 업데이트",
    path: "/screen4u95005",
    status: "completed",
  },
  {
    id: "screen5",
    name: "국가번호 선택",
    path: "/screen5u95122",
    status: "completed",
  },
  {
    id: "screen6-mypage",
    name: "주계좌 선택",
    path: "/screen6u95049",
    status: "completed",
  },
  {
    id: "screen7",
    name: "휴대전화번호 변경",
    path: "/screen7u95123",
    status: "completed",
  },
  {
    id: "screen8-mypage",
    name: "해외송금 보내기",
    path: "/screen8u95009",
    status: "completed",
  },
];

export const PublishingStatus = () => {
  const [selectedScreen, setSelectedScreen] = useState<string>("login");
  const [copied, setCopied] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");

  const selectedData = publishingData.find((item) => item.id === selectedScreen);

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const getFullUrl = (path: string) => `${baseUrl}${path}`;

  const handleCopyUrl = async () => {
    if (selectedData && 'path' in selectedData && selectedData.path) {
      const fullUrl = getFullUrl(selectedData.path);
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* LNB (Left Navigation Bar) */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
        {/* LNB Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-900">퍼블리싱 현황</h1>
          <p className="text-sm text-gray-500 mt-1">화면 목록</p>
        </div>

        {/* LNB Menu List */}
        <nav className="flex-1 overflow-y-auto p-2">
          <ul className="space-y-1">
            {publishingData.map((item) => (
              <li key={item.id}>
                {item.type === "section" ? (
                  <div className="px-3 py-2 mt-4 mb-1">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {item.name}
                    </span>
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedScreen(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                      selectedScreen === item.id
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <FolderIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="flex-1 font-medium">{item.name}</span>
                    {item.status === "completed" ? (
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    ) : (
                      <ClockIcon className="w-4 h-4 text-yellow-500" />
                    )}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* 공통 컴포넌트 링크 */}
        <div className="p-2 border-t border-gray-200">
          <Link
            to="/components"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors hover:bg-blue-50 text-blue-600 border border-blue-200 bg-blue-50/50"
          >
            <LayoutGridIcon className="w-5 h-5 flex-shrink-0" />
            <span className="flex-1 font-medium">공통 컴포넌트</span>
          </Link>
        </div>

        {/* LNB Footer - Summary */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">완료</span>
            <span className="font-medium text-green-600">
              {publishingData.filter((item) => item.status === "completed").length}
            </span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-600">대기</span>
            <span className="font-medium text-yellow-600">
              {publishingData.filter((item) => item.status === "pending").length}
            </span>
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {selectedData && (selectedData.type === "menu" || selectedData.type === undefined) ? (
          <>
            {/* Info Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
              <div className="flex items-center gap-3">
                <h2 className="font-semibold text-gray-900">{selectedData.name}</h2>
                <span className="text-sm text-gray-500">{selectedData.description}</span>
                {selectedData.status === "completed" ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    <CheckCircleIcon className="w-3 h-3" />
                    완료
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                    <ClockIcon className="w-3 h-3" />
                    대기
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {/* 브라우저 스타일 URL 바 */}
                <div className="flex items-center bg-gray-100 rounded-lg border border-gray-200 px-3 py-1.5 min-w-input-container">
                  <LockIcon className="w-3.5 h-3.5 text-gray-400 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700 truncate flex-1">
                    {selectedData.path && getFullUrl(selectedData.path)}
                  </span>
                  <button
                    onClick={handleCopyUrl}
                    className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                    title="URL 복사"
                  >
                    {copied ? (
                      <CheckIcon className="w-4 h-4 text-green-500" />
                    ) : (
                      <CopyIcon className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                </div>
                {selectedData.status === "completed" && selectedData.path && (
                  <>
                    <DownloadAllButton />
                    <a
                      href={selectedData.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 px-2 py-1"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      새 탭
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Preview Area */}
            <div className="flex-1 bg-gray-100 p-4">
              {selectedData.status === "completed" && selectedData.path ? (
                <div className="h-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                  <iframe
                    src={selectedData.path}
                    className="w-full h-full"
                    title={`${selectedData.name} Preview`}
                  />
                </div>
              ) : (
                <div className="h-full flex items-center justify-center bg-white rounded-lg border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <ClockIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">아직 퍼블리싱되지 않은 화면입니다</p>
                    <p className="text-sm text-gray-400 mt-1">개발 예정</p>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            왼쪽 메뉴에서 화면을 선택하세요
          </div>
        )}
      </div>
    </div>
  );
};
