import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchContentList } from '@lib/contentService';
import { Content } from '@interfaces/content/content';

export const fetchContentListAsync = createAsyncThunk('content/list',
  async (search: string) => {
    const response = await fetchContentList(search);
    return response;
  }
);

interface ContentState {
  contents: Content | null;
  search: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: ContentState = {
  contents: null,
  search: "",
  isLoading: false,
  error: null,
};

const contentSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    setContents(state, action: PayloadAction<Content>) {
      state.contents = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContentListAsync.fulfilled, (state, action) => {
      state.contents = action.payload;
    });
  },
});

export const { setContents, setSearch, setIsLoading, setError } = contentSlice.actions;
export default contentSlice.reducer;