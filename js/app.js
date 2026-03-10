/**
 * 简易待办应用 - 业务逻辑
 * 使用 localStorage 持久化存储
 */

const STORAGE_KEY = 'todo-app-tasks';

const TodoApp = {
  getTasks() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  },

  getTaskById(id) {
    return this.getTasks().find(t => t.id === id) || null;
  },

  addTask({ title, description = '' }) {
    const tasks = this.getTasks();
    const task = {
      id: 'task_' + Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString()
    };
    tasks.push(task);
    this.saveTasks(tasks);
    return task;
  },

  updateTask(id, updates) {
    const tasks = this.getTasks();
    const idx = tasks.findIndex(t => t.id === id);
    if (idx < 0) return null;
    tasks[idx] = { ...tasks[idx], ...updates };
    this.saveTasks(tasks);
    return tasks[idx];
  },

  deleteTask(id) {
    const tasks = this.getTasks().filter(t => t.id !== id);
    this.saveTasks(tasks);
  },

  toggleTask(id) {
    const task = this.getTaskById(id);
    if (!task) return;
    this.updateTask(id, { completed: !task.completed });
  }
};

// 辅助函数（供 list.html 使用）
function formatDate(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  const now = new Date();
  if (d.toDateString() === now.toDateString()) {
    return '今天 ' + d.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  }
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
