import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { projectsAPI } from '../../services/api';

// Async thunk for fetching projects
export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await projectsAPI.getProjects(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for creating project
export const createProject = createAsyncThunk(
  'projects/createProject',
  async (data, { rejectWithValue }) => {
    try {
      const response = await projectsAPI.createProject(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for updating project
export const updateProject = createAsyncThunk(
  'projects/updateProject',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await projectsAPI.updateProject(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for deleting project
export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (id, { rejectWithValue }) => {
    try {
      await projectsAPI.deleteProject(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    list: [],
    selectedProject: null,
    loading: false,
    error: null,
    success: false,
    pagination: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = false;
    },
    clearSelectedProject: (state) => {
      state.selectedProject = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all projects
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create project
      .addCase(createProject.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
        state.success = true;
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update project
      .addCase(updateProject.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.list.findIndex(p => p._id === action.payload._id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
        state.success = true;
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete project
      .addCase(deleteProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.loading = false;
        state.list = state.list.filter(p => p._id !== action.payload);
        state.success = true;
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearSuccess, clearSelectedProject } = projectsSlice.actions;
export default projectsSlice.reducer;