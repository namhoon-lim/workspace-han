/**
 * 앱 전역 상태 Context
 * App Global State Context
 */

import React, { createContext, useContext, useReducer, useMemo } from 'react';
import type { AppState, AppAction, FavoriteRecipient, TransferInfo, WalletInfo, Coupon, User } from './types';
import { appReducer, initialState } from './reducer';

// Context 타입 정의
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  // 편의 함수들
  actions: {
    // 사용자 관련
    setUser: (user: User | null) => void;
    setAuthenticated: (isAuthenticated: boolean) => void;
    // 즐겨찾기 관련
    setFavorites: (favorites: FavoriteRecipient[]) => void;
    addFavorite: (recipient: FavoriteRecipient) => void;
    removeFavorite: (id: number) => void;
    setRecentTransfers: (transfers: FavoriteRecipient[]) => void;
    // 송금 관련
    setCurrentTransfer: (transfer: TransferInfo | null) => void;
    setSelectedWallet: (wallet: WalletInfo | null) => void;
    setWallets: (wallets: WalletInfo[]) => void;
    // 쿠폰 관련
    setCoupons: (coupons: Coupon[]) => void;
    setSelectedCoupon: (coupon: Coupon | null) => void;
    // UI 상태
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
    setActiveTab: (tab: 'favorites' | 'recent') => void;
    resetState: () => void;
  };
}

// Context 생성
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider 컴포넌트
interface AppProviderProps {
  children: React.ReactNode;
  initialStateOverride?: Partial<AppState>;
}

export function AppProvider({ children, initialStateOverride }: AppProviderProps) {
  const [state, dispatch] = useReducer(
    appReducer,
    initialStateOverride ? { ...initialState, ...initialStateOverride } : initialState
  );

  // 편의 함수들 메모이제이션
  const actions = useMemo(
    () => ({
      // 사용자 관련
      setUser: (user: User | null) => dispatch({ type: 'SET_USER', payload: user }),
      setAuthenticated: (isAuthenticated: boolean) =>
        dispatch({ type: 'SET_AUTHENTICATED', payload: isAuthenticated }),

      // 즐겨찾기 관련
      setFavorites: (favorites: FavoriteRecipient[]) =>
        dispatch({ type: 'SET_FAVORITES', payload: favorites }),
      addFavorite: (recipient: FavoriteRecipient) =>
        dispatch({ type: 'ADD_FAVORITE', payload: recipient }),
      removeFavorite: (id: number) => dispatch({ type: 'REMOVE_FAVORITE', payload: id }),
      setRecentTransfers: (transfers: FavoriteRecipient[]) =>
        dispatch({ type: 'SET_RECENT_TRANSFERS', payload: transfers }),

      // 송금 관련
      setCurrentTransfer: (transfer: TransferInfo | null) =>
        dispatch({ type: 'SET_CURRENT_TRANSFER', payload: transfer }),
      setSelectedWallet: (wallet: WalletInfo | null) =>
        dispatch({ type: 'SET_SELECTED_WALLET', payload: wallet }),
      setWallets: (wallets: WalletInfo[]) => dispatch({ type: 'SET_WALLETS', payload: wallets }),

      // 쿠폰 관련
      setCoupons: (coupons: Coupon[]) => dispatch({ type: 'SET_COUPONS', payload: coupons }),
      setSelectedCoupon: (coupon: Coupon | null) =>
        dispatch({ type: 'SET_SELECTED_COUPON', payload: coupon }),

      // UI 상태
      setLoading: (isLoading: boolean) => dispatch({ type: 'SET_LOADING', payload: isLoading }),
      setError: (error: string | null) => dispatch({ type: 'SET_ERROR', payload: error }),
      setActiveTab: (tab: 'favorites' | 'recent') =>
        dispatch({ type: 'SET_ACTIVE_TAB', payload: tab }),
      resetState: () => dispatch({ type: 'RESET_STATE' }),
    }),
    []
  );

  const value = useMemo(() => ({ state, dispatch, actions }), [state, actions]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// 커스텀 훅
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

// 선택적 상태 접근 훅들
export function useUser() {
  const { state, actions } = useAppContext();
  return {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    setUser: actions.setUser,
    setAuthenticated: actions.setAuthenticated,
  };
}

export function useFavorites() {
  const { state, actions } = useAppContext();
  return {
    favorites: state.favorites,
    recentTransfers: state.recentTransfers,
    activeTab: state.activeTab,
    setFavorites: actions.setFavorites,
    addFavorite: actions.addFavorite,
    removeFavorite: actions.removeFavorite,
    setRecentTransfers: actions.setRecentTransfers,
    setActiveTab: actions.setActiveTab,
  };
}

export function useTransfer() {
  const { state, actions } = useAppContext();
  return {
    currentTransfer: state.currentTransfer,
    selectedWallet: state.selectedWallet,
    wallets: state.wallets,
    setCurrentTransfer: actions.setCurrentTransfer,
    setSelectedWallet: actions.setSelectedWallet,
    setWallets: actions.setWallets,
  };
}

export function useCoupons() {
  const { state, actions } = useAppContext();
  return {
    coupons: state.coupons,
    selectedCoupon: state.selectedCoupon,
    setCoupons: actions.setCoupons,
    setSelectedCoupon: actions.setSelectedCoupon,
  };
}

export function useUIState() {
  const { state, actions } = useAppContext();
  return {
    isLoading: state.isLoading,
    error: state.error,
    setLoading: actions.setLoading,
    setError: actions.setError,
    resetState: actions.resetState,
  };
}
