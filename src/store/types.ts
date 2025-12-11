/**
 * 상태관리 타입 정의
 * State Management Type Definitions
 */

// 사용자 정보 타입
export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
}

// 즐겨찾기 수신자 타입
export interface FavoriteRecipient {
  id: number;
  countryFlag: string;
  name: string;
  phone: string;
  bankInfo: string;
  isFavorite: boolean;
}

// 송금 정보 타입
export interface TransferInfo {
  sendAmount: number;
  receiveAmount: number;
  sendCurrency: string;
  receiveCurrency: string;
  exchangeRate: number;
  fee: number;
  estimatedTime: string;
}

// 지갑 정보 타입
export interface WalletInfo {
  id: string;
  name: string;
  balance: number;
  availableBalance: number;
  currency: string;
}

// 쿠폰 타입
export interface Coupon {
  id: string;
  name: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  expiryDate: string;
  isUsed: boolean;
}

// 앱 전역 상태 타입
export interface AppState {
  // 사용자 관련
  user: User | null;
  isAuthenticated: boolean;

  // 즐겨찾기 관련
  favorites: FavoriteRecipient[];
  recentTransfers: FavoriteRecipient[];

  // 송금 관련
  currentTransfer: TransferInfo | null;
  selectedWallet: WalletInfo | null;
  wallets: WalletInfo[];

  // 쿠폰 관련
  coupons: Coupon[];
  selectedCoupon: Coupon | null;

  // UI 상태
  isLoading: boolean;
  error: string | null;
  activeTab: 'favorites' | 'recent';
}

// 액션 타입
export type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_AUTHENTICATED'; payload: boolean }
  | { type: 'SET_FAVORITES'; payload: FavoriteRecipient[] }
  | { type: 'ADD_FAVORITE'; payload: FavoriteRecipient }
  | { type: 'REMOVE_FAVORITE'; payload: number }
  | { type: 'SET_RECENT_TRANSFERS'; payload: FavoriteRecipient[] }
  | { type: 'SET_CURRENT_TRANSFER'; payload: TransferInfo | null }
  | { type: 'SET_SELECTED_WALLET'; payload: WalletInfo | null }
  | { type: 'SET_WALLETS'; payload: WalletInfo[] }
  | { type: 'SET_COUPONS'; payload: Coupon[] }
  | { type: 'SET_SELECTED_COUPON'; payload: Coupon | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_ACTIVE_TAB'; payload: 'favorites' | 'recent' }
  | { type: 'RESET_STATE' };
