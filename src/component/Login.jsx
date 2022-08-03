import React from "react";

function Login() {
    return(
        <div
  className="modal fadeInUp probootstrap-animated"
  id="loginModal"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="loginModalLabel"
  aria-hidden="true"
>
  <div className="vertical-alignment-helper">
    <div className="modal-dialog modal-md vertical-align-center">
      <div className="modal-content">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-hidden="true"
        >
          <i className="icon-cross" />
        </button>
        <div className="probootstrap-modal-flex">
          <div
            className="probootstrap-modal-figure"
            style={{ backgroundImage: "url(img/modal_bg.jpg)" }}
          />
          <div className="probootstrap-modal-content">
            <form action="#" className="probootstrap-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group clearfix mb40">
                <label htmlFor="remember" className="probootstrap-remember">
                  <input type="checkbox" id="remember" /> Remember Me
                </label>
                <a href="#" className="probootstrap-forgot">
                  Forgot Password?
                </a>
              </div>
              <div className="form-group text-left">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="submit"
                      className="btn btn-primary btn-block"
                      defaultValue="Sign In"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group probootstrap-or">
                <span>
                  <em>or</em>
                </span>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-12">
                    <button className="btn btn-primary btn-ghost btn-block btn-connect-facebook">
                      <span>connect with</span> Facebook
                    </button>
                    <button className="btn btn-primary btn-ghost btn-block btn-connect-google">
                      <span>connect with</span> Google
                    </button>
                    <button className="btn btn-primary btn-ghost btn-block btn-connect-twitter">
                      <span>connect with</span> Twitter
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Login;