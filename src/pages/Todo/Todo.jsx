import { useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../redux/token/tokenAction";
import { clearUser } from "../../redux/user/userAction";
import { useNavigate } from "react-router-dom";
import { instance } from "../../axios";
import { getTodo, postTodo } from "../../redux/todo/todoActions";

export const Todo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todo = useSelector((state) => state.todoReducer.todo);

  const todoRef = useRef();
  const descRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    instance
      .post("todo/", {
        todo: todoRef.current.value.trim(),
        desc: descRef.current.value.trim(),
      })
      .then((res) => {
        dispatch(postTodo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useLayoutEffect(() => {
    instance("/todo").then((res) => {
      dispatch(getTodo(res.data));
      console.log(res.data);
    });
  }, [dispatch]);

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
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todo &&
            todo.map((mission) => {
              return (
                <tr key={mission.id}>
                  <th scope="row">{mission.id}</th>
                  <td>{mission.todo}</td>
                  <td>{mission.desc}</td>
                  <td>
                    <button
                      className="btn btn-primary me-3"
                      type="button"
                      onClick={() => {
                        // dispatch(
                        //   postTodo({
                        //     id: mission.id,
                        //     todo: mission.todo,
                        //     todo_desc: mission.todo_desc,
                        //   })
                        // );
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => {
                        // dispatch(
                        //   postTodo({
                        //     id: mission.id,
                        //     todo: mission.todo,
                        //     todo_desc: mission.todo_desc,
                        //   })
                        // );
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
