import "./styles.scss";
import logo from "../../images/svg/logo.svg";
import iconfacebook from "../../images/svg/icon-facebook.svg";
import iconinstagram from "../../images/svg/icon-instagram.svg";
import icontwitter from "../../images/svg/icon-twitter.svg";
import iconyoutube from "../../images/svg/icon-youtube.svg";

export default function Footer() {
  return (
    <>
      <footer className="mt-8">
        <div className="footer-title mb-5">
          <img src={logo} alt="logo" className="mr-2" />
          <h4>
            blog <span className="pointer">.</span>
          </h4>
        </div>
        <div className="row">
          <div className="grid-3 mt-4">
            <div className="flex-column-start " style={{ gap: "20px" }}>
              <h4>Posts</h4>
              <p> Mais vistos</p>
              <p> Mais comentados</p>
              <p> Mais populares</p>
              <p> Mas recentes</p>
            </div>
          </div>

          <div className="grid-2">
            <div className="flex-column-start" style={{ gap: "20px" }}>
              <h4>Categorias</h4>
              <p> Tecnologia</p>
              <p> Fotografia</p>
              <p> Cinema</p>
              <p> Esportes</p>
            </div>
          </div>
          <div className="grid-1"></div>
          <div className="grid-6 px-5 flex-column-start">
            <div className="row">
              <h4>Quer ser avisado dos novos posts do blog </h4>

              <div className="flex mt-2">
                <input
                  type="text"
                  className="w-100"
                  placeholder="Digite seu e-mail"
                />
                <button className="btn b-0 ml-1 w-50">Inscrever-se</button>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-5"></hr>

        <div className="footer-last flex-space-between mt-5 mb-5">
          <p className="h5Gray5">
            © 2024 | Blog. Todos os direitos reservados.
          </p>
          <div className="footer-icons flex-space-between">
            <img src={iconfacebook} className="icon-s" alt="icon-facebook" />
            <img src={iconinstagram} className="icon-s" alt="icon-instagram" />
            <img src={icontwitter} className="icon-s" alt="icon-twitter" />
            <img src={iconyoutube} className="icon-s" alt="icon-youtube" />
          </div>
        </div>
      </footer>
    </>
  );
}
