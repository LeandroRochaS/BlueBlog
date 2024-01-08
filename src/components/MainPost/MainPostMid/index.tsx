import { Link } from "react-router-dom";
import { PostType, UserProfileType } from "../../../utils/types";
import { useEffect, useState } from "react";
import { API } from "../../../services/api";

export default function MainPostMid(item: PostType) {
  const [user, setUser] = useState<UserProfileType>();

  useEffect(() => {
    API.get(`/user/${item.id_user}`).then((response) => {
      setUser(response.data);
    });
  }, [item]);

  return (
    <>
      <div className="grid-6 p-0 mid-card">
        <Link to={`/post/${item.id}`} className="link-title">
          <h3 className="mt-1 ">{item.title}</h3>
        </Link>
        <p className="mt-2">{item.resume}</p>

        <div className="flex-start-row my-4">
          <div className="profile mr-2">
            <img
              src={user?.ImageProfile}
              className="profile-img"
              alt="foto de perfil user"
            />
          </div>
          <div className="flex-space-between w-100">
            <div>
              <p className="color-destaque">
                by {user?.name} {user?.surname}
              </p>
              <p className="color-grayy">@{user?.user}</p>
            </div>
            <div>
              <p className="p3">
                {item.date} - {item.duration} min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
