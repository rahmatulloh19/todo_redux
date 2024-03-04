import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { clearToken } from "../../redux/token/tokenAction";
import { clearUser } from "../../redux/user/userAction";
import { useNavigate } from "react-router-dom";

export const Todo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoRef = useRef();
  const descRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:3000/todo/", {
        todo: todoRef.current.value.trim(),
        desc: descRef.current.value.trim(),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logOutFunc = () => {
    localStorage.removeItem("me");
    localStorage.removeItem("token");
    dispatch(clearToken());
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="text-center fs-1">Todo</h1>
      <form className="d-flex gap-3 w-75 mx-auto my-5" onSubmit={handleSubmit}>
        <input className="form-control " type="text" ref={todoRef} name="todo" placeholder="Enter todo ... " />
        <input className="form-control " type="text" ref={descRef} name="todo_desc" placeholder="Enter todo description ... " />
        <button className="btn btn-success" type="submit">
          Add
        </button>
        <button className="btn btn-danger flex-shrink-0" type="button" onClick={logOutFunc}>
          LOG OUT
        </button>
      </form>
      <table className="table table-striped align-middle table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Desc</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Yugurish</td>
            <td>ertalab turib yugurish</td>
            <td>
              <button className="btn btn-danger me-2" type="button">
                Delete
              </button>
              <button className="btn btn-warning" type="button">
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Yugurish</td>
            <td>ertalab turib yugurish</td>
            <td>
              <button className="btn btn-danger me-2" type="button">
                Delete
              </button>
              <button className="btn btn-warning" type="button">
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Yugurish</td>
            <td>ertalab turib yugurish</td>
            <td>
              <button className="btn btn-danger me-2" type="button">
                Delete
              </button>
              <button className="btn btn-warning" type="button">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
