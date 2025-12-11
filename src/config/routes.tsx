import type { ReactNode } from 'react';
import { Login } from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import PageList from '../pages/PageList';
import { Account } from '../pages/Account/Account';
import { AccountMain2 } from '../pages/AccountMain2/AccountMain2';
import { AccountManagement } from '../pages/AccountManagement/AccountManagement';
import { AccountScreen } from '../pages/AccountScreen/AccountScreen';
import { AccountVerify } from '../pages/AccountVerify/AccountVerify';
import { AccountWrapper } from '../pages/AccountWrapper/AccountWrapper';
import { AddressDetailInput } from '../pages/AddressDetailInput/AddressDetailInput';
import { AddressDirectInput } from '../pages/AddressDirectInput/AddressDirectInput';
import { AddressInputMethod } from '../pages/AddressInputMethod/AddressInputMethod';
import { AddressPhotoConfirm } from '../pages/AddressPhotoConfirm/AddressPhotoConfirm';
import { AddressPhotoUpload } from '../pages/AddressPhotoUpload/AddressPhotoUpload';
import { AddressSearchApi } from '../pages/AddressSearchApi/AddressSearchApi';
import { AddressSearchResult } from '../pages/AddressSearchResult/AddressSearchResult';
import { ArsVerification } from '../pages/ArsVerification/ArsVerification';
import { AuthCodeInput } from '../pages/AuthCodeInput/AuthCodeInput';
import { AuthFailure } from '../pages/AuthFailure/AuthFailure';
import { AuthInfoInput } from '../pages/AuthInfoInput/AuthInfoInput';
import { AuthMethodSelect } from '../pages/AuthMethodSelect/AuthMethodSelect';
import { AutoWithdrawComplete } from '../pages/AutoWithdrawComplete/AutoWithdrawComplete';
import { AutoWithdrawConsent } from '../pages/AutoWithdrawConsent/AutoWithdrawConsent';
import { AutoWithdrawFailed } from '../pages/AutoWithdrawFailed/AutoWithdrawFailed';
import { CaptureTips } from '../pages/CaptureTips/CaptureTips';
import { CardVerification } from '../pages/CardVerification/CardVerification';
import { CarrierSelect } from '../pages/CarrierSelect/CarrierSelect';
import { CertificateConfirmKeyboard } from '../pages/CertificateConfirmKeyboard/CertificateConfirmKeyboard';
import { CertificateImportGuide } from '../pages/CertificateImportGuide/CertificateImportGuide';
import { CertificatePasswordKeyboard } from '../pages/CertificatePasswordKeyboard/CertificatePasswordKeyboard';
import { CertificateSelect } from '../pages/CertificateSelect/CertificateSelect';
import { CertificateSelectEmpty } from '../pages/CertificateSelectEmpty/CertificateSelectEmpty';
import { Common } from '../pages/Common/Common';
import { Components } from '../pages/Components/Components';
import { CustomerInfoForm } from '../pages/CustomerInfoForm/CustomerInfoForm';
import { CustomerVerification } from '../pages/CustomerVerification/CustomerVerification';
import { DivWrapper } from '../pages/DivWrapper/DivWrapper';
import { Element } from '../pages/Element/Element';
import { ElementScreen } from '../pages/ElementScreen/ElementScreen';
import { ElementWrapper } from '../pages/ElementWrapper/ElementWrapper';
import { EmailInput } from '../pages/EmailInput/EmailInput';
import { Event } from '../pages/Event/Event';
import { EventEmpty } from '../pages/EventEmpty/EventEmpty';
import { EventScreen } from '../pages/EventScreen/EventScreen';
import { Favorite } from '../pages/Favorite/Favorite';
import { ForeignIdInput } from '../pages/ForeignIdInput/ForeignIdInput';
import { FundSourceSelection } from '../pages/FundSourceSelection/FundSourceSelection';
import { HistoryCancel } from '../pages/HistoryCancel/HistoryCancel';
import { HistoryComplete } from '../pages/HistoryComplete/HistoryComplete';
import { HistoryDetail1 } from '../pages/HistoryDetail1/HistoryDetail1';
import { HistoryDetail2 } from '../pages/HistoryDetail2/HistoryDetail2';
import { HistoryDetail3 } from '../pages/HistoryDetail3/HistoryDetail3';
import { HistoryDetail4 } from '../pages/HistoryDetail4/HistoryDetail4';
import { HistoryDetail5 } from '../pages/HistoryDetail5/HistoryDetail5';
import { HistoryDetail6 } from '../pages/HistoryDetail6/HistoryDetail6';
import { HistoryEmpty } from '../pages/HistoryEmpty/HistoryEmpty';
import { HistoryMain } from '../pages/HistoryMain/HistoryMain';
import { HistoryPeriodSelect } from '../pages/HistoryPeriodSelect/HistoryPeriodSelect';
import { HistoryProgress } from '../pages/HistoryProgress/HistoryProgress';
import { HistoryRefund } from '../pages/HistoryRefund/HistoryRefund';
import { HomeScreen } from '../pages/HomeScreen/HomeScreen';
import { HomeWrapper } from '../pages/HomeWrapper/HomeWrapper';
import { IdFrontCapture } from '../pages/IdFrontCapture/IdFrontCapture';
import { IdRegistrationMethod } from '../pages/IdRegistrationMethod/IdRegistrationMethod';
import { IdTypeSelection } from '../pages/IdTypeSelection/IdTypeSelection';
import { LoginScreen } from '../pages/LoginScreen/LoginScreen';
import { Mypage } from '../pages/Mypage/Mypage';
import { MypageBs } from '../pages/MypageBs/MypageBs';
import { MypagePopup } from '../pages/MypagePopup/MypagePopup';
import { MypageScreen } from '../pages/MypageScreen/MypageScreen';
import { MypageWrapper } from '../pages/MypageWrapper/MypageWrapper';
import { Nationality } from '../pages/Nationality/Nationality';
import { NewAccountPassword } from '../pages/NewAccountPassword/NewAccountPassword';
import { NewAccountPasswordFilled } from '../pages/NewAccountPasswordFilled/NewAccountPasswordFilled';
import { NewAccountPasswordWechat } from '../pages/NewAccountPasswordWechat/NewAccountPasswordWechat';
import { NewAccountPhoneInput } from '../pages/NewAccountPhoneInput/NewAccountPhoneInput';
import { NewAccountReferral } from '../pages/NewAccountReferral/NewAccountReferral';
import { OccupationSelection } from '../pages/OccupationSelection/OccupationSelection';
import { Overseasremit } from '../pages/Overseasremit/Overseasremit';
import { OverseasRemitConfirm } from '../pages/OverseasRemitConfirm/OverseasRemitConfirm';
import { OverseasRemitContacts } from '../pages/OverseasRemitContacts/OverseasRemitContacts';
import { OverseasRemitCoupon } from '../pages/OverseasRemitCoupon/OverseasRemitCoupon';
import { OverseasRemitFail } from '../pages/OverseasRemitFail/OverseasRemitFail';
import { OverseasRemitHistory } from '../pages/OverseasRemitHistory/OverseasRemitHistory';
import { OverseasRemitIdInput } from '../pages/OverseasRemitIdInput/OverseasRemitIdInput';
import { OverseasRemitNickname } from '../pages/OverseasRemitNickname/OverseasRemitNickname';
import { OverseasRemitPaymentConfirm } from '../pages/OverseasRemitPaymentConfirm/OverseasRemitPaymentConfirm';
import { OverseasRemitPin } from '../pages/OverseasRemitPin/OverseasRemitPin';
import { OverseasRemitReceiverInfo } from '../pages/OverseasRemitReceiverInfo/OverseasRemitReceiverInfo';
import { OverseasRemitRecipient } from '../pages/OverseasRemitRecipient/OverseasRemitRecipient';
import { OverseasremitScreen } from '../pages/OverseasremitScreen/OverseasremitScreen';
import { OverseasRemitTransferInfo } from '../pages/OverseasRemitTransferInfo/OverseasRemitTransferInfo';
import { OverseasremitWrapper } from '../pages/OverseasremitWrapper/OverseasremitWrapper';
import { PassportInfoInput } from '../pages/PassportInfoInput/PassportInfoInput';
import { PasswordInputKeypad } from '../pages/PasswordInputKeypad/PasswordInputKeypad';
import { PasswordReset } from '../pages/PasswordReset/PasswordReset';
import { PhotoConfirmation } from '../pages/PhotoConfirmation/PhotoConfirmation';
import { PhotoConfirmDialog } from '../pages/PhotoConfirmDialog/PhotoConfirmDialog';
import { PinConfirm } from '../pages/PinConfirm/PinConfirm';
import { PinEntry } from '../pages/PinEntry/PinEntry';
import { PinInput } from '../pages/PinInput/PinInput';
import { PinPin } from '../pages/PinPin/PinPin';
import { PinPinScreen } from '../pages/PinPinScreen/PinPinScreen';
import { PublishingStatus } from '../pages/PublishingStatus/PublishingStatus';
import { ReferralCodeInput } from '../pages/ReferralCodeInput/ReferralCodeInput';
import { Screen } from '../pages/Screen/Screen';
import { Screen4 } from '../pages/Screen4/Screen4';
import { Screen5 } from '../pages/Screen5/Screen5';
import { Screen6 } from '../pages/Screen6/Screen6';
import { Screen7 } from '../pages/Screen7/Screen7';
import { Screen8 } from '../pages/Screen8/Screen8';
import { SelfCheckAuth } from '../pages/SelfCheckAuth/SelfCheckAuth';
import { SelfieCapture } from '../pages/SelfieCapture/SelfieCapture';
import { SelfieCaptureCountdown } from '../pages/SelfieCaptureCountdown/SelfieCaptureCountdown';
import { SelfieVerification } from '../pages/SelfieVerification/SelfieVerification';
import { SelfieVerificationProgress } from '../pages/SelfieVerificationProgress/SelfieVerificationProgress';
import { Servicecert } from '../pages/Servicecert/Servicecert';
import { ServiceCertificate } from '../pages/ServiceCertificate/ServiceCertificate';
import { ServicecertScreen } from '../pages/ServicecertScreen/ServicecertScreen';
import { ServicecertWrapper } from '../pages/ServicecertWrapper/ServicecertWrapper';
import { ServiceTerms } from '../pages/ServiceTerms/ServiceTerms';
import { Settings } from '../pages/Settings/Settings';
import { SettingsFaceid } from '../pages/SettingsFaceid/SettingsFaceid';
import { SettingsFaceidScreen } from '../pages/SettingsFaceidScreen/SettingsFaceidScreen';
import { SettingsPin } from '../pages/SettingsPin/SettingsPin';
import { SettingsScreen } from '../pages/SettingsScreen/SettingsScreen';
import { SettingsWrapper } from '../pages/SettingsWrapper/SettingsWrapper';
import { Signup } from '../pages/Signup/Signup';
import { SignupCompleteApproved } from '../pages/SignupCompleteApproved/SignupCompleteApproved';
import { SignupCompletePending } from '../pages/SignupCompletePending/SignupCompletePending';
import { SignupEmailInput } from '../pages/SignupEmailInput/SignupEmailInput';
import { SignupEmailTab } from '../pages/SignupEmailTab/SignupEmailTab';
import { SignupHistoryDialog } from '../pages/SignupHistoryDialog/SignupHistoryDialog';
import { SignupPhoneEmail } from '../pages/SignupPhoneEmail/SignupPhoneEmail';
import { SignupPhoneInput } from '../pages/SignupPhoneInput/SignupPhoneInput';
import { SignupScreen } from '../pages/SignupScreen/SignupScreen';
import { SignupWrapper } from '../pages/SignupWrapper/SignupWrapper';
import { SimpleAuthSelect } from '../pages/SimpleAuthSelect/SimpleAuthSelect';
import { Support } from '../pages/Support/Support';
import { SupportScreen } from '../pages/SupportScreen/SupportScreen';
import { TransactionPurpose } from '../pages/TransactionPurpose/TransactionPurpose';
import { Transform } from '../pages/Transform/Transform';
import { VerificationCode } from '../pages/VerificationCode/VerificationCode';
import { VerificationCodeTimeout } from '../pages/VerificationCodeTimeout/VerificationCodeTimeout';
import { VerificationCodeWechat } from '../pages/VerificationCodeWechat/VerificationCodeWechat';
import { VerificationSteps } from '../pages/VerificationSteps/VerificationSteps';
import { WechatVerification } from '../pages/WechatVerification/WechatVerification';
import { WithdrawComplete } from '../pages/WithdrawComplete/WithdrawComplete';
import { WithdrawFailed } from '../pages/WithdrawFailed/WithdrawFailed';

// 페이지 경로 상수 정의
export const PAGE_URL = {
  PAGE_LIST: '/page-list',
  HOME: '/',
  LOGIN: '/login',
  ACCOUNT: '/account',
  ACCOUNT_MAIN2: '/account-main2',
  ACCOUNT_MANAGEMENT: '/account-management',
  ACCOUNT_SCREEN: '/account-screen',
  ACCOUNT_VERIFY: '/account-verify',
  ACCOUNT_WRAPPER: '/account-wrapper',
  ADDRESS_DETAIL_INPUT: '/address-detail-input',
  ADDRESS_DIRECT_INPUT: '/address-direct-input',
  ADDRESS_INPUT_METHOD: '/address-input-method',
  ADDRESS_PHOTO_CONFIRM: '/address-photo-confirm',
  ADDRESS_PHOTO_UPLOAD: '/address-photo-upload',
  ADDRESS_SEARCH_API: '/address-search-api',
  ADDRESS_SEARCH_RESULT: '/address-search-result',
  ARS_VERIFICATION: '/ars-verification',
  AUTH_CODE_INPUT: '/auth-code-input',
  AUTH_FAILURE: '/auth-failure',
  AUTH_INFO_INPUT: '/auth-info-input',
  AUTH_METHOD_SELECT: '/auth-method-select',
  AUTO_WITHDRAW_COMPLETE: '/auto-withdraw-complete',
  AUTO_WITHDRAW_CONSENT: '/auto-withdraw-consent',
  AUTO_WITHDRAW_FAILED: '/auto-withdraw-failed',
  CAPTURE_TIPS: '/capture-tips',
  CARD_VERIFICATION: '/card-verification',
  CARRIER_SELECT: '/carrier-select',
  CERTIFICATE_CONFIRM_KEYBOARD: '/certificate-confirm-keyboard',
  CERTIFICATE_IMPORT_GUIDE: '/certificate-import-guide',
  CERTIFICATE_PASSWORD_KEYBOARD: '/certificate-password-keyboard',
  CERTIFICATE_SELECT: '/certificate-select',
  CERTIFICATE_SELECT_EMPTY: '/certificate-select-empty',
  COMMON: '/common',
  COMPONENTS: '/components',
  CUSTOMER_INFO_FORM: '/customer-info-form',
  CUSTOMER_VERIFICATION: '/customer-verification',
  DIV_WRAPPER: '/div-wrapper',
  ELEMENT: '/element',
  ELEMENT_SCREEN: '/element-screen',
  ELEMENT_WRAPPER: '/element-wrapper',
  EMAIL_INPUT: '/email-input',
  EVENT: '/event',
  EVENT_EMPTY: '/event-empty',
  EVENT_SCREEN: '/event-screen',
  FAVORITE: '/favorite',
  FOREIGN_ID_INPUT: '/foreign-id-input',
  FUND_SOURCE_SELECTION: '/fund-source-selection',
  HISTORY_CANCEL: '/history-cancel',
  HISTORY_COMPLETE: '/history-complete',
  HISTORY_DETAIL1: '/history-detail1',
  HISTORY_DETAIL2: '/history-detail2',
  HISTORY_DETAIL3: '/history-detail3',
  HISTORY_DETAIL4: '/history-detail4',
  HISTORY_DETAIL5: '/history-detail5',
  HISTORY_DETAIL6: '/history-detail6',
  HISTORY_EMPTY: '/history-empty',
  HISTORY_MAIN: '/history-main',
  HISTORY_PERIOD_SELECT: '/history-period-select',
  HISTORY_PROGRESS: '/history-progress',
  HISTORY_REFUND: '/history-refund',
  HOME_SCREEN: '/home-screen',
  HOME_WRAPPER: '/home-wrapper',
  ID_FRONT_CAPTURE: '/id-front-capture',
  ID_REGISTRATION_METHOD: '/id-registration-method',
  ID_TYPE_SELECTION: '/id-type-selection',
  LOGIN_SCREEN: '/login-screen',
  MYPAGE: '/mypage',
  MYPAGE_BS: '/mypage-bs',
  MYPAGE_POPUP: '/mypage-popup',
  MYPAGE_SCREEN: '/mypage-screen',
  MYPAGE_WRAPPER: '/mypage-wrapper',
  NATIONALITY: '/nationality',
  NEW_ACCOUNT_PASSWORD: '/new-account-password',
  NEW_ACCOUNT_PASSWORD_FILLED: '/new-account-password-filled',
  NEW_ACCOUNT_PASSWORD_WECHAT: '/new-account-password-wechat',
  NEW_ACCOUNT_PHONE_INPUT: '/new-account-phone-input',
  NEW_ACCOUNT_REFERRAL: '/new-account-referral',
  OCCUPATION_SELECTION: '/occupation-selection',
  OVERSEAS_REMIT: '/overseas-remit',
  OVERSEAS_REMIT_CONFIRM: '/overseas-remit-confirm',
  OVERSEAS_REMIT_CONTACTS: '/overseas-remit-contacts',
  OVERSEAS_REMIT_COUPON: '/overseas-remit-coupon',
  OVERSEAS_REMIT_FAIL: '/overseas-remit-fail',
  OVERSEAS_REMIT_HISTORY: '/overseas-remit-history',
  OVERSEAS_REMIT_ID_INPUT: '/overseas-remit-id-input',
  OVERSEAS_REMIT_NICKNAME: '/overseas-remit-nickname',
  OVERSEAS_REMIT_PAYMENT_CONFIRM: '/overseas-remit-payment-confirm',
  OVERSEAS_REMIT_PIN: '/overseas-remit-pin',
  OVERSEAS_REMIT_RECEIVER_INFO: '/overseas-remit-receiver-info',
  OVERSEAS_REMIT_RECIPIENT: '/overseas-remit-recipient',
  OVERSEAS_REMIT_SCREEN: '/overseas-remit-screen',
  OVERSEAS_REMIT_TRANSFER_INFO: '/overseas-remit-transfer-info',
  OVERSEAS_REMIT_WRAPPER: '/overseas-remit-wrapper',
  PASSPORT_INFO_INPUT: '/passport-info-input',
  PASSWORD_INPUT_KEYPAD: '/password-input-keypad',
  PASSWORD_RESET: '/password-reset',
  PHOTO_CONFIRMATION: '/photo-confirmation',
  PHOTO_CONFIRM_DIALOG: '/photo-confirm-dialog',
  PIN_CONFIRM: '/pin-confirm',
  PIN_ENTRY: '/pin-entry',
  PIN_INPUT: '/pin-input',
  PIN_PIN: '/pin-pin',
  PIN_PIN_SCREEN: '/pin-pin-screen',
  PUBLISHING_STATUS: '/publishing-status',
  REFERRAL_CODE_INPUT: '/referral-code-input',
  SCREEN: '/screen',
  SCREEN4: '/screen4',
  SCREEN5: '/screen5',
  SCREEN6: '/screen6',
  SCREEN7: '/screen7',
  SCREEN8: '/screen8',
  SELF_CHECK_AUTH: '/self-check-auth',
  SELFIE_CAPTURE: '/selfie-capture',
  SELFIE_CAPTURE_COUNTDOWN: '/selfie-capture-countdown',
  SELFIE_VERIFICATION: '/selfie-verification',
  SELFIE_VERIFICATION_PROGRESS: '/selfie-verification-progress',
  SERVICE_CERT: '/service-cert',
  SERVICE_CERTIFICATE: '/service-certificate',
  SERVICE_CERT_SCREEN: '/service-cert-screen',
  SERVICE_CERT_WRAPPER: '/service-cert-wrapper',
  SERVICE_TERMS: '/service-terms',
  SETTINGS: '/settings',
  SETTINGS_FACEID: '/settings-faceid',
  SETTINGS_FACEID_SCREEN: '/settings-faceid-screen',
  SETTINGS_PIN: '/settings-pin',
  SETTINGS_SCREEN: '/settings-screen',
  SETTINGS_WRAPPER: '/settings-wrapper',
  SIGNUP: '/signup',
  SIGNUP_COMPLETE_APPROVED: '/signup-complete-approved',
  SIGNUP_COMPLETE_PENDING: '/signup-complete-pending',
  SIGNUP_EMAIL_INPUT: '/signup-email-input',
  SIGNUP_EMAIL_TAB: '/signup-email-tab',
  SIGNUP_HISTORY_DIALOG: '/signup-history-dialog',
  SIGNUP_PHONE_EMAIL: '/signup-phone-email',
  SIGNUP_PHONE_INPUT: '/signup-phone-input',
  SIGNUP_SCREEN: '/signup-screen',
  SIGNUP_WRAPPER: '/signup-wrapper',
  SIMPLE_AUTH_SELECT: '/simple-auth-select',
  SUPPORT: '/support',
  SUPPORT_SCREEN: '/support-screen',
  TRANSACTION_PURPOSE: '/transaction-purpose',
  TRANSFORM: '/transform',
  VERIFICATION_CODE: '/verification-code',
  VERIFICATION_CODE_TIMEOUT: '/verification-code-timeout',
  VERIFICATION_CODE_WECHAT: '/verification-code-wechat',
  VERIFICATION_STEPS: '/verification-steps',
  WECHAT_VERIFICATION: '/wechat-verification',
  WITHDRAW_COMPLETE: '/withdraw-complete',
  WITHDRAW_FAILED: '/withdraw-failed',
} as const;

export interface RouteConfig {
  path: string;
  element: ReactNode;
  title?: string;
}

export const routes: RouteConfig[] = [
  {
    path: PAGE_URL.PAGE_LIST,
    element: <PageList />,
    title: '전체 페이지 목록',
  },
  {
    path: PAGE_URL.HOME,
    element: <Home />,
    title: 'Home',
  },
  {
    path: PAGE_URL.LOGIN,
    element: <Login />,
    title: 'Login',
  },
  { path: PAGE_URL.ACCOUNT, element: <Account />, title: 'Account' },
  { path: PAGE_URL.ACCOUNT_MAIN2, element: <AccountMain2 />, title: 'AccountMain2' },
  { path: PAGE_URL.ACCOUNT_MANAGEMENT, element: <AccountManagement />, title: 'AccountManagement' },
  { path: PAGE_URL.ACCOUNT_SCREEN, element: <AccountScreen />, title: 'AccountScreen' },
  { path: PAGE_URL.ACCOUNT_VERIFY, element: <AccountVerify />, title: 'AccountVerify' },
  { path: PAGE_URL.ACCOUNT_WRAPPER, element: <AccountWrapper />, title: 'AccountWrapper' },
  { path: PAGE_URL.ADDRESS_DETAIL_INPUT, element: <AddressDetailInput />, title: 'AddressDetailInput' },
  { path: PAGE_URL.ADDRESS_DIRECT_INPUT, element: <AddressDirectInput />, title: 'AddressDirectInput' },
  { path: PAGE_URL.ADDRESS_INPUT_METHOD, element: <AddressInputMethod />, title: 'AddressInputMethod' },
  { path: PAGE_URL.ADDRESS_PHOTO_CONFIRM, element: <AddressPhotoConfirm />, title: 'AddressPhotoConfirm' },
  { path: PAGE_URL.ADDRESS_PHOTO_UPLOAD, element: <AddressPhotoUpload />, title: 'AddressPhotoUpload' },
  { path: PAGE_URL.ADDRESS_SEARCH_API, element: <AddressSearchApi />, title: 'AddressSearchApi' },
  { path: PAGE_URL.ADDRESS_SEARCH_RESULT, element: <AddressSearchResult />, title: 'AddressSearchResult' },
  { path: PAGE_URL.ARS_VERIFICATION, element: <ArsVerification />, title: 'ArsVerification' },
  { path: PAGE_URL.AUTH_CODE_INPUT, element: <AuthCodeInput />, title: 'AuthCodeInput' },
  { path: PAGE_URL.AUTH_FAILURE, element: <AuthFailure />, title: 'AuthFailure' },
  { path: PAGE_URL.AUTH_INFO_INPUT, element: <AuthInfoInput />, title: 'AuthInfoInput' },
  { path: PAGE_URL.AUTH_METHOD_SELECT, element: <AuthMethodSelect />, title: 'AuthMethodSelect' },
  { path: PAGE_URL.AUTO_WITHDRAW_COMPLETE, element: <AutoWithdrawComplete />, title: 'AutoWithdrawComplete' },
  { path: PAGE_URL.AUTO_WITHDRAW_CONSENT, element: <AutoWithdrawConsent />, title: 'AutoWithdrawConsent' },
  { path: PAGE_URL.AUTO_WITHDRAW_FAILED, element: <AutoWithdrawFailed />, title: 'AutoWithdrawFailed' },
  { path: PAGE_URL.CAPTURE_TIPS, element: <CaptureTips />, title: 'CaptureTips' },
  { path: PAGE_URL.CARD_VERIFICATION, element: <CardVerification />, title: 'CardVerification' },
  { path: PAGE_URL.CARRIER_SELECT, element: <CarrierSelect />, title: 'CarrierSelect' },
  { path: PAGE_URL.CERTIFICATE_CONFIRM_KEYBOARD, element: <CertificateConfirmKeyboard />, title: 'CertificateConfirmKeyboard' },
  { path: PAGE_URL.CERTIFICATE_IMPORT_GUIDE, element: <CertificateImportGuide />, title: 'CertificateImportGuide' },
  { path: PAGE_URL.CERTIFICATE_PASSWORD_KEYBOARD, element: <CertificatePasswordKeyboard />, title: 'CertificatePasswordKeyboard' },
  { path: PAGE_URL.CERTIFICATE_SELECT, element: <CertificateSelect />, title: 'CertificateSelect' },
  { path: PAGE_URL.CERTIFICATE_SELECT_EMPTY, element: <CertificateSelectEmpty />, title: 'CertificateSelectEmpty' },
  { path: PAGE_URL.COMMON, element: <Common />, title: 'Common' },
  { path: PAGE_URL.COMPONENTS, element: <Components />, title: 'Components' },
  { path: PAGE_URL.CUSTOMER_INFO_FORM, element: <CustomerInfoForm />, title: 'CustomerInfoForm' },
  { path: PAGE_URL.CUSTOMER_VERIFICATION, element: <CustomerVerification />, title: 'CustomerVerification' },
  { path: PAGE_URL.DIV_WRAPPER, element: <DivWrapper />, title: 'DivWrapper' },
  { path: PAGE_URL.ELEMENT, element: <Element />, title: 'Element' },
  { path: PAGE_URL.ELEMENT_SCREEN, element: <ElementScreen />, title: 'ElementScreen' },
  { path: PAGE_URL.ELEMENT_WRAPPER, element: <ElementWrapper />, title: 'ElementWrapper' },
  { path: PAGE_URL.EMAIL_INPUT, element: <EmailInput />, title: 'EmailInput' },
  { path: PAGE_URL.EVENT, element: <Event />, title: 'Event' },
  { path: PAGE_URL.EVENT_EMPTY, element: <EventEmpty />, title: 'EventEmpty' },
  { path: PAGE_URL.EVENT_SCREEN, element: <EventScreen />, title: 'EventScreen' },
  { path: PAGE_URL.FAVORITE, element: <Favorite />, title: 'Favorite' },
  { path: PAGE_URL.FOREIGN_ID_INPUT, element: <ForeignIdInput />, title: 'ForeignIdInput' },
  { path: PAGE_URL.FUND_SOURCE_SELECTION, element: <FundSourceSelection />, title: 'FundSourceSelection' },
  { path: PAGE_URL.HISTORY_CANCEL, element: <HistoryCancel />, title: 'HistoryCancel' },
  { path: PAGE_URL.HISTORY_COMPLETE, element: <HistoryComplete />, title: 'HistoryComplete' },
  { path: PAGE_URL.HISTORY_DETAIL1, element: <HistoryDetail1 />, title: 'HistoryDetail1' },
  { path: PAGE_URL.HISTORY_DETAIL2, element: <HistoryDetail2 />, title: 'HistoryDetail2' },
  { path: PAGE_URL.HISTORY_DETAIL3, element: <HistoryDetail3 />, title: 'HistoryDetail3' },
  { path: PAGE_URL.HISTORY_DETAIL4, element: <HistoryDetail4 />, title: 'HistoryDetail4' },
  { path: PAGE_URL.HISTORY_DETAIL5, element: <HistoryDetail5 />, title: 'HistoryDetail5' },
  { path: PAGE_URL.HISTORY_DETAIL6, element: <HistoryDetail6 />, title: 'HistoryDetail6' },
  { path: PAGE_URL.HISTORY_EMPTY, element: <HistoryEmpty />, title: 'HistoryEmpty' },
  { path: PAGE_URL.HISTORY_MAIN, element: <HistoryMain />, title: 'HistoryMain' },
  { path: PAGE_URL.HISTORY_PERIOD_SELECT, element: <HistoryPeriodSelect />, title: 'HistoryPeriodSelect' },
  { path: PAGE_URL.HISTORY_PROGRESS, element: <HistoryProgress />, title: 'HistoryProgress' },
  { path: PAGE_URL.HISTORY_REFUND, element: <HistoryRefund />, title: 'HistoryRefund' },
  { path: PAGE_URL.HOME_SCREEN, element: <HomeScreen />, title: 'HomeScreen' },
  { path: PAGE_URL.HOME_WRAPPER, element: <HomeWrapper />, title: 'HomeWrapper' },
  { path: PAGE_URL.ID_FRONT_CAPTURE, element: <IdFrontCapture />, title: 'IdFrontCapture' },
  { path: PAGE_URL.ID_REGISTRATION_METHOD, element: <IdRegistrationMethod />, title: 'IdRegistrationMethod' },
  { path: PAGE_URL.ID_TYPE_SELECTION, element: <IdTypeSelection />, title: 'IdTypeSelection' },
  { path: PAGE_URL.LOGIN_SCREEN, element: <LoginScreen />, title: 'LoginScreen' },
  { path: PAGE_URL.MYPAGE, element: <Mypage />, title: 'Mypage' },
  { path: PAGE_URL.MYPAGE_BS, element: <MypageBs />, title: 'MypageBs' },
  { path: PAGE_URL.MYPAGE_POPUP, element: <MypagePopup />, title: 'MypagePopup' },
  { path: PAGE_URL.MYPAGE_SCREEN, element: <MypageScreen />, title: 'MypageScreen' },
  { path: PAGE_URL.MYPAGE_WRAPPER, element: <MypageWrapper />, title: 'MypageWrapper' },
  { path: PAGE_URL.NATIONALITY, element: <Nationality />, title: 'Nationality' },
  { path: PAGE_URL.NEW_ACCOUNT_PASSWORD, element: <NewAccountPassword />, title: 'NewAccountPassword' },
  { path: PAGE_URL.NEW_ACCOUNT_PASSWORD_FILLED, element: <NewAccountPasswordFilled />, title: 'NewAccountPasswordFilled' },
  { path: PAGE_URL.NEW_ACCOUNT_PASSWORD_WECHAT, element: <NewAccountPasswordWechat />, title: 'NewAccountPasswordWechat' },
  { path: PAGE_URL.NEW_ACCOUNT_PHONE_INPUT, element: <NewAccountPhoneInput />, title: 'NewAccountPhoneInput' },
  { path: PAGE_URL.NEW_ACCOUNT_REFERRAL, element: <NewAccountReferral />, title: 'NewAccountReferral' },
  { path: PAGE_URL.OCCUPATION_SELECTION, element: <OccupationSelection />, title: 'OccupationSelection' },
  { path: PAGE_URL.OVERSEAS_REMIT, element: <Overseasremit />, title: 'Overseasremit' },
  { path: PAGE_URL.OVERSEAS_REMIT_CONFIRM, element: <OverseasRemitConfirm />, title: 'OverseasRemitConfirm' },
  { path: PAGE_URL.OVERSEAS_REMIT_CONTACTS, element: <OverseasRemitContacts />, title: 'OverseasRemitContacts' },
  { path: PAGE_URL.OVERSEAS_REMIT_COUPON, element: <OverseasRemitCoupon />, title: 'OverseasRemitCoupon' },
  { path: PAGE_URL.OVERSEAS_REMIT_FAIL, element: <OverseasRemitFail />, title: 'OverseasRemitFail' },
  { path: PAGE_URL.OVERSEAS_REMIT_HISTORY, element: <OverseasRemitHistory />, title: 'OverseasRemitHistory' },
  { path: PAGE_URL.OVERSEAS_REMIT_ID_INPUT, element: <OverseasRemitIdInput />, title: 'OverseasRemitIdInput' },
  { path: PAGE_URL.OVERSEAS_REMIT_NICKNAME, element: <OverseasRemitNickname />, title: 'OverseasRemitNickname' },
  { path: PAGE_URL.OVERSEAS_REMIT_PAYMENT_CONFIRM, element: <OverseasRemitPaymentConfirm />, title: 'OverseasRemitPaymentConfirm' },
  { path: PAGE_URL.OVERSEAS_REMIT_PIN, element: <OverseasRemitPin />, title: 'OverseasRemitPin' },
  { path: PAGE_URL.OVERSEAS_REMIT_RECEIVER_INFO, element: <OverseasRemitReceiverInfo />, title: 'OverseasRemitReceiverInfo' },
  { path: PAGE_URL.OVERSEAS_REMIT_RECIPIENT, element: <OverseasRemitRecipient />, title: 'OverseasRemitRecipient' },
  { path: PAGE_URL.OVERSEAS_REMIT_SCREEN, element: <OverseasremitScreen />, title: 'OverseasremitScreen' },
  { path: PAGE_URL.OVERSEAS_REMIT_TRANSFER_INFO, element: <OverseasRemitTransferInfo />, title: 'OverseasRemitTransferInfo' },
  { path: PAGE_URL.OVERSEAS_REMIT_WRAPPER, element: <OverseasremitWrapper />, title: 'OverseasremitWrapper' },
  { path: PAGE_URL.PASSPORT_INFO_INPUT, element: <PassportInfoInput />, title: 'PassportInfoInput' },
  { path: PAGE_URL.PASSWORD_INPUT_KEYPAD, element: <PasswordInputKeypad />, title: 'PasswordInputKeypad' },
  { path: PAGE_URL.PASSWORD_RESET, element: <PasswordReset />, title: 'PasswordReset' },
  { path: PAGE_URL.PHOTO_CONFIRMATION, element: <PhotoConfirmation />, title: 'PhotoConfirmation' },
  { path: PAGE_URL.PHOTO_CONFIRM_DIALOG, element: <PhotoConfirmDialog />, title: 'PhotoConfirmDialog' },
  { path: PAGE_URL.PIN_CONFIRM, element: <PinConfirm />, title: 'PinConfirm' },
  { path: PAGE_URL.PIN_ENTRY, element: <PinEntry />, title: 'PinEntry' },
  { path: PAGE_URL.PIN_INPUT, element: <PinInput />, title: 'PinInput' },
  { path: PAGE_URL.PIN_PIN, element: <PinPin />, title: 'PinPin' },
  { path: PAGE_URL.PIN_PIN_SCREEN, element: <PinPinScreen />, title: 'PinPinScreen' },
  { path: PAGE_URL.PUBLISHING_STATUS, element: <PublishingStatus />, title: 'PublishingStatus' },
  { path: PAGE_URL.REFERRAL_CODE_INPUT, element: <ReferralCodeInput />, title: 'ReferralCodeInput' },
  { path: PAGE_URL.SCREEN, element: <Screen />, title: 'Screen' },
  { path: PAGE_URL.SCREEN4, element: <Screen4 />, title: 'Screen4' },
  { path: PAGE_URL.SCREEN5, element: <Screen5 />, title: 'Screen5' },
  { path: PAGE_URL.SCREEN6, element: <Screen6 />, title: 'Screen6' },
  { path: PAGE_URL.SCREEN7, element: <Screen7 />, title: 'Screen7' },
  { path: PAGE_URL.SCREEN8, element: <Screen8 />, title: 'Screen8' },
  { path: PAGE_URL.SELF_CHECK_AUTH, element: <SelfCheckAuth />, title: 'SelfCheckAuth' },
  { path: PAGE_URL.SELFIE_CAPTURE, element: <SelfieCapture />, title: 'SelfieCapture' },
  { path: PAGE_URL.SELFIE_CAPTURE_COUNTDOWN, element: <SelfieCaptureCountdown />, title: 'SelfieCaptureCountdown' },
  { path: PAGE_URL.SELFIE_VERIFICATION, element: <SelfieVerification />, title: 'SelfieVerification' },
  { path: PAGE_URL.SELFIE_VERIFICATION_PROGRESS, element: <SelfieVerificationProgress />, title: 'SelfieVerificationProgress' },
  { path: PAGE_URL.SERVICE_CERT, element: <Servicecert />, title: 'Servicecert' },
  { path: PAGE_URL.SERVICE_CERTIFICATE, element: <ServiceCertificate />, title: 'ServiceCertificate' },
  { path: PAGE_URL.SERVICE_CERT_SCREEN, element: <ServicecertScreen />, title: 'ServicecertScreen' },
  { path: PAGE_URL.SERVICE_CERT_WRAPPER, element: <ServicecertWrapper />, title: 'ServicecertWrapper' },
  { path: PAGE_URL.SERVICE_TERMS, element: <ServiceTerms />, title: 'ServiceTerms' },
  { path: PAGE_URL.SETTINGS, element: <Settings />, title: 'Settings' },
  { path: PAGE_URL.SETTINGS_FACEID, element: <SettingsFaceid />, title: 'SettingsFaceid' },
  { path: PAGE_URL.SETTINGS_FACEID_SCREEN, element: <SettingsFaceidScreen />, title: 'SettingsFaceidScreen' },
  { path: PAGE_URL.SETTINGS_PIN, element: <SettingsPin />, title: 'SettingsPin' },
  { path: PAGE_URL.SETTINGS_SCREEN, element: <SettingsScreen />, title: 'SettingsScreen' },
  { path: PAGE_URL.SETTINGS_WRAPPER, element: <SettingsWrapper />, title: 'SettingsWrapper' },
  { path: PAGE_URL.SIGNUP, element: <Signup />, title: 'Signup' },
  { path: PAGE_URL.SIGNUP_COMPLETE_APPROVED, element: <SignupCompleteApproved />, title: 'SignupCompleteApproved' },
  { path: PAGE_URL.SIGNUP_COMPLETE_PENDING, element: <SignupCompletePending />, title: 'SignupCompletePending' },
  { path: PAGE_URL.SIGNUP_EMAIL_INPUT, element: <SignupEmailInput />, title: 'SignupEmailInput' },
  { path: PAGE_URL.SIGNUP_EMAIL_TAB, element: <SignupEmailTab />, title: 'SignupEmailTab' },
  { path: PAGE_URL.SIGNUP_HISTORY_DIALOG, element: <SignupHistoryDialog />, title: 'SignupHistoryDialog' },
  { path: PAGE_URL.SIGNUP_PHONE_EMAIL, element: <SignupPhoneEmail />, title: 'SignupPhoneEmail' },
  { path: PAGE_URL.SIGNUP_PHONE_INPUT, element: <SignupPhoneInput />, title: 'SignupPhoneInput' },
  { path: PAGE_URL.SIGNUP_SCREEN, element: <SignupScreen />, title: 'SignupScreen' },
  { path: PAGE_URL.SIGNUP_WRAPPER, element: <SignupWrapper />, title: 'SignupWrapper' },
  { path: PAGE_URL.SIMPLE_AUTH_SELECT, element: <SimpleAuthSelect />, title: 'SimpleAuthSelect' },
  { path: PAGE_URL.SUPPORT, element: <Support />, title: 'Support' },
  { path: PAGE_URL.SUPPORT_SCREEN, element: <SupportScreen />, title: 'SupportScreen' },
  { path: PAGE_URL.TRANSACTION_PURPOSE, element: <TransactionPurpose />, title: 'TransactionPurpose' },
  { path: PAGE_URL.TRANSFORM, element: <Transform />, title: 'Transform' },
  { path: PAGE_URL.VERIFICATION_CODE, element: <VerificationCode />, title: 'VerificationCode' },
  { path: PAGE_URL.VERIFICATION_CODE_TIMEOUT, element: <VerificationCodeTimeout />, title: 'VerificationCodeTimeout' },
  { path: PAGE_URL.VERIFICATION_CODE_WECHAT, element: <VerificationCodeWechat />, title: 'VerificationCodeWechat' },
  { path: PAGE_URL.VERIFICATION_STEPS, element: <VerificationSteps />, title: 'VerificationSteps' },
  { path: PAGE_URL.WECHAT_VERIFICATION, element: <WechatVerification />, title: 'WechatVerification' },
  { path: PAGE_URL.WITHDRAW_COMPLETE, element: <WithdrawComplete />, title: 'WithdrawComplete' },
  { path: PAGE_URL.WITHDRAW_FAILED, element: <WithdrawFailed />, title: 'WithdrawFailed' },
];
