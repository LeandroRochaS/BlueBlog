import AddPost from "../../components/AddPost";
import Header from "../../components/Header";
import Post from "../../components/Post";
import Profile from "../../components/Profile";
import logoBlog2 from "../../images/svg/blog-logo2.svg";

export default function Login() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="row mt-9">
          <div className="grid-4 "></div>
          <div className="grid-4 ">
            <div className="flex-center">
              <img src={logoBlog2} alt="" className="icon-xl" />
            </div>
            <h5 className="text-center">Olá, faça o login para continuar.</h5>
            <form className="mt-4 form-login flex-column-center">
              <input
                type="text"
                name="user"
                placeholder="Digite seu usuário"
                id=""
                className="search"
              />
              <input
                type="password"
                name="password"
                placeholder="Digite sua senha"
                className="search mt-2"
                id=""
              />
              <button className="btn b-0 btn-login w-100 mt-3">Entrar</button>
              <div className="flex-space-between w-100 mt-3">
                <div className="flex checkbox">
                  <input
                    className="mr-1"
                    type="checkbox"
                    name="lembrar"
                    id=""
                  />
                  <p className="color-white">Lembrar-me</p>
                </div>
                <a href="/" className="link">
                  Esqueceu a senha ?
                </a>
              </div>
            </form>
          </div>
          <div className="grid-4 "></div>
        </div>
        <Profile />
        <AddPost />
        <Post />
      </div>
    </>
  );
}
