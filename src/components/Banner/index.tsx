import "./styles.scss";
import img1 from "../../images/png/02.png";

export default function Banner() {
  return (
    <>
      <section className="">
        <div className="img-banner hidden flex-center">
          <img src={img1} alt="imagem de banner" />
        </div>
        <div className="row mt-3">
          <div className="mt-2 p-2">
            <h6 className="color-gray text-center">01 JAN 2024</h6>
            <h6 className="uppercase color-primary text-center">tecnologia</h6>

            <h4 className="text-center">O que esperar do cinema em 2024?</h4>
            <p className="mt-1  text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque.
            </p>
            <div className="mt-4">
              <a href="" className="link color-primary flex-center">
                Ler mais
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
