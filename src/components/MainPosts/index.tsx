import profile1 from "../../images/profile/alex.png";

export default function MainPosts() {
  return (
    <>
      <div className="row">
        <div className="grid-6">
          <div className="mb-8"></div>

          <h3 className="mt-1 ">As principais novidades da moda em 2024?</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nulla dolor eius fuga esse explicabo dolore, veritatis voluptates
            dolorem corporis? Cumque numquam iure blanditiis, repellat
            voluptatibus suscipit adipisci veritatis aperiam.
          </p>
          <div className="flex-start-row my-5">
            <div className="profile mr-2">
              <img
                src={profile1}
                className="profile-img"
                alt="foto de perfil user"
              />
            </div>
            <div className="flex-space-between w-100">
              <div>
                <p className="color-destaque">by Násser Yousef</p>
                <p className="color-grayy">@nasser</p>
              </div>
              <div>
                <p className="p3">Aug 2, 2020 - 8 min read</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-6">
          <div className="py-2 bb-black">
            <h6 className="color-gray">01 JAN 2024</h6>
            <h6 className="uppercase color-primary">tecnologia</h6>

            <h5>Quais os grandes lançamentos para 2022 nos games?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque.
            </p>
            <div className="flex-aling-center mt-2">
              <div className="profile mr-2">
                <img
                  src={profile1}
                  className="profile-img"
                  alt="foto de perfil user"
                />
              </div>
              <div className="flex-aling-center w-100">
                <div>
                  <p className="color-destaque">by Násser Yousef</p>
                </div>
                <span className="mx-2">.</span>
                <div>
                  <p className="color-destaque p3">Aug 2, 2020 - 8 min read</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 bb-black">
            <h6 className="color-gray">01 JAN 2024</h6>
            <h6 className="uppercase color-primary">tecnologia</h6>

            <h5>O que esperar do cinema em 2024?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque.{" "}
            </p>
            <div className="flex-start-row mt-2">
              <div className="profile mr-2">
                <img
                  src={profile1}
                  className="profile-img"
                  alt="foto de perfil user"
                />
              </div>
              <div className="flex-aling-center w-100">
                <div>
                  <p className="color-destaque">by Násser Yousef</p>
                </div>
                <span className="mx-2">.</span>
                <div>
                  <p className="color-destaque p3">Aug 2, 2020 - 8 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
