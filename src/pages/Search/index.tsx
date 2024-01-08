import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { API } from "../../services/api";
import { PostType } from "../../utils/types";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

export default function Search() {
  const { word_search } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [word, setWord] = useState(word_search);
  const [search, setSearch] = useState<PostType[]>([]);
  const [form, setForm] = useState({ search: "" });

  useEffect(() => {
    console.log(word);
    if (word) {
      console.log(word);
      API.get(`/posts?q=${word}`).then((response) => {
        setSearch(response.data);
      });
    }
  }, [word]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onChange(e: any) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSearch(e: any) {
    e.preventDefault();

    setWord(form.search);
  }
  return (
    <>
      <Header />
      <section className="container">
        <div className="bg-section">
          <h6 className="uppercase color-primary text-center">resultados</h6>

          <h4 className="text-center">"{word}"</h4>

          <form onSubmit={handleSearch}>
            <div className="row ">
              <div className="grid-3 disappear"></div>
              <div className="grid-6 flex-center">
                <input
                  type="text"
                  name="search"
                  placeholder="Buscar"
                  className="search"
                  onChange={onChange}
                />
                <button className="btn ml-2"> Buscar</button>
              </div>
              <div className="grid-3 disappear"></div>
            </div>
          </form>

          <h3>Pesquisa</h3>

          <div className="row">
            {search.map((post) => (
              <Card key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
