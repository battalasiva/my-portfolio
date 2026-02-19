import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { portfolioAPI } from '../../services/api';

// Async thunk for fetching portfolio
export const fetchPortfolio = createAsyncThunk(
  'portfolio/fetchPortfolio',
  async (_, { rejectWithValue }) => {
    try {
      const response = await portfolioAPI.getPortfolio();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for creating portfolio
export const createPortfolio = createAsyncThunk(
  'portfolio/createPortfolio',
  async (data, { rejectWithValue }) => {
    try {
      const response = await portfolioAPI.createPortfolio(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for updating portfolio
export const updatePortfolio = createAsyncThunk(
  'portfolio/updatePortfolio',
  async (data, { rejectWithValue }) => {
    try {
      const response = await portfolioAPI.updatePortfolio(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    data: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch portfolio
      .addCase(fetchPortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create portfolio
      .addCase(createPortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = true;
      })
      .addCase(createPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update portfolio
      .addCase(updatePortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updatePortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = true;
      })
      .addCase(updatePortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearSuccess } = portfolioSlice.actions;
export default portfolioSlice.reducer;