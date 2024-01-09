import blogLogo from "../../images/svg/blog.svg";
import arrowUp from "../../images/svg/arrowUp.svg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section className="hero mt-7 container">
        <div className="row">
          <div className="grid-6 ">
            <h1 className="h0">
              Blue<span>.</span>
            </h1>
            <p className="mt-1">
              Um blog para todos. Escrever. Ler. Comentar. Contribuir. Aprender.
              Conectar.
            </p>
            <Link
              to={"/profile"}
              className="mr-4 mt-2 btn w-50 flex-aling "
              style={{ minHeight: "48px" }}
            >
              <p className="color-white mr-1">Começar a escrever</p>
              <img src={arrowUp} className="icon-small" />{" "}
            </Link>
          </div>
          <div className="grid-6 ">
            <img src={blogLogo} alt=" Logo do blog" />
          </div>
        </div>
      </section>
    </>
  );
}
