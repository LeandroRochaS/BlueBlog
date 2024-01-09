import { useAuthContext } from "../../../context/AuthContext";

export default function PersonalData() {
  const { userDataAuthContext } = useAuthContext();
  const userData = userDataAuthContext;

  return (
    <>
      <section className="">
        <div className="p-2">
          <h3> Meus dados</h3>
          <p>Abaixo são listados os seus dados de acesso ao blog.</p>
        </div>

        <div className="row">
          <div className="grid-3">
            <label htmlFor="id">
              <h6>ID </h6>
            </label>
            <input
              disabled
              value={userData?.id}
              className="mt-1 color-gray"
              type="text"
              id="id"
              name="id"
            />
          </div>
          <div className="grid-3 ">
            <label htmlFor="user">
              <h6>Seu usuário </h6>
            </label>
            <input
              disabled
              className="mt-1 color-gray"
              type="text"
              id="user"
              name="user"
              value={userData?.user}
            />
          </div>
          <div className="grid-3 ">
            <label htmlFor="name">
              <h6>Nome </h6>
            </label>
            <input
              disabled
              className="mt-1 color-gray"
              type="text"
              id="name"
              name="name"
              value={userData?.name}
            />
          </div>
          <div className="grid-3 ">
            <label htmlFor="surname">
              <h6>Sobrenome </h6>
            </label>
            <input
              disabled
              className="mt-1 color-gray"
              type="text"
              id="surname"
              name="surname"
              value={userData?.surname}
            />
          </div>
        </div>
      </section>
    </>
  );
}
