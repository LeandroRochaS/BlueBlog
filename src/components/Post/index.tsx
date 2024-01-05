import { ReactNode } from "react";
import "./styles.scss";
import pontoSvg from "../../images/svg/ponto.svg";

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
          <h4>{props.title}</h4>
          {props.className === "item-1" && (
            <p className=" mt-1">{props.children}</p>
          )}

          <div className="flex mt-1">
            {props.className === "item-1" && (
              <div className="img-profile">
                <div
                  className="img-profile-content"
                  style={{ backgroundImage: `url(${props.imgProfile})` }}
                ></div>
              </div>
            )}

            <div
              className={`desc-profile ${
                props.className != "item-1"
                  ? `flex-aling-center`
                  : `flex-space-between`
              }`}
            >
              <div>
                <p className="desc-name color-white">by Fulano de tal</p>
                {props.className === "item-1" && <p>@fulano</p>}
              </div>
              {props.className != "item-1" && (
                <img src={pontoSvg} alt="ponto" />
              )}
              {props.className === "item-1" && <p>Aug 2, 2020 - 8 min read</p>}
              {props.className === "item-2" && <p>Aug 2, 2020 - 8 min read</p>}
              {props.className != "item-2" && props.className != "item-1" && (
                <p>Aug 2, 2020 - test</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
