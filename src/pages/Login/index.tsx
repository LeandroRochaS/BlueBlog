/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Header from "../../components/Header";
import logoBlog2 from "../../images/svg/blog-logo2.svg";
import { UserLoginType, UserProfileType } from "../../utils/types";
import { API } from "../../services/api";
import { useAuthContext } from "../../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState<UserLoginType | any>();
  const [user, setUser] = useState<UserLoginType | any>();
  const { loginAuthContext } = useAuthContext();

  async function handleLogin(e: any) {
    e.preventDefault();

    try {
      const res = await API.get(`/user?user=${form.user}`);
      if (res.data && res.data.length > 0) {
        setUser(res.data[0]);
        handleLoginContext(res.data[0]);
      } else {
        console.log("Usuário não encontrado");
      }
    } catch (error) {
      console.error("Erro ao buscar usuário", error);
    }
  }

  function handleLoginContext(res: UserProfileType) {
    console.log(user);
    if (res.user === form.user && res.password === form.password) {
      console.log("logado");
      loginAuthContext(res);
    } else {
      console.log("Usuário ou senha incorretos");
    }
  }

  function onChange(e: any) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  }

  return (
    <>
      <Header />
      <div className="row">
        <div className="grid-4 "></div>
        <div className="grid-4 ">
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
              id=""
              className="search"
              onChange={onChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              className="search mt-2"
              id=""
              onChange={onChange}
            />
            <button type="submit" className="btn b-0 btn-login w-100 mt-3">
              Entrar
            </button>
            <div className="flex-space-between w-100 mt-3">
              <div className="flex checkbox">
                <input className="mr-1" type="checkbox" name="lembrar" id="" />
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
    </>
  );
}
