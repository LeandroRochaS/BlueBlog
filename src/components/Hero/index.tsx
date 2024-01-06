import blogLogo from "../../images/svg/blog.svg";

export default function Hero() {
  return (
    <>
      <section className="hero mt-7">
        <div className="row">
          <div className="grid-6 ">
            <h1 className="h0">
              Blog<span>.</span>
            </h1>
            <p className="mt-1">
              Um blog para todos. Escrever. Ler. Comentar. Contribuir. Aprender.
              Conectar.
            </p>
            <a href="" className="btn mt-4">
              {" "}
              Começar a escrever
            </a>
          </div>
          <div className="grid-6 ">
            <img src={blogLogo} alt=" Logo do blog" />
          </div>
        </div>
      </section>
    </>
  );
}
