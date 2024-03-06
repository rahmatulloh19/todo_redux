import { useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../redux/token/tokenAction";
import { clearUser } from "../../redux/user/userAction";
import { useNavigate } from "react-router-dom";
import { instance } from "../../axios";
import { getSingleTodo, getTodo } from "../../redux/todo/todoActions";
import { Modal } from "../../components/Modal/Modal";
import { DeleteModal } from "../../components/DeleteModal/DeleteModal";

export const Todo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todo = useSelector((state) => state.todoReducer.todo);
  const todoOnModal = useSelector((state) => state.todoReducer.editingTodo);

  const todoRef = useRef();
  const descRef = useRef();

  const todoEditRef = useRef();
  const descEditRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    instance
      .post("todo/", {
        todo: todoRef.current.value.trim(),
        desc: descRef.current.value.trim(),
      })
      .then(() => {
        setTodo();
      })
      .catch((err) => {
        console.log(err);
      });

    todoRef.current.value = "";
    descRef.current.value = "";
  };

  const handleSubmitEdit = (evt) => {
    evt.preventDefault();

    instance
      .put("todo/" + todoOnModal.id, {
        todo: todoEditRef.current.value.trim(),
        desc: descEditRef.current.value.trim(),
      })
      .then(() => {
        setTodo();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmitDelete = (evt) => {
    evt.preventDefault();

    instance
      .delete("todo/" + todoOnModal.id)
      .then(() => {
        setTodo();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setTodo = async () => {
    try {
      const res = await instance.get("todo/");
      console.log(res);
      dispatch(getTodo(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    setTodo();
  }, []);

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
                  <td style={{ display: "flex", gap: 3 }}>
                    <button
                      className="btn btn-primary me-3"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        dispatch(getSingleTodo(mission.id));
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      onClick={() => {
                        dispatch(getSingleTodo(mission.id));
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

      <Modal modalTitle={`Editing Todo with Id: ${todoOnModal.id ? todoOnModal.id : ""}`}>
        <form className="d-flex flex-column gap-3" onSubmit={handleSubmitEdit}>
          <input className="form-control" type="text" ref={todoEditRef} name="todo" placeholder="Enter todo... " defaultValue={todoOnModal.id ? todoOnModal.todo : ""} />
          <textarea className="form-control " ref={descEditRef} name="todo_desc" placeholder="Enter todo description... " defaultValue={todoOnModal.id ? todoOnModal.desc : ""}></textarea>
          <button className="btn btn-success" data-bs-toggle="modal" type="submit">
            Edit
          </button>
        </form>
      </Modal>

      <DeleteModal modalTitle={`Deleting Todo with Id: ${todoOnModal.id ? todoOnModal.id : ""}`}>
        <form className="d-flex flex-column gap-3" onSubmit={handleSubmitDelete}>
          <div className="d-flex gap-3 justify-content-end">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close Window
            </button>
            <button className="btn btn-danger" data-bs-toggle="modal" type="submit">
              DELETE
            </button>
          </div>
        </form>
      </DeleteModal>
    </div>
  );
};
