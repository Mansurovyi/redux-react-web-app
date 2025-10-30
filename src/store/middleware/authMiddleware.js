const authMiddleware = store => next => action => {
  if (action.type === 'LOGIN') {
    const { email, password } = action.payload;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      next({ type: 'auth/LOGIN_SUCCESS', payload: user });
    } else {
      next({ type: 'auth/LOGIN_FAIL', payload: 'Неверный email или пароль' });
    }
  } else if (action.type === 'LOGOUT') {
    localStorage.removeItem('user');
    next({ type: 'auth/LOGOUT' });
  } else {
    next(action);
  }
};

export default authMiddleware;
