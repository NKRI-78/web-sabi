import { LoginAdmin } from '@/app/lib/authService';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const LoginAdminAsync = createAsyncThunk(
    'login/admin',
    async ({ val, password }: { val: string; password: string }) => {
      const response = await LoginAdmin(val, password);
      return response;
    }
  );

interface AuthState {
    loading: boolean;
    isAuthenticated: boolean;
    showPassword: boolean;
    value: string;
    password: string;
    token: string | null;
    error: string | null;
}

const initialState: AuthState = {
    loading: false,
    isAuthenticated: false,
    showPassword: false,
    value: "",
    password: "",
    token: null,
    error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
        state.value = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
        state.password = action.payload;
    },
    setShowPassword(state, action: PayloadAction<boolean>) {
        state.showPassword = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
        state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
        state.error = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
        state.token = action.payload;
        state.isAuthenticated = true;
        state.error = null;
    },
    clearToken(state) {
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginAdminAsync.pending, (state) => {
        state.loading = true; 
      })
      .addCase(LoginAdminAsync.fulfilled, (state) => {
        state.loading = false; 
      })
      .addCase(LoginAdminAsync.rejected, (state, action) => {
        state.loading = false;  
        state.error = action.error.message || "Failed to fetch content";
      });
    },
});

export const { setEmail, setLoading, setPassword, setShowPassword, setError } = authSlice.actions;
export default authSlice.reducer;