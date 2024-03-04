import "./register.css";

export const Register = () => {
  return (
    <form className="w-50 mx-auto d-flex flex-column gap-2">
      <h1 className="h3 mb-3 fw-normal">Please register</h1>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="Last Name" name="first_name" />
        <label htmlFor="floatingInput">First Name</label>
      </div>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="First Name" name="last_name" />
        <label htmlFor="floatingInput">Last Name</label>
      </div>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
    </form>
  );
};
