
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProvider";

const SingUp = () => {
    const { singUpUser } = useContext(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        singUpUser(email, password)
            .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .then(error => console.error(error))
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid grid-cols-2 gap-4">
        <div className="text-center ">
          <img src={login} className="h-[480px]" alt="" />
        </div>
        <div>
          <h1 className="text-xl text-center my-3">Sign Up</h1>
          <form className="card flex-shrink-0 shadow-2xl bg-base-100 h-[600px]" onSubmit={handleSignUp}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <p>
                Already have an account <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
