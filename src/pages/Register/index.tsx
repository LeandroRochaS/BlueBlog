/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Header from "../../components/Header";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";
import logoBlog2 from "../../images/svg/blog-logo2.svg";
import { validarFormularioRegister } from "../../utils/Verifications";
import { ToastContainer, toast } from "react-toastify";

type UserProfileFormType = {
  user: string;
  name: string;
  surname: string;
  token: string;
  description: string;
  ImageProfile: string;
  password: string;
};

export default function Register() {
  const [registrationForm, setRegistrationForm] = useState<
    UserProfileFormType | any
  >();
  const navigate = useNavigate();

  function handleOnChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { value, name } = e.target;
    setRegistrationForm({ ...registrationForm, [name]: value });
    console.log(registrationForm);
  }

  let trueUser = false;

  async function handleRegistration(e: any) {
    e.preventDefault();
    const validado = validarFormularioRegister();

    try {
      const response = await API.get(`/user?user=${registrationForm.user}`);
      if (response.data.length > 0) {
        toast.error("Usuário já cadastrado");
      } else {
        console.log("Usuário não cadastrado");
        trueUser = true;
      }

      console.log(trueUser);
      console.log(validado);

      if (trueUser) {
        if (validado) {
          console.log("Formulário validado");
          await API.post("/user", registrationForm);
          navigate("/login");
        } else {
          console.log("Formulário não validado");
        }
      }
    } catch (error) {
      console.error("Erro ao obter informações do usuário:", error);
    }
  }

  return (
    <>
      <Header />
      <section className="container">
        <div className="flex-center">
          <img src={logoBlog2} alt="" className="icon-xl" />
        </div>
        <h5 className="text-center">Não tem conta? Registre-se.</h5>
        <form onSubmit={(e) => handleRegistration(e)}>
          {/* Campos de registro */}
          <div className="row mt-2">
            <div className="grid-4 p-0">
              <label className="">
                <h6>Username</h6>
              </label>
              <input
                type="text"
                name="user"
                placeholder="Digite seu usuário"
                id="user"
                className="mt-1 inputform "
                autoComplete="off"
                onChange={handleOnChange}
              />
            </div>
            <div className="grid-4 p-0">
              <label className="">
                <h6>Senha</h6>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Digite sua senha"
                className=" mt-1 inputform "
                id="password"
                autoComplete="off"
                onChange={handleOnChange}
              />
            </div>
            <div className="grid-4 p-0">
              <label className="">
                <h6>Nome</h6>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome "
                className=" mt-1 inputform "
                autoComplete="off"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="grid-4 p-0">
              <label className="">
                <h6>Sobrenome</h6>
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Digite seu sobrenome"
                className=" mt-1 inputform "
                autoComplete="off"
                onChange={handleOnChange}
              />
            </div>
            <div className="grid-4 p-0">
              <label className="">
                <h6>Token</h6>
              </label>
              <input
                type="text"
                name="token"
                id="token"
                placeholder="Digite seu token"
                className=" mt-1 inputform "
                autoComplete="off"
                onChange={handleOnChange}
              />
            </div>
            <div className="grid-4 p-0">
              <label className="">
                <h6>Imagem</h6>
              </label>
              <input
                type="text"
                name="ImageProfile"
                id="image"
                placeholder="Digite ulr da imagem"
                className=" mt-1 inputform "
                autoComplete="off"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="grid-6 p-0">
              <label className="">
                <h6>Descrição</h6>
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Digite sua descrição"
                className=" mt-1 inputform "
                onChange={handleOnChange}
                rows={5}
              />
            </div>
          </div>

          <div className="row flex-center">
            <button type="submit" className="btn b-0 btn-login mt-1 mr-2 w-25">
              Registrar
            </button>
          </div>
          <div></div>
        </form>
      </section>
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
