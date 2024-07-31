import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div
        id="navbar"
        className="navbar-area navbar-area-with-position-relative"
      >
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/black-logo.png"
                  alt="logo"
                  width={149}
                  height={37}
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath == "/" && "active"
                        }`}
                    >
                      Home
                    </Link>


                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-us/"
                      className={`nav-link ${currentPath == "/about-us/" && "active"
                        }`}
                    >
                      About Us
                    </Link>

                  </li>

                  <li className="nav-item">
                    <Link
                      href="/services/"
                      className={`nav-link ${currentPath.startsWith('/services/') ? 'active' : ''}`}
                    >
                      Services <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/computer-vizion.html"
                          className={`nav-link ${currentPath === "/computer-vizion.html" ? 'active' : ''}`}
                        >
                          Computer Vision
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/data-analysis.html"
                          className={`nav-link ${currentPath === "/data-analysis.html" ? 'active' : ''}`}
                        >
                          Data Analysis
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/finance.html"
                          className={`nav-link ${currentPath === "/services/finance.html" ? 'active' : ''}`}
                        >
                          Finance
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/digital-marketing.html"
                          className={`nav-link ${currentPath === "/digital-marketing.html" ? 'active' : ''}`}
                        >
                          Marketing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/nlp.html"
                        >
                          Natural Language Processing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/security.html"
                          className={`nav-link ${currentPath === "/services/security/" ? 'active' : ''}`}
                        >
                          Security
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/projects/"
                      className={`nav-link ${currentPath == "/projects/" && "active"
                        }`}
                    >
                      Projects
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/blog/"
                      className={`nav-link ${currentPath == "/blog/" && "active"
                        }`}
                    >
                      Blog
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${currentPath == "/contact/" && "active"
                        }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                {/* others-options */}
                <div className="others-options">

                  <Link href="/contact" className="btn btn-primary">
                    Schedule a Demo
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
