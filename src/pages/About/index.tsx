import Footer from "../../components/Footer";
import Header from "../../components/Header";
import blog from "../../images/svg/blog.svg";

export default function About() {
  return (
    <>
      <Header />

      <section className="container flex-center">
        <div className="row">
          <div className="grid-4">
            <h1 className="h0">
              blog<span>.</span>{" "}
            </h1>
            <p className="mt-1">
              Trata-se de uma aplicação feita em React para aprendizagem da
              biblioteca.
            </p>
            <a
              href="https://www.leandrorocha.online/"
              target="_blank"
              className="btn mt-2"
              rel="leandrorochas"
            >
              Quero ver mais
            </a>
          </div>
          <div className="grid-1"></div>

          <div className="grid-6 flex-center">
            <img src={blog} alt="" />
          </div>

          <div className="grid-1"></div>
        </div>
      </section>

      <Footer />
    </>
  );
}
