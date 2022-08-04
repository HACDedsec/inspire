import React from "react";
import { Animated } from "react-animated-css";

function Firstsection() {
  return (
    <section className="probootstrap-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 text-center probootstrap-hero probootstrap-hero-text">
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
    <section className="probootstrap-hero">
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

function SecondSection() {
  return (
    <section className="probootstrap-section probootstrap-bg-white probootstrap-zindex-above-showcase">
      <div className="container">
        <div className="row">
          <Animated>
            <div
              className="col-md-6 col-md-offset-3 text-center section-heading "
              data-animate-effect="fadeIn"
            >
              <h2>Platform Features</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                provident qui tempore natus quos quibusdam soluta at.
              </p>
            </div>
          </Animated>
        </div>

        <div className="row probootstrap-gutter60">
          <Animated animationIn="fadeInLeft" isVisible={true}>
            <div className="col-md-4 ">
              <div className="service text-center">
                <div className="icon">
                  <i className="icon-mobile3" />
                </div>
                <div className="text">
                  <h3>Responsive Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto provident qui tempore natus quos quibusdam soluta at.
                  </p>
                </div>
              </div>
            </div>
          </Animated>

          <Animated animationIn="fadeInUp" isVisible={true}>
            <div className="col-md-4 ">
              <div className="service text-center">
                <div className="icon">
                  <i className="icon-presentation" />
                </div>
                <div className="text">
                  <h3>Business Solutions</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto provident qui tempore natus quos quibusdam soluta at.
                  </p>
                </div>
              </div>
            </div>
          </Animated>

          <Animated animationIn="fadeInRight" isVisible={true}>
            <div className="col-md-4 ">
              <div className="service text-center">
                <div className="icon">
                  <i className="icon-circle-compass" />
                </div>
                <div className="text">
                  <h3>Brand Identity</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto provident qui tempore natus quos quibusdam soluta at.
                  </p>
                </div>
              </div>
            </div>
          </Animated>

          <Animated animationIn="fadeInLeft" isVisible={true}>
            <div className="col-md-4">
              <div className="service text-center">
                <div className="icon">
                  <i className="icon-lightbulb" />
                </div>
                <div className="text">
                  <h3>Creative Ideas</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto provident qui tempore natus quos quibusdam soluta at.
                  </p>
                </div>
              </div>
            </div>
          </Animated>

          <Animated animationIn="fadeInUp" isVisible={true}>
            <div className="col-md-4 ">
              <div className="service text-center">
                <div className="icon">
                  <i className="icon-magnifying-glass2" />
                </div>
                <div className="text">
                  <h3>Search Engine Friendly</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto provident qui tempore natus quos quibusdam soluta at.
                  </p>
                </div>
              </div>
            </div>
          </Animated>

          <Animated animationIn="fadeInRight" isVisible={true}>
            <div className="col-md-4 ">
              <div className="service text-center">
                <div className="icon">
                  <i className="icon-browser2" />
                </div>
                <div className="text">
                  <h3>Easy Customization</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto provident qui tempore natus quos quibusdam soluta at.
                  </p>
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}

function ThirdSection() {
  return (
    <section className="probootstrap-section pb0">
      <div className="container">
        <div className="row probootstrap-feature-showcase ">
          <div className="col-md-4 probootstrap-showcase-nav">
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
          <div className="col-md-8 " style={{ position: "relative" }}>
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

function Fourth() {
  return (
    <section className="probootstrap-section probootstrap-bg-white probootstrap-zindex-above-showcase">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center section-heading">
            <h2>More Features</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              provident qui tempore natus quos quibusdam soluta at.
            </p>
          </div>
        </div>
        {/* END row */}
        <div className="row">
          <div
            className="col-md-7 col-md-push-5 "
            data-animate-effect="fadeInRight"
          >
            <div className="owl-carousel owl-carousel-fullwidth border-rounded">
              <div className="item">
                <img
                  src="img/img_showcase_1.jpg"
                  alt="Free HTML5 Bootstrap Template by GetTemplates.co"
                />
              </div>
              <div className="item">
                <img
                  src="img/img_showcase_2.jpg"
                  alt="Free HTML5 Bootstrap Template by GetTemplates.co"
                />
              </div>
              <div className="item">
                <img
                  src="img/img_showcase_1.jpg"
                  alt="Free HTML5 Bootstrap Template by GetTemplates.co"
                />
              </div>
              <div className="item">
                <img
                  src="img/img_showcase_2.jpg"
                  alt="Free HTML5 Bootstrap Template by GetTemplates.co"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5 col-md-pull-7">
            <div
              className="service left-icon "
              data-animate-effect="fadeInLeft"
            >
              <div className="icon">
                <i className="icon-mobile3" />
              </div>
              <div className="text">
                <h3>Responsive Design</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit iusto
                  provident.
                </p>
              </div>
            </div>
            <div
              className="service left-icon "
              data-animate-effect="fadeInLeft"
            >
              <div className="icon">
                <i className="icon-presentation" />
              </div>
              <div className="text">
                <h3>Business Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit iusto
                  provident.
                </p>
              </div>
            </div>
            <div
              className="service left-icon "
              data-animate-effect="fadeInLeft"
            >
              <div className="icon">
                <i className="icon-circle-compass" />
              </div>
              <div className="text">
                <h3>Brand Identity</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit iusto
                  provident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fifth() {
  return (
    <section className="probootstrap-section probootstrap-border-top probootstrap-bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center section-heading ">
            <h2>What People Says</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              provident qui tempore natus quos quibusdam soluta at.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 " data-animate-effect="fadeIn">
            <div className="probootstrap-testimony-wrap text-center">
              <figure>
                <img
                  src="img/person_1.jpg"
                  alt="Free Bootstrap Template by uicookies.com"
                />
              </figure>
              <blockquote className="quote">
                “Design must be functional and functionality must be translated
                into visual aesthetics, without any reliance on gimmicks that
                have to be explained.”{" "}
                <cite className="author">
                  — Ferdinand A. Porsche <br />{" "}
                  <span>Design Lead at AirBNB</span>
                </cite>
              </blockquote>
            </div>
          </div>
          <div className="col-md-4 " data-animate-effect="fadeIn">
            <div className="probootstrap-testimony-wrap text-center">
              <figure>
                <img
                  src="img/person_2.jpg"
                  alt="Free Bootstrap Template by uicookies.com"
                />
              </figure>
              <blockquote className="quote">
                “Creativity is just connecting things. When you ask creative
                people how they did something, they feel a little guilty because
                they didn’t really do it, they just saw something. It seemed
                obvious to them after a while.”{" "}
                <cite className="author">
                  — Steve Jobs <br /> <span>Co-Founder Square</span>
                </cite>
              </blockquote>
            </div>
          </div>
          <div className="col-md-4 " data-animate-effect="fadeIn">
            <div className="probootstrap-testimony-wrap text-center">
              <figure>
                <img
                  src="img/person_3.jpg"
                  alt="Free Bootstrap Template by uicookies.com"
                />
              </figure>
              <blockquote className="quote">
                “I think design would be better if designers were much more
                skeptical about its applications. If you believe in the potency
                of your craft, where you choose to dole it out is not something
                to take lightly.”{" "}
                <cite className="author">
                  — Frank Chimero <br />{" "}
                  <span>Creative Director at Twitter</span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sixth() {
  return (
    <section className="probootstrap-section proboostrap-clients probootstrap-bg-white probootstrap-border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 section-heading ">
            <h2>Our Clients</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              provident qui tempore natus quos quibusdam soluta at.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              provident qui tempore natus quos quibusdam soluta at.
            </p>
          </div>
        </div>
        {/* END row */}
        <div className="row">
          <div
            className="col-md-3 col-sm-6 col-xs-6 text-center client-logo "
            data-animate-effect="fadeIn"
          >
            <img
              src="img/client_1.png"
              className="img-responsive"
              alt="Free Bootstrap Template by uicookies.com"
            />
          </div>
          <div
            className="col-md-3 col-sm-6 col-xs-6 text-center client-logo "
            data-animate-effect="fadeIn"
          >
            <img
              src="img/client_2.png"
              className="img-responsive"
              alt="Free Bootstrap Template by uicookies.com"
            />
          </div>
          <div className="clearfix visible-sm-block visible-xs-block" />
          <div
            className="col-md-3 col-sm-6 col-xs-6 text-center client-logo "
            data-animate-effect="fadeIn"
          >
            <img
              src="img/client_3.png"
              className="img-responsive"
              alt="Free Bootstrap Template by uicookies.com"
            />
          </div>
          <div
            className="col-md-3 col-sm-6 col-xs-6 text-center client-logo "
            data-animate-effect="fadeIn"
          >
            <img
              src="img/client_4.png"
              className="img-responsive"
              alt="Free Bootstrap Template by uicookies.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Seven() {
  return (
    <section className="probootstrap-cta">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 data-animate-effect="fadeInRight">
              We'd like to help and talk with you
            </h2>
            <a
              href="#"
              role="button"
              className="btn btn-primary btn-lg btn-ghost "
              data-animate-effect="fadeInLeft"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footersection() {
  return (
    <>
      <footer className="probootstrap-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4 ">
                  <div className="probootstrap-footer-widget">
                    <h3>Links</h3>
                    <ul>
                      <li>
                        <a href="#">Knowledge Base</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                      <li>
                        <a href="#">Press Releases</a>
                      </li>
                      <li>
                        <a href="#">Terms of services</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 ">
                  <div className="probootstrap-footer-widget">
                    <h3>Links</h3>
                    <ul>
                      <li>
                        <a href="#">Knowledge Base</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                      <li>
                        <a href="#">Press Releases</a>
                      </li>
                      <li>
                        <a href="#">Terms of services</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 ">
                  <div className="probootstrap-footer-widget">
                    <h3>Links</h3>
                    <ul>
                      <li>
                        <a href="#">Knowledge Base</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                      <li>
                        <a href="#">Press Releases</a>
                      </li>
                      <li>
                        <a href="#">Terms of services</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="probootstrap-footer-widget">
                <h3>Paragraph</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  provident qui tempore natus quos quibusdam soluta at.
                </p>
                <ul className="probootstrap-footer-social">
                  <li>
                    <a href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-github" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 copyright ">
              <p>
                <small>
                  © 2017 <a href="#">uiCookies:Inspire</a>. All Rights Reserved.{" "}
                  <br /> Designed &amp; Developed with{" "}
                  <i className="icon icon-heart" /> by{" "}
                  <a href="https://uicookies.com/">uicookies.com</a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export {
  Firstsection,
  Firstsub,
  SecondSection,
  ThirdSection,
  Fourth,
  Fifth,
  Sixth,
  Seven,
  Footersection,
};
