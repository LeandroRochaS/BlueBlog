import { Link } from "react-router-dom";
import "./styles.scss";
import { PostType } from "../../utils/types";

export default function Banner(item: PostType) {
  return (
    <>
      <section className="mt-5 container">
        <div className="img-banner hidden flex-center">
          <img src={item.imageUrl} alt="imagem de banner" />
        </div>
        <div className="row mt-3">
          <div className="mt-2 p-2">
            <h6 className="color-gray text-center">{item.date}</h6>
            <h6 className="uppercase color-primary text-center">
              {item.category}
            </h6>
            <Link to={`/post/${item.id}`}>
              <h4 className="text-center link-title">{item.title}</h4>
            </Link>
            <p className="mt-1  text-center">{item.resume}</p>
            <div className="mt-4">
              <Link
                to={`/post/${item.id}`}
                className="link color-primary flex-center"
              >
                Ler mais
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
