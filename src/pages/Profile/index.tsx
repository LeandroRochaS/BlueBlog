import AddPost from "../../components/AddPost";
import Header from "../../components/Header";
import maisSvg from "../../images/svg/mais.svg";
import iconUserSvg from "../../images/svg/icon-user.svg";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalData from "./PersonalData";

export default function Profile() {
  const { isLoggedUser, userDataAuthContext } = useAuthContext();
  const navigate = useNavigate();
  const [addPostIsOpen, setAddPostIsOpen] = useState(false);
  const [showDataUser, setShowDataUser] = useState(false);

  useEffect(() => {
    if (!isLoggedUser) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDataAuthContext]);
  const userData = userDataAuthContext;

  function handleViewPost() {
    if (addPostIsOpen) {
      setAddPostIsOpen(false);
      setShowDataUser(false);
    } else {
      setShowDataUser(false);
      setAddPostIsOpen(true);
    }
  }

  function handleViewDataUser() {
    if (showDataUser) {
      setAddPostIsOpen(false);
      setShowDataUser(false);
    } else {
      setAddPostIsOpen(false);
      setShowDataUser(true);
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <section>
          <div className="row">
            <div className="grid-6 ">
              <div className="flex-start-row mb-5">
                <div className="mr-3">
                  <img
                    src={userData?.ImageProfile}
                    className="profile-medium"
                    alt=""
                  />
                </div>

                <div>
                  <h4 className="mt-2">
                    {userData?.name} {userData?.surname}
                  </h4>
                  <h6 className="color-gray">@{userData?.surname}</h6>
                </div>
              </div>
              <p>{userData?.description}</p>
            </div>
            <div className="grid-6 flex-center">
              <a
                href="#"
                onClick={handleViewDataUser}
                className="mr-4 btn-secondary w-50 btn-secondary-layout"
              >
                <img src={maisSvg} className="icon-s mr-2" />
                <p className="color-white">Meus Dados</p>
              </a>
              <a
                href="#"
                className="btn-secondary w-50 btn-secondary-layout"
                onClick={handleViewPost}
              >
                <img src={iconUserSvg} className="icon-s mr-2" />{" "}
                <p className="color-white">Adicionar post</p>
              </a>
            </div>
          </div>
        </section>
        {addPostIsOpen && !showDataUser ? <AddPost /> : ""}
        {showDataUser && !addPostIsOpen ? <PersonalData /> : ""}
      </div>
    </>
  );
}
