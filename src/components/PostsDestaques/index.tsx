import "./styles.css";
import pontoSvg from "../../images/svg/ponto.svg";
import { PostType, UserProfileType } from "../../utils/types";
import { useEffect, useState } from "react";
import { API } from "../../services/api";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PostsDestaques(
  props: PostType & { numberKey: number }
) {
  const className = `item-${props.numberKey + 1}`;

  const [dataUser, setDataUser] = useState<UserProfileType>();

  useEffect(() => {
    if (props) {
      API.get(`/user/${props.id_user}`).then((response) => {
        setDataUser(response.data);
      });
    }
  }, [props]);
  return (
    <>
      <div
        className={`post ${className}`}
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      >
        <div className="post-opacity ">
          <div className="img-post"></div>
          <h6 className="uppercase color-primary">{props.category}</h6>
          <Link to={`/post/${props.id}`}>
            <h5 className="link-title">{props.title}</h5>
          </Link>
          {className === "item-1" && <p className=" mt-1">{props.resume}</p>}

          <div className="flex mt-1">
            {className === "item-1" && (
              <div className="img-profile img-profile-response">
                <div
                  className="img-profile-content"
                  style={{ backgroundImage: `url(${dataUser?.ImageProfile})` }}
                ></div>
              </div>
            )}

            <div
              className={`desc-profile ${
                className != "item-1"
                  ? `flex-aling-center`
                  : `flex-space-between`
              }`}
            >
              <div>
                <p className="p3 color-white">
                  by {dataUser?.name} {dataUser?.surname}
                </p>
                {className === "item-1" && <p>@{dataUser?.user}</p>}
              </div>
              {className != "item-1" && <img src={pontoSvg} alt="ponto" />}
              {className === "item-1" && (
                <p className="p4">Aug 2, 2020 - 8 min read</p>
              )}
              {className === "item-2" && (
                <p className="p4">Aug 2, 2020 - 8 min read</p>
              )}
              {className != "item-2" && className != "item-1" && (
                <p className="p5">Aug 2, 2020</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
