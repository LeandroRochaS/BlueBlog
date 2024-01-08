import "./styles.scss";
import logoblog from "../../images/svg/logo.svg";
import buscaSvg from "../../images/svg/buscainput.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import logout from "../../images/svg/log-out.svg";
import GoToTop from "../../utils/GoTop";

const initialValueForm = {
  search: "",
};

export default function Header() {
  const [menuMobile, setMenuMobile] = useState(false);
  const [form, setForm] = useState(initialValueForm);
  const navigate = useNavigate();
  const { isLoggedUser, userDataAuthContext, logoutAuthContext } =
    useAuthContext();

  function handleMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onChange(e: any) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSearch(e: any) {
    e.preventDefault();

    navigate(`/search/${form.search}`);
  }

  return (
    <>
      <header className="">
        <div className="flex-space-between header">
          <div className="flex-space-between">
            <div className="logo">
              <Link to={"/"}>
                <img src={logoblog} alt={"logo do blog"} />
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
                  className=""
                  placeholder="Buscar"
                  name="search"
                  onChange={(e) => onChange(e)}
                  autoComplete="off"
                />
                <img
                  src={buscaSvg}
                  onClick={(e) => handleSearch(e)}
                  alt="icone de lupa"
                />
              </form>
            </div>
            {!isLoggedUser && !userDataAuthContext ? (
              <>
                <div className="cta-desktop">
                  <Link to={"/login"} className="btn">
                    Login
                  </Link>
                </div>
                <div className="cta-mobile ">
                  <Link to={"/login"} className="btn ">
                    Login
                  </Link>
                </div>
              </>
            ) : (
              <div className="cta-desktop flex-aling">
                <img
                  src={logout}
                  alt=""
                  onClick={logoutAuthContext}
                  className="icon-small-2 mr-2"
                  style={{ cursor: "pointer" }}
                />
                <Link to={"/profile"} className="">
                  <img
                    src={userDataAuthContext?.ImageProfile}
                    alt="foto de perfil"
                    className="profile b-primary mr-2 "
                  />
                </Link>
                <p className="color-white">Olá, {userDataAuthContext?.name}</p>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="relative mb-12">
        <div className={`menu-mobile ${menuMobile ? "showmenu" : ""}`}>
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
              <form className="search mr-5">
                <input
                  type="text"
                  className=""
                  placeholder="Buscar"
                  name="search"
                  onChange={(e) => onChange(e)}
                />
                <img
                  src={buscaSvg}
                  alt="icone de lupa"
                  onClick={(e) => handleSearch(e)}
                />
              </form>
            </li>
          </ul>
        </div>
        <GoToTop />
      </div>
    </>
  );
}
