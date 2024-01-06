export default function AddPost() {
  return (
    <>
      <section className="">
        <div className="p-2">
          <h3> Adicionar novo post</h3>
          <p>Preencha os campos abaixo para adicionar um novo post ao blog.</p>
        </div>

        <form action="">
          <div className="row">
            <div className="grid-3 p-0">
              <label htmlFor="date">
                <h6>Data </h6>
              </label>
              <input className="mt-1" type="date" id="date" name="date" />
            </div>
            <div className="grid-3 p-0">
              <label htmlFor="category">
                <h6>Categoria </h6>
              </label>
              <select className="mt-1 " id="category" name="category">
                <option value="tecnologia">Tecnologia</option>
                <option value="fotografia">Fotografia</option>
                <option value="cinema">Cinema</option>
                <option value="games">Games</option>
              </select>
            </div>
            <div className="grid-6 p-0">
              <label htmlFor="title">
                <h6>Título </h6>
              </label>
              <input className="mt-1" type="text" id="title" name="title" />
            </div>
          </div>
          <div className="row ">
            <div className="grid-9 p-0">
              <label htmlFor="resume">
                <h6>Resumo do post </h6>
              </label>
              <input className="mt-1" type="text" id="resume" name="resume" />
            </div>
            <div className="grid-3 p-0">
              <label htmlFor="duration">
                <h6>Duração </h6>
              </label>
              <select className="mt-1 " id="duration" name="duration">
                <option value="5">5min</option>
                <option value="7">7min</option>
                <option value="10">10min</option>
                <option value="15">15min</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="grid-12 p-0">
              <label htmlFor="description">
                <h6>Conteúdo </h6>
              </label>
              <textarea
                className="mt-1 w-100"
                rows={10}
                id="description"
                name="description"
              />
            </div>
          </div>
          <div className="row flex-end-row">
            <button className="btn b-0 btn-login mt-3 mr-2">Adicionar</button>
          </div>
        </form>
      </section>
    </>
  );
}
