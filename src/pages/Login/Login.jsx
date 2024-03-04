import { useRef } from "react";
import "../Register/register.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/token/tokenAction";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/user/userAction";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:3000/login", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("me", JSON.stringify(res.data.user));
          dispatch(setToken(res.data.accessToken));
          dispatch(setUser(res.data.user));
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="w-50 mx-auto d-flex flex-column gap-2" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Please Login</h1>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" ref={email} />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" ref={password} />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign up
      </button>
    </form>
  );
};
