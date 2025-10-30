import { clearFavorites } from "../favoritesReducer";

const authMiddleware = store => next => action => {
  if (action.type === "LOGIN") {
    const { email, password } = action.payload;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      next({ type: "LOGIN_SUCCESS", payload: user });
    } else {
      next({ type: "LOGIN_FAIL", payload: "Неверный email или пароль" });
    }
  } else if (action.type === "LOGOUT") {
    localStorage.removeItem("user");
    next({ type: "LOGOUT" });
    store.dispatch(clearFavorites());
  } else {
    next(action);
  }
};

export default authMiddleware;
