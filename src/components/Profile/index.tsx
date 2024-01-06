import pontoAzulSvg from "../../images/svg/pontoAzul.svg";

export default function Profile() {
  return (
    <section>
      <div className="row">
        <div className="grid-6 ">
          <div className="flex-start-row mb-5">
            <div className="profile-medium mr-3">
              <img src={pontoAzulSvg} className="" alt="" />
            </div>

            <div>
              <h4 className="mt-2">Leandro Rocha Santos</h4>
              <h6 className="color-gray">@leandrorochas</h6>
            </div>
          </div>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam text
            text text text
          </p>
        </div>
        <div className="grid-6 flex-center">
          <a href="#" className="btn ">
            Meus Dados
          </a>
          <a href="#" className="btn ml-3">
            Adicionar post
          </a>
        </div>
      </div>
    </section>
  );
}
