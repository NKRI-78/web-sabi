import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchContentHistories,
  fetchContentKKList,
  fetchContentList,
} from "@lib/contentService";
import { Content } from "@interfaces/content/content";
import { ContentHistoryDataItem } from "@interfaces/content/content-history";
import { ContentKkData } from "@/app/interfaces/content/kk";

export const fetchContentListAsync = createAsyncThunk(
  "content/list",
  async (search: string) => {
    const response = await fetchContentList(search);
    return response;
  }
);

export const fetchContentKKListAsync = createAsyncThunk(
  "content/kk/list",
  async (search: string) => {
    const response = await fetchContentKKList(search);
    return response;
  }
);

export const fetchContentHistoryAsync = createAsyncThunk(
  "content/histories",
  async () => {
    const response = await fetchContentHistories();
    return response;
  }
);

interface ContentState {
  contents: Content | null;
  contentHistories: ContentHistoryDataItem[];
  contentKK: ContentKkData[];
  placeholder: string;
  search: string;
  isLoading: boolean;
  error: string | null;
  isRedirect: boolean;
}

const initialState: ContentState = {
  contents: null,
  contentHistories: [],
  contentKK: [],
  placeholder: "",
  search: "",
  isLoading: false,
  error: null,
  isRedirect: false,
};

const contentSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {
    setContents(state, action: PayloadAction<Content>) {
      state.contents = action.payload;
    },
    setContentsKK(state, action: PayloadAction<ContentKkData[]>) {
      state.contentKK = action.payload;
    },
    setSearchPlacholder(state, action: PayloadAction<string>) {
      state.placeholder = action.payload;
    },
    setContentHistories(
      state,
      action: PayloadAction<ContentHistoryDataItem[]>
    ) {
      state.contentHistories = action.payload;
    },
    setSearch(state, action: PayloadAction<any>) {
      state.search = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setRedirect(state, action: PayloadAction<boolean>) {
      state.isRedirect = action.payload;
    },
    resetContents(state) {
      state.contents = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContentListAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContentListAsync.fulfilled, (state, action) => {
        state.contents = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContentListAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch content";
      })
      .addCase(fetchContentKKListAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContentKKListAsync.fulfilled, (state, action) => {
        console.log("content kk", action.payload)
        state.contentKK = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContentKKListAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch content";
      })

      .addCase(fetchContentHistoryAsync.fulfilled, (state, action) => {
        state.contentHistories = action.payload;
      });
  },
});

export const {
  setContents,
  setSearchPlacholder,
  setSearch,
  setIsLoading,
  setError,
  setContentHistories,
  setRedirect,
  resetContents,
} = contentSlice.actions;
export default contentSlice.reducer;
