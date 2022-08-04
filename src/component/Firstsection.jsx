import React from "react";

function Firstsection() {
  return (
    <section className="probootstrap-hero">
      <div className="container">
        <div className="row">
          <div
            className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 text-center probootstrap-hero probootstrap-hero-text"
            data-animate-effect="fadeIn"
          >
            <h1>Launch your awesome startup now!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              provident qui tempore natus quos quibusdam soluta at.
            </p>
            <p>
              <a href="#" className="btn btn-primary btn-lg" role="button">
                Get This App
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary btn-ghost btn-lg"
                role="button"
              >
                Try it for free
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Firstsub() {
  return (
    <section style={{marginTop: -90}} className="probootstrap-hero">
      <div className="container">
        <div className="row probootstrap-feature-showcase">
          <div className="col-md-4 col-md-push-8 probootstrap-showcase-nav">
            <ul>
              <li className="active">
                <a href="#">Responsive Design</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  provident qui tempore natus quos quibusdam soluta at.
                </p>
              </li>
              <li>
                <a href="#">Business Solution</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  provident qui tempore natus quos quibusdam soluta at.
                </p>
              </li>
              <li>
                <a href="#">Brand Identity</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  provident qui tempore natus quos quibusdam soluta at.
                </p>
              </li>
              <li>
                <a href="#">Creative Ideas</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  provident qui tempore natus quos quibusdam soluta at.
                </p>
              </li>
              <li>
                <a href="#">Search Engine Friendly</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  provident qui tempore natus quos quibusdam soluta at.
                </p>
              </li>
              <li>
                <a href="#">Easy Customization</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  provident qui tempore natus quos quibusdam soluta at.
                </p>
              </li>
            </ul>
          </div>
          <div
            className="col-md-8 col-md-pull-4 "
            style={{ position: "relative" }}
          >
            <div className="probootstrap-home-showcase-wrap">
              <div className="probootstrap-home-showcase-inner">
                <div className="probootstrap-chrome">
                  <div>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="probootstrap-image-showcase">
                  <ul className="probootstrap-images-list">
                    <li className="active">
                      <img
                        src="img/img_showcase_2.jpg"
                        alt="Image"
                        className="img-responsive"
                      />
                    </li>
                    <li>
                      <img
                        src="img/img_showcase_1.jpg"
                        alt="Image"
                        className="img-responsive"
                      />
                    </li>
                    <li>
                      <img
                        src="img/img_showcase_2.jpg"
                        alt="Image"
                        className="img-responsive"
                      />
                    </li>
                    <li>
                      <img
                        src="img/img_showcase_1.jpg"
                        alt="Image"
                        className="img-responsive"
                      />
                    </li>
                    <li>
                      <img
                        src="img/img_showcase_2.jpg"
                        alt="Image"
                        className="img-responsive"
                      />
                    </li>
                    <li>
                      <img
                        src="img/img_showcase_1.jpg"
                        alt="Image"
                        className="img-responsive"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Firstsection, Firstsub };
