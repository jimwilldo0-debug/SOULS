import { create } from 'zustand';
import { User, AuthState } from '../types';
import { apiClient } from '../services/api';

interface AuthStore extends AuthState {
  signup: (email: string, password: string, displayName: string, dob?: string) => Promise<void>;
  signin: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  verify: (token: string) => Promise<void>;
  setUser: (user: User) => void;
  setLoading: (loading: boolean) => void;
  setError: (error?: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: undefined,
  user: undefined,
  isLoading: false,
  error: undefined,

  signup: async (email, password, displayName, dob?) => {
    set({ isLoading: true, error: undefined });
    try {
      const result = await apiClient.signup(email, password, displayName, dob);
      // Store might show "verification sent" message
      set({ isLoading: false });
    } catch (err: any) {
      set({
        isLoading: false,
        error: err.response?.data?.message || 'Signup failed',
      });
    }
  },

  signin: async (email, password) => {
    set({ isLoading: true, error: undefined });
    try {
      const { token, user } = await apiClient.signin(email, password);
      set({ token, user, isLoading: false });
    } catch (err: any) {
      set({
        isLoading: false,
        error: err.response?.data?.message || 'Signin failed',
      });
    }
  },

  logout: async () => {
    await apiClient.clearToken();
    set({ token: undefined, user: undefined });
  },

  verify: async (token) => {
    set({ isLoading: true, error: undefined });
    try {
      const result = await apiClient.verify(token);
      set({ isLoading: false });
    } catch (err: any) {
      set({
        isLoading: false,
        error: err.response?.data?.message || 'Verification failed',
      });
    }
  },

  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
