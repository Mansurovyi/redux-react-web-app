const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('user'),
  loginError: null,
  registerError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/REGISTER_SUCCESS':
      return { ...state, user: action.payload, isAuthenticated: true, registerError: null };
    case 'auth/REGISTER_FAIL':
      return { ...state, registerError: action.payload };
    case 'auth/LOGIN_SUCCESS':
      return { ...state, user: action.payload, isAuthenticated: true, loginError: null };
    case 'auth/LOGIN_FAIL':
      return { ...state, loginError: action.payload };
    case 'auth/LOGOUT':
      return { ...state, user: null, isAuthenticated: false, loginError: null, registerError: null };
    default:
      return state;
  }
};

export default authReducer;
