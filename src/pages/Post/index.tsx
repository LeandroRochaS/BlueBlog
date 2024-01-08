import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../../services/api";
import Header from "../../components/Header";
import { PostType, UserProfileType } from "../../utils/types";
import GoToTop from "../../utils/GoTop";
import { useAuthContext } from "../../context/AuthContext";

export default function Post() {
  const { id } = useParams();
  const { isLoggedUser } = useAuthContext();

  const [post, setPost] = useState<PostType>(); // Alteração aqui
  const [user, setUser] = useState<UserProfileType>(); // Alteração aqui
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedUser) {
      navigate("/login");
    }

    API.get(`/posts/${id}`)
      .then((response) => {
        setPost(response.data);

        if (response.data) {
          API.get(`/user/${response.data.id_user}`).then((userResponse) => {
            setUser(userResponse.data);
          });
        }
      })
      .catch(() => {
        navigate("/404");
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Header />
      <section className="container">
        {post && (
          <div className="mb-5">
            <h6 className="color-primary uppercase text-center">
              {post && post.category}
            </h6>
            <h3 className="text-center">{post && post.title}</h3>
            <div className="row">
              <div className="grid-3"></div>
              <div className="grid-6">
                <div className="flex-center my-5">
                  <div className="profile mr-2">
                    <img
                      src={post && user?.ImageProfile}
                      className="profile"
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
                        {post?.date} - {post?.duration} min read
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-3"></div>
            </div>
            <div className="">
              <img
                src={post?.imageUrl}
                alt="img-post"
                className="img-post
            "
              />
            </div>
            <div className="my-8">
              <h4>{post?.title}</h4>
              <p>{post?.content}</p>
            </div>
            <div className="b-black-2 card-post p-2 mt-4">
              <div className="flex-column ">
                <div className="grid-12 p-0 m-0">
                  <div className="flex-space-between">
                    <div className="profile-medium-x mr-1">
                      <img
                        src={user?.ImageProfile}
                        className="profile-medium-x"
                        alt="foto de perfil user"
                      />
                    </div>
                    <div className="flex-space-between w-100">
                      <div className="w-100">
                        <h5 className="color-destaque">
                          {user?.name} {user?.surname}
                        </h5>
                        <p className="color-grayy">@{user?.user}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <p className="mb-2">{user?.description}</p>
                <a href="#" className="color-primary">
                  Ver perfil
                </a>
              </div>
            </div>
          </div>
        )}
        <GoToTop />
      </section>
    </>
  );
}
