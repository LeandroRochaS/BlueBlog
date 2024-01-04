import { ReactNode } from "react";
import "./styles.scss";

type PostProps = {
  children: ReactNode;
  subtitle: string;
  title: string;
  img: string;
  imgProfile: string;
  className?: string;
};

export default function Post(props: PostProps) {
  console.log(props.className);
  return (
    <>
      <div
        className={`post mr-2 ${props.className}`}
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <div className="post-opacity">
          <div className="img-post"></div>
          <h5>{props.subtitle}</h5>
          <h3>{props.title}</h3>
          {props.className === "item-1" && (
            <p className=" mt-1">{props.children}</p>
          )}

          <div className="flex mt-1">
            <div className="img-profile">
              <div
                className="img-profile-content"
                style={{ backgroundImage: `url(${props.imgProfile})` }}
              ></div>
            </div>
            <div className="desc-profile ml-2">
              <h6 className="color-blue">Fulano de tal</h6>
              <p>Aug 2, 2020 - 8 min read</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
