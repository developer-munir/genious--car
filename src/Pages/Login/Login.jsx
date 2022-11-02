import React, { useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      loginUser(email,password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => {
          console.log(error);
      })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid grid-cols-2 gap-4">
        <div className="text-center ">
          <img src={login} className="h-[480px]" alt="" />
        </div>
        <div>
          <h1 className="text-xl text-center my-3">Login</h1>
          <form className="card flex-shrink-0 shadow-2xl bg-base-100 h-[600px]" onSubmit={handleLogin}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p>
                  New here? <Link to="/signup">Sing Up</Link>{" "}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
