import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from "./pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Todo } from "./pages/Todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./redux/token/tokenAction";
import { setUser } from "./redux/user/userAction";
import { useLayoutEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.tokenReducer.incomingToken);

  useLayoutEffect(() => {
    dispatch(setToken(localStorage.getItem("token")));
    dispatch(setUser(JSON.parse(localStorage.getItem("me"))));
  }, [token]);

  if (token) {
    return <Todo />;
  }

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" index element={<Login />} />
    </Routes>
  );
}

export default App;
