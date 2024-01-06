import thumb1 from "../../images/png/01.png";

export default function MoreViews() {
  return (
    <>
      <section className="">
        <h3>Mais vistos</h3>

        <div className="row mt-4">
          <div className="grid-4 card b-black p-0">
            <div className="thumb hidden">
              <a href="">
                <img src={thumb1} alt="" />
              </a>
            </div>
            <div className="mt-2 p-2">
              <h6 className="color-gray">01 JAN 2024</h6>
              <h6 className="uppercase color-primary">tecnologia</h6>

              <h4>O que esperar do cinema em 2024?</h4>
              <p className="mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
              <div className="mt-4">
                <a href="" className="link color-primary ">
                  Ler mais
                </a>
              </div>
            </div>
          </div>
          <div className="grid-4 card b-black p-0">
            <div className="thumb hidden">
              <a href="">
                <img src={thumb1} alt="" />
              </a>
            </div>
            <div className="mt-2 p-2">
              <h6 className="color-gray">01 JAN 2024</h6>
              <h6 className="uppercase color-primary">tecnologia</h6>

              <h4>O que esperar do cinema em 2024?</h4>
              <p className="mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
              <div className="mt-4">
                <a href="" className="link color-primary ">
                  Ler mais
                </a>
              </div>
            </div>
          </div>
          <div className="grid-4 card b-black p-0">
            <div className="thumb hidden">
              <a href="">
                <img src={thumb1} alt="" />
              </a>
            </div>
            <div className="mt-2 p-2">
              <h6 className="color-gray">01 JAN 2024</h6>
              <h6 className="uppercase color-primary">tecnologia</h6>

              <h4>O que esperar do cinema em 2024?</h4>
              <p className="mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
              <div className="mt-4">
                <a href="" className="link color-primary ">
                  Ler mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
