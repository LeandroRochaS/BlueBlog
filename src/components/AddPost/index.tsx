import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../services/api";

type FormElements = {
  id_user?: number;
  date?: string;
  category?: string;
  title?: string;
  resume?: string;
  image?: string;
  duration?: string;
  description?: string;
  star?: number;
  viws?: number;
  status?: boolean;
};

const meses = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export default function AddPost() {
  const { userDataAuthContext } = useAuthContext();
  const [form, setForm] = useState<FormElements | null>();

  useEffect(() => {});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleOnChange(e: any) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(form);

    const dateString = form?.date;

    handleValidatorForm();

    const date = new Date(dateString!);
    const month = date.getMonth();

    const dataFormatada = `${date.getDate() + 1} ${
      meses[month]
    } ${date.getFullYear()}`;
    console.log(dataFormatada.toUpperCase());

    const data = {
      ...form,
      date: dataFormatada.toUpperCase(),
      star: Math.floor(Math.random() * 5) + 1,
      views: 0,
      status: true,
      id_user: userDataAuthContext?.id,
    };

    if (handleValidatorForm()) console.log(data);

    console.log("error");
  }

  function handleValidatorForm() {
    const inputNames = [
      "date",
      "category",
      "title",
      "resume",
      "image",
      "duration",
      "description",
    ];
    let formIsValid = true;

    inputNames.forEach((name) => {
      const nameElement = name as keyof FormElements;
      const input = document.querySelector(`[name="${name}"]`);
      const value = form?.[nameElement];

      if (value === undefined || value === "") {
        input?.classList.add("error");
        formIsValid = false;
      } else {
        input?.classList.remove("error");
      }
    });

    setInterval(() => {
      inputNames.forEach((name) => {
        const input = document.querySelector(`[name="${name}"]`);
        input?.classList.remove("error");
      });
    }, 4000);

    return formIsValid;
  }

  return (
    <>
      <section className="">
        <div className="p-2">
          <h3> Adicionar novo post</h3>
          <p>Preencha os campos abaixo para adicionar um novo post ao blog.</p>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="grid-3 p-0">
              <label htmlFor="date">
                <h6>Data </h6>
              </label>
              <input
                className="mt-1 inputform"
                type="date"
                id="date"
                name="date"
                onChange={handleOnChange}
              />
            </div>
            <div className="grid-3 p-0">
              <label htmlFor="category">
                <h6>Categoria </h6>
              </label>
              <select
                className="mt-1 inputform"
                id="category"
                name="category"
                onChange={handleOnChange}
              >
                <option value="">Options</option>
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
              <input
                className="mt-1 inputform"
                type="text"
                id="title"
                name="title"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="row ">
            <div className="grid-8 p-0">
              <label htmlFor="resume">
                <h6>Resumo do post </h6>
              </label>
              <input
                className="mt-1 inputform"
                type="text"
                id="resume"
                name="resume"
                onChange={handleOnChange}
              />
            </div>
            <div className="grid-2 p-0">
              <label htmlFor="image">
                <h6>Imagem </h6>
              </label>
              <input
                className="mt-1 inputform"
                type="text"
                id="image"
                name="image"
                onChange={handleOnChange}
              />
            </div>
            <div className="grid-2 p-0">
              <label htmlFor="duration">
                <h6>Duração </h6>
              </label>
              <select
                className="mt-1 inputform"
                id="duration"
                name="duration"
                onChange={handleOnChange}
              >
                <option value="">Options</option>
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
                className="mt-1 w-100 inputform"
                rows={10}
                id="description"
                name="description"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="row flex-end-row">
            <button type="submit" className="btn b-0 btn-login mt-3 mr-2">
              Adicionar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
