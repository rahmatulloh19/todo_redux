import { useRef } from "react";
import "./register.css";

export const Register = () => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log({
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    });
  };

  return (
    <form className="w-50 mx-auto d-flex flex-column gap-2" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Please register</h1>
      <div className="form-floating">
        <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" name="first_name" ref={firstName} />
        <label htmlFor="floatingInput">First Name</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="floatingInput" placeholder="First Name" name="last_name" ref={lastName} />
        <label htmlFor="floatingInput">Last Name</label>
      </div>
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
