import React from "react";

function Navbar() {
    return (
        <nav className="navbar probootstrap-megamenu navbar-default probootstrap-navbar">
  <div className="container">
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#navbar-collapse"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <a className="navbar-brand" href="index.html" title="uiCookies:Inspire">
        Inspire
      </a>
    </div>
    <div id="navbar-collapse" className="navbar-collapse collapse">
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li className="dropdown">
          <a href="#" data-toggle="dropdown" className="dropdown-toggle">
            Pages
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="team.html">Team</a>
            </li>
            <li className="dropdown-submenu dropdown">
              <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                <span>Sub Menu</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Second Level Menu</a>
                </li>
                <li>
                  <a href="#">Second Level Menu</a>
                </li>
                <li>
                  <a href="#">Second Level Menu</a>
                </li>
                <li>
                  <a href="#">Second Level Menu</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="faq.html">FAQ</a>
            </li>
            <li>
              <a href="pricing.html">Pricing</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li className="probootstra-cta-button">
          <a
            href="#"
            className="btn"
            data-toggle="modal"
            data-target="#loginModal"
          >
            Log in
          </a>
        </li>
        <li className="probootstra-cta-button last">
          <a
            href="#"
            className="btn btn-ghost"
            data-toggle="modal"
            data-target="#signupModal"
          >
            Sign up
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar;