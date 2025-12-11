// modules/auth.js
const USERS_KEY = 'myapp_users';
const CURRENT_KEY = 'myapp_current_user';

export function saveUser(user) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function findUserByEmail(email) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  return users.find(u => u.email === email);
}

export function validateLogin(email, password) {
  const user = findUserByEmail(email);
  if (!user) return false;
  return user.password === password;
}

export function setCurrentUser(email) {
  localStorage.setItem(CURRENT_KEY, JSON.stringify({ email }));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CURRENT_KEY) || 'null');
}

export function logout() {
  localStorage.removeItem(CURRENT_KEY);
}
ds