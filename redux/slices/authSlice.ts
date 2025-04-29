import { LoginAdmin } from '@/app/lib/authService';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const LoginAdminAsync = createAsyncThunk(
    'login/admin',
    async ({ email, password }: { email: string; password: string }) => {
      const response = await LoginAdmin(email, password);
      return response;
    }
  );

interface AuthState {
  email: string;
  password: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  email: "",
  password: "",
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginAdminAsync.pending, (state) => {
        state.isLoading = true; 
      })
      .addCase(LoginAdminAsync.fulfilled, (state) => {
        state.isLoading = false; 
      })
      .addCase(LoginAdminAsync.rejected, (state, action) => {
        state.isLoading = false;  
        state.error = action.error.message || "Failed to fetch content";
      });
    },
});

export const { setIsLoading, setError } = authSlice.actions;
export default authSlice.reducer;