/* eslint-disable @typescript-eslint/no-explicit-any */
import Article from "../../components/Article";
import Header from "../../components/Header";
import starSvg from "../../images/svg/star.svg";
import likeSvg from "../../images/svg/like.svg";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import PostsDestaques from "../../components/PostsDestaques";
import MainPost from "../../components/MainPost";

import Card from "../../components/Card";

import { API } from "../../services/api";
import { useEffect, useState } from "react";
import { PostType } from "../../utils/types";
import MainPostMid from "../../components/MainPost/MainPostMid";
import { useAuthContext } from "../../context/AuthContext";

export default function Home() {
  const [main, setMain] = useState<PostType[]>([]);
  const [mostViewed, setMostViewed] = useState<PostType[]>([]);
  const [banner, setBanner] = useState<PostType[]>([]);
  const [destaques, setDestaques] = useState<PostType[]>([]);
  const { isLoggedUser } = useAuthContext();

  useEffect(() => {
    API.get("/posts?star=5&_limit=2&_order=desc").then((response) => {
      setMain(response.data);
    });

    API.get("/posts?_sort=date&_order=desc&_limit=1").then((response) => {
      setBanner(response.data);
    });

    API.get("/posts?_limit=3").then((response) => {
      setMostViewed(response.data);
    });

    API.get("/posts?_limit=4").then((response) => {
      setDestaques(response.data);
    });
    console.log("está logado ??? " + isLoggedUser);
  }, [isLoggedUser]);

  return (
    <>
      <Header />
      <Hero />
      <Article
        title="Destaques"
        subtitle="Últimas notícias, fotos, vídeos e reportagens especiais"
        imgArticle={starSvg}
      />
      <div className="mt-5 mb-5 posts-container container">
        {destaques &&
          destaques.map((item, index) => (
            <PostsDestaques
              {...item}
              numberKey={index}
              key={index.toFixed(0)}
            />
          ))}
      </div>
      <Article
        title="Mais votados"
        subtitle="Os melhores e mais bem votados posts do mês"
        imgArticle={likeSvg}
      />
      <section>
        <div className="row mb-8 container">
          <MainPostMid {...mostViewed[2]} />
          <div className="grid-6 p-0 mt-1">
            {main && main.map((item) => <MainPost key={item.id} {...item} />)}
          </div>
        </div>
      </section>
      <section className="container">
        <h3>Mais vistos</h3>

        <div className="row mt-2 mb-12">
          {mostViewed &&
            mostViewed.map((item) => <Card {...item} key={item.id} />)}
        </div>
      </section>
      {banner && banner.map((item) => <Banner key={item.id} {...item} />)}

      <Footer />
    </>
  );
}
