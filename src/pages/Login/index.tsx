/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Header from "../../components/Header";
import logoBlog2 from "../../images/svg/blog-logo2.svg";
import { UserLoginType, UserProfileType } from "../../utils/types";
import { API } from "../../services/api";
import { useAuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import CarouselComponent from "../Carousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [form, setForm] = useState<UserLoginType | any>();
  const { loginAuthContext } = useAuthContext();
  const navigate = useNavigate();

  async function handleLogin(e: any) {
    e.preventDefault();

    const res = await API.get(`/user?user=${form.user}`);
    if (res.data && res.data.length > 0) {
      handleLoginContext(res.data[0]);
    } else {
      toast.error("Usuário não encontrado!");
    }
  }

  function handleLoginContext(res: UserProfileType) {
    if (res.user === form.user && res.password === form.password) {
      loginAuthContext(res);

      navigate("/");
    } else {
      toast.error("Usuário ou senha incorretos!");
    }
  }

  function onChange(e: any) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <>
      <Header />
      <div className="row">
        <div className="grid-6 ">
          <div className="flex-center">
            <img src={logoBlog2} alt="" className="icon-xl" />
          </div>
          <h5 className="text-center">Olá, faça o login para continuar.</h5>
          <form
            onSubmit={(e) => handleLogin(e)}
            className="mt-4 form-login flex-column-center"
          >
            <input
              type="text"
              name="user"
              placeholder="Digite seu usuário"
              id="user"
              className="search"
              autoComplete="off"
              onChange={onChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              className="search mt-2"
              id="password"
              autoComplete="off"
              onChange={onChange}
            />
            <div className="flex-space-between w-100 mt-3">
              <div className="flex checkbox">
                <input className="mr-1" type="checkbox" name="lembrar" id="" />
                <p className="color-white">Lembrar-me</p>
              </div>
              <a href="/" className="link">
                Esqueceu a senha ?
              </a>
            </div>
            <button type="submit" className="btn b-0 btn-login w-100 mt-3">
              Entrar
            </button>
            <p className="color-white mt-2">
              Não tem conta ?{" "}
              <Link to={"/register"}>
                <span
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  clique aqui para registrar{" "}
                </span>
              </Link>
            </p>
          </form>
        </div>
        <div className="grid-6">
          <CarouselComponent />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
