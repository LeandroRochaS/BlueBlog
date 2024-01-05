import "./styles.scss";
import logo from "../../images/svg/logo.svg";
import iconfacebook from "../../images/svg/icon-facebook.svg";
import iconinstagram from "../../images/svg/icon-instagram.svg";
import icontwitter from "../../images/svg/icon-twitter.svg";
import iconyoutube from "../../images/svg/icon-youtube.svg";

export default function Footer() {
  return (
    <>
      <footer className=" mt-7">
        <div className="footer-title">
          <img src={logo} alt="logo" className="mr-2" />
          <h4>
            blog <span className="pointer">.</span>
          </h4>
        </div>
        <div className="footer-mid flex-space-between mt-4">
          <div className="footer-left flex-space-between">
            <div className="footer-mid-mid">
              <h4>Posts</h4>
              <p> Mais vistos</p>
              <p> Mais comentados</p>
              <p> Mais populares</p>
              <p> Mais recentes</p>
            </div>
            <div className="footer-mid-mid ">
              <h4>Categorias</h4>
              <p> Tecnologia</p>
              <p> Fotografia</p>
              <p> Cinema</p>
              <p> Esportes</p>
            </div>
          </div>

          <div className="footer-mid-right">
            <h4>Quer ser avisado dos novos posts do blog? </h4>

            <div>
              <input
                type="text"
                className="footer-input"
                placeholder="Digite seu e-mail"
              />
              <button>Enviar</button>
            </div>
          </div>
        </div>
        <hr className="mt-5"></hr>

        <div className="footer-last flex-space-between mt-5">
          <p className="h5Gray5">
            © 2024 | Blog. Todos os direitos reservados.
          </p>
          <div className="footer-icons flex-space-between">
            <img src={iconfacebook} alt="icon-facebook" />
            <img src={iconinstagram} alt="icon-instagram" />
            <img src={icontwitter} alt="icon-twitter" />
            <img src={iconyoutube} alt="icon-youtube" />
          </div>
        </div>
      </footer>
    </>
  );
}
