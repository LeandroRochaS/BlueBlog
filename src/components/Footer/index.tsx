import "./styles.scss";
import logo from "../../images/svg/logo.svg";
import iconfacebook from "../../images/svg/icon-facebook.svg";
import iconinstagram from "../../images/svg/icon-instagram.svg";
import icontwitter from "../../images/svg/icon-twitter.svg";
import iconyoutube from "../../images/svg/icon-youtube.svg";

export default function Footer() {
  return (
    <>
      <footer className="mt-12 ">
        <div className="container">
          <div className="footer-title mb-5">
            <img src={logo} alt="logo" className="mr-2 icon" />
            <h4>
              blue <span className="pointer">.</span>
            </h4>
          </div>
          <div className="row">
            <div className="grid-3">
              <h4 className="mb-2">Posts</h4>

              <div className="flex-column-start " style={{ gap: "20px" }}>
                <p> Mais vistos</p>
                <p> Mais comentados</p>
                <p> Mais populares</p>
                <p> Mas recentes</p>
              </div>
            </div>

            <div className="grid-3">
              <h4 className="mb-2">Categorias</h4>

              <div className="flex-column-start" style={{ gap: "20px" }}>
                <p> Tecnologia</p>
                <p> Fotografia</p>
                <p> Cinema</p>
                <p> Esportes</p>
              </div>
            </div>
            <div className="grid-6 flex-column-start">
              <h4>Quer ser avisado dos novos posts do blog </h4>

              <div className="flex mt-2 w-100">
                <input
                  type="text"
                  className="w-100"
                  placeholder="Digite seu e-mail"
                />
                <button className="btn b-0 ml-1 w-50">Inscrever-se</button>
              </div>
            </div>
          </div>

          <hr className="mt-5"></hr>
          <div className="row w-100">
            <div className="grid-9">
              <p className="h5Gray5">
                © 2024 | Blog. Todos os direitos reservados.
              </p>
            </div>
            <div className=" grid-3">
              <img
                src={iconfacebook}
                style={{ cursor: "pointer" }}
                className="icon-s"
                alt="icon-facebook"
              />
              <img
                src={iconinstagram}
                style={{ cursor: "pointer" }}
                className="icon-s ml-2"
                alt="icon-instagram"
              />
              <img
                src={icontwitter}
                style={{ cursor: "pointer" }}
                className="icon-s ml-2"
                alt="icon-twitter"
              />
              <img
                src={iconyoutube}
                style={{ cursor: "pointer" }}
                className="icon-s ml-2"
                alt="icon-youtube"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
