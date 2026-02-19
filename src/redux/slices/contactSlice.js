import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { contactAPI } from '../../services/api';

// Async thunk for fetching contact info
export const fetchContact = createAsyncThunk(
  'contact/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactAPI.getContact();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for creating contact
export const createContact = createAsyncThunk(
  'contact/createContact',
  async (data, { rejectWithValue }) => {
    try {
      const response = await contactAPI.createContact(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for updating contact
export const updateContact = createAsyncThunk(
  'contact/updateContact',
  async (data, { rejectWithValue }) => {
    try {
      const response = await contactAPI.updateContact(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
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
      // Fetch contact
      .addCase(fetchContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create contact
      .addCase(createContact.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = true;
      })
      .addCase(createContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update contact
      .addCase(updateContact.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = true;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearSuccess } = contactSlice.actions;
export default contactSlice.reducer;