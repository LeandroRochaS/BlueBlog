import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAuthContext } from "../../context/AuthContext";
import iconfacebook from "../../images/svg/icon-facebook.svg";
import iconinstagram from "../../images/svg/icon-instagram.svg";
import icontwitter from "../../images/svg/icon-twitter.svg";
import iconyoutube from "../../images/svg/icon-youtube.svg";
import { useEffect } from "react";

export default function Contact() {
  const { isLoggedUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedUser) {
      navigate("/login");
    }
  }, [isLoggedUser, navigate]);
  return (
    <>
      <div className="">
        <Header />
        <div className="container">
          <div className="row">
            <div className="grid-6">
              <h4>Entre em contato</h4>
              <p>
                {" "}
                Aqui você vai conseguir mais informações sobre o projeto Blog
                utilizado
              </p>
              <form
                action="mailto::lerocha644@gmai.com"
                method="POST"
                encType="text/plain"
              >
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Nome"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows={8}
                    placeholder="Mensagem"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-login w-50 mt-2">
                  Enviar
                </button>
              </form>
            </div>
            <div className="grid-1"></div>
            <div className="grid-5">
              <h5>Algumas informações</h5>
              <div className="my-4">
                <h6 className="color-primary">Info.</h6>
                <p>Projeto de um Blog feito em React</p>
              </div>

              <div className="mb-4">
                <h6 className="color-primary ">Adress.</h6>
                <p>Aracaju, SE</p>
              </div>
              <div className="mb-4">
                <h6 className="color-primary ">E-mail</h6>
                <p>lerocha644@gmai.com</p>
              </div>
              <div className="">
                <h6 className="color-primary mb-2">Redes sociais</h6>
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
        </div>
      </div>

      <Footer />
    </>
  );
}
