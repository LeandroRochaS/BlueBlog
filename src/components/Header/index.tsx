import "./styles.scss";
import logoblog from "../../images/svg/logo.svg";
import buscaSvg from "../../images/svg/buscainput.svg";

export default function Header() {
  const descLogo = "Essa é a logo do blog";

  return (
    <>
      <header className="flex-space-between">
        <div className="flex-space-between">
          <div className="logo">
            <a>
              <img src={logoblog} alt={descLogo} />
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#" className="nav-link">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="bx"></div>

        <div className="flex-space-between ">
          <form className="search mr-5">
            <input
              type="text"
              className="input-search"
              placeholder="Buscar"
              name="search"
            />
            <img src={buscaSvg} alt="icone de lupa" />
          </form>
          <div className="cta-desktop">
            <a className="btn" href="">
              Login
            </a>
          </div>
          <div className="cta-mobile">
            <a className="link" href="">
              Login
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
