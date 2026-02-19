import apiService from './apiService';

// Portfolio API
export const portfolioAPI = {
  getPortfolio: () => apiService.get('/portfolio'),
  createPortfolio: (data) => apiService.post('/portfolio', data),
  updatePortfolio: (data) => apiService.put('/portfolio', data),
};

// Projects API
export const projectsAPI = {
  getProjects: (params) => apiService.get('/projects', { params }),
  getProjectById: (id) => apiService.get(`/projects/${id}`),
  createProject: (data) => apiService.post('/projects', data),
  updateProject: (id, data) => apiService.put(`/projects/${id}`, data),
  deleteProject: (id) => apiService.delete(`/projects/${id}`),
};

// Contact API
export const contactAPI = {
  getContact: () => apiService.get('/contact'),
  createContact: (data) => apiService.post('/contact', data),
  updateContact: (data) => apiService.put('/contact', data),
};