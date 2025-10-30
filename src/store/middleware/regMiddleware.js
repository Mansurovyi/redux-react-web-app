const regMiddleware = store => next => action => {
  if (action.type === 'REGISTER') {
    const { name, email, password } = action.payload;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(u => u.email === email)) {
      next({ type: 'REGISTER_FAIL', payload: 'Пользователь уже существует' });
    } else {
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('user', JSON.stringify(newUser));
      next({ type: 'REGISTER_SUCCESS', payload: newUser });
    }
  } else {
    next(action);
  }
};

export default regMiddleware;
