/**
 * 앱 상태 리듀서
 * App State Reducer
 */

import type { AppState, AppAction } from './types';

// 초기 상태
export const initialState: AppState = {
  // 사용자 관련
  user: null,
  isAuthenticated: false,

  // 즐겨찾기 관련
  favorites: [],
  recentTransfers: [],

  // 송금 관련
  currentTransfer: null,
  selectedWallet: null,
  wallets: [],

  // 쿠폰 관련
  coupons: [],
  selectedCoupon: null,

  // UI 상태
  isLoading: false,
  error: null,
  activeTab: 'recent',
};

// 리듀서 함수
export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    // 사용자 관련 액션
    case 'SET_USER':
      return { ...state, user: action.payload };

    case 'SET_AUTHENTICATED':
      return { ...state, isAuthenticated: action.payload };

    // 즐겨찾기 관련 액션
    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload };

    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((f) => f.id !== action.payload),
      };

    case 'SET_RECENT_TRANSFERS':
      return { ...state, recentTransfers: action.payload };

    // 송금 관련 액션
    case 'SET_CURRENT_TRANSFER':
      return { ...state, currentTransfer: action.payload };

    case 'SET_SELECTED_WALLET':
      return { ...state, selectedWallet: action.payload };

    case 'SET_WALLETS':
      return { ...state, wallets: action.payload };

    // 쿠폰 관련 액션
    case 'SET_COUPONS':
      return { ...state, coupons: action.payload };

    case 'SET_SELECTED_COUPON':
      return { ...state, selectedCoupon: action.payload };

    // UI 상태 액션
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'SET_ERROR':
      return { ...state, error: action.payload };

    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload };

    // 상태 초기화
    case 'RESET_STATE':
      return initialState;

    default:
      return state;
  }
}
