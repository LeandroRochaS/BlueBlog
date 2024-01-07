import "./styles.scss";
import logoblog from "../../images/svg/logo.svg";
import buscaSvg from "../../images/svg/buscainput.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuMobile, setMenuMobile] = useState(false);

  const descLogo = "Essa é a logo do blog";

  function handleMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  return (
    <>
      <header className="flex-space-between">
        <div className="flex-space-between">
          <div className="logo">
            <Link to={"/"}>
              <img src={logoblog} alt={descLogo} />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          onClick={handleMenuMobile}
          className={`bx ${menuMobile ? "active" : ""}`}
        ></div>

        <div className="flex-space-between ">
          <div className="search-container">
            <form className="search mr-5">
              <input
                type="text"
                className="input-search"
                placeholder="Buscar"
                name="search"
              />
              <img src={buscaSvg} alt="icone de lupa" />
            </form>
          </div>
          <div className="cta-desktop">
            <a className="btn" href="">
              Login
            </a>
          </div>
          <div className="cta-mobile ">
            <a className="link color-primary" href="">
              Login
            </a>
          </div>
        </div>
      </header>
      {/*  MENU MOBILE   */}

      <div className="relative">
        <div
          className={`menu-mobile ${
            menuMobile ? "menu-mobile-opened" : "menu-mobile-closed"
          }`}
        >
          <ul>
            <li>
              <Link to={"/about"} className="link-menu-mobile">
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="link-menu-mobile">
                Contact
              </Link>
            </li>
            <li className="py-2 px-2">
              <form className="search w-100 mr-5">
                <input
                  type="text"
                  className="input-search"
                  placeholder="Buscar"
                  name="search"
                />
                <img src={buscaSvg} alt="icone de lupa" />
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
