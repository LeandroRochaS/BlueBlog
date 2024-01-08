import { Link } from "react-router-dom";
import Header from "../../components/Header";
import logo from "../../images/svg/logo.svg";

export default function NotFound() {
  return (
    <>
      <Header />

      <section className="container flex-center">
        <div className="row">
          <div className="grid-2"></div>
          <div className="grid-8 footer-title">
            <img src={logo} alt="logo" className="icon mr-2" />
            <h4>
              blog <span className="pointer">.</span>
            </h4>
            <h1 className="color-destaque mt-3 mr-2 h0">404</h1>
            <h5>Página não encontrada</h5>
            <p className="text-center">
              A página que você tá procurando não existe ou foi removida. Clique
              para voltar para o site.
            </p>
            <Link to={"/"} className="w-100">
              <button className="btn mt-2 w-100">Voltar para Home</button>
            </Link>
          </div>
          <div className="grid-2"></div>
        </div>
      </section>
    </>
  );
}
