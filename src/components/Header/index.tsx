import "./styles.scss";
import logoblog from "../../images/svg/logo.svg";

export default function Header() {
  const descLogo = "Essa é a logo do blog";

  return (
    <>
      <header className="flex-space-between">
        <div className="logo">
          <img src={logoblog} alt={descLogo} />
        </div>
        <div className="search">
          <input
            type="text"
            className="input-search"
            placeholder="Pesquisar"
            name="search"
          />
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
      </header>
    </>
  );
}
