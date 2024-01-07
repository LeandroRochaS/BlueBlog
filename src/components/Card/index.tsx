import { Link } from "react-router-dom";
import { PostType } from "../../utils/types";

export default function Card(item: PostType) {
  return (
    <>
      <div className="grid-4 card b-black p-0">
        <div className="thumb hidden">
          <a href="">
            <img src={item.imageUrl} alt="" />
          </a>
        </div>
        <div className=" p-2">
          <h6 className="color-gray">{item.date}</h6>
          <h6 className="uppercase color-primary">{item.category}</h6>
          <Link to={`/post/${item.id}`} className="link color-primary p-0">
            <h4 className="mt-1 link-title">{item.title}</h4>
          </Link>
          <p className="my-2">{item.resume}</p>
          <div className="">
            <Link to={`/post/${item.id}`} className="link color-primary p-0">
              Ler mais
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
