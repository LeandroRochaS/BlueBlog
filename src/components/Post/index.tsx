import profile1 from "../../images/profile/ny.jpg";
import imageBanner from "../../images/png/05.png";

export default function Post() {
  return (
    <>
      <section>
        <div className="mb-5">
          <h6 className="color-primary uppercase text-center">games</h6>
          <h3 className="text-center">O que tem de novo no PS5??</h3>
          <div className="row">
            <div className="grid-3"></div>
            <div className="grid-6">
              <div className="flex-center ">
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
            <div className="grid-3"></div>
          </div>
          <div className="">
            <img
              src={imageBanner}
              alt="img-post"
              className="img-post
            "
            />
          </div>
          <div className="mt-2">
            <h4>Esse aqui é o primeiro título</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit odio sapiente ipsa! Dolorum reprehenderit odit
              expedita dolore nobis ex architecto placeat corrupti, praesentium
              mollitia, quibusdam laborum distinctio. Reiciendis, odio
              necessitatibus!
            </p>
          </div>
          <div className="b-black-2 card-post p-2 mt-4">
            <div className="flex-column ">
              <div className="grid-12 p-0 m-0">
                <div className="flex-space-between">
                  <div className="profile-medium-x mr-1">
                    <img
                      src={profile1}
                      className="profile-medium-x"
                      alt="foto de perfil user"
                    />
                  </div>
                  <div className="flex-space-between w-100">
                    <div className="w-100">
                      <h5 className="color-destaque">Násser Yousef</h5>
                      <p className="color-grayy">@nasser</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <p className="mb-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cumque, doloremque. Architecto nostrum enim, at inventore itaque
                odio quia maiores sequi quaerat. Repellendus hic quaerat facere
                necessitatibus laudantium iste quis deleniti.
              </p>
              <a href="#" className="color-primary">
                Ver perfil
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
