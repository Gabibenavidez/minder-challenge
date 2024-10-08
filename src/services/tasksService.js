import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Encapsulate all task-related API calls into a single object for easy access
const tasks = {
  // Get all tasks (GET /tasks)
  getAll: () => api.get('/tasks'),

  // Get a single task by its ID (GET /tasks/{id})
  get: (id) => api.get(`/tasks/${id}`),

  // Create a new task (POST /tasks)
  create: (data) => api.post('/tasks', data),

  // Update an existing task by its ID (PUT /tasks/{id})
  update: (id, data) => api.put(`/tasks/${id}`, data),

  // Delete a task by its ID (DELETE /tasks/{id})
  delete: (id) => api.delete(`/tasks/${id}`),
};

// Encapsulate all category-related API calls into another object
const categories = {
  // Get all categories (GET /categories)
  getAll: () => api.get('/categories'),
};

// Export the API object that contains tasks and categories methods
// This allows for easy reuse throughout the application
export default {
  tasks,
  categories,
};
