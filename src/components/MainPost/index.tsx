import { useEffect, useState } from "react";
import { API } from "../../services/api";
import { PostType, UserProfileType } from "../../utils/types";
import { Link } from "react-router-dom";

export default function MainPost(item: PostType) {
  const [dataUser, setDataUser] = useState<UserProfileType>();

  useEffect(() => {
    if (item && item.id_user) {
      API.get(`/user/${item.id_user}`).then((response) => {
        setDataUser(response.data);
      });
    }
  }, [item]);

  return (
    <>
      <div className="py-2 bb-black">
        <h6 className="color-gray">{item.date}</h6>
        <h6 className="uppercase color-primary">{item.category}</h6>

        <Link to={`/post/${item.id}`} className="link-title">
          <h5>{item.title}</h5>
        </Link>
        <p>{item.resume}</p>
        <div className="flex-aling-center mt-2">
          <div className="profile mr-2">
            <img
              src={dataUser?.ImageProfile}
              className="profile-img"
              alt="foto de perfil user"
            />
          </div>
          <div className="flex-aling-center w-100">
            <div>
              <p className="color-destaque">
                by {dataUser?.name} {dataUser?.surname}
              </p>
            </div>
            <span className="mx-2">.</span>
            <div>
              <p className="color-destaque p3"> {item.duration} min read</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
