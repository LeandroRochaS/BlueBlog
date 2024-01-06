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

import profile1 from "../../images/profile/juliana.png";
import Card from "../../components/MoreViews";

import { API } from "../../services/api";
import { useEffect, useState } from "react";
import { PostType } from "utils/types";

export default function Home() {
  const [main, setMain] = useState<PostType[]>([]);
  const [mostViewed, setMostViewed] = useState<PostType[]>([]);
  const [banner, setBanner] = useState<PostType[]>([]);

  useEffect(() => {
    API.get("/posts?star=5&_limit=2&_order=desc").then((response) => {
      setMain(response.data);
    });

    API.get("/posts?_sort=date&_order=desc").then((response) => {
      setBanner(response.data);
    });

    API.get("/posts?_limit=3").then((response) => {
      setMostViewed(response.data);
    });
  }, []);

  console.log(main);

  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Article
          title="Destaques"
          subtitle="Últimas notícias, fotos, vídeos e reportagens especiais"
          imgArticle={starSvg}
        />
        <div className="mt-5 mb-5 posts-container container">
          <PostsDestaques
            className="item-1"
            imgProfile="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVzc29hfGVufDB8fDB8fHww"
            img="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subtitle="tecnologia"
            title="O guia definitivo sobre o blog"
          >
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nulla dolor eius fuga esse explicabo dolore, veritatis voluptates
            dolorem corporis? Cumque numquam iure blanditiis, repellat
            voluptatibus suscipit adipisci veritatis aperiam.
          </PostsDestaques>
          <PostsDestaques
            className="item-2"
            imgProfile="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVzc29hfGVufDB8fDB8fHww"
            img="https://images.unsplash.com/photo-1618249608049-bce3784b6a4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subtitle="fotografia"
            title="Quais melhores câmeras em 2021?"
          >
            2Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nulla dolor eius fuga esse explicabo dolore, veritatis voluptates
            dolorem corporis? Cumque numquam iure blanditiis, repellat
            voluptatibus suscipit adipisci veritatis aperiam.
          </PostsDestaques>
          <PostsDestaques
            className="item-3"
            imgProfile="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVzc29hfGVufDB8fDB8fHww"
            img="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subtitle="cinema"
            title="PC Gamer muito caro, o que fazer?  "
          >
            3Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nulla dolor eius fuga esse explicabo dolore, veritatis voluptates
            dolorem corporis? Cumque numquam iure blanditiis, repellat
            voluptatibus suscipit adipisci veritatis aperiam.
          </PostsDestaques>
          <PostsDestaques
            className="item-4"
            imgProfile="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVzc29hfGVufDB8fDB8fHww"
            img="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subtitle="tecnologia"
            title="O guia definitivo sobre o blog"
          >
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nulla dolor eius fuga esse explicabo dolore, veritatis voluptates
            dolorem corporis? Cumque numquam iure blanditiis, repellat
            voluptatibus suscipit adipisci veritatis aperiam.
          </PostsDestaques>
        </div>
        <Article
          title="Destaques"
          subtitle="Os melhores e mais bem votados posts do mês"
          imgArticle={likeSvg}
        />
        <section>
          <div className="row">
            <div className="grid-5">
              <h3 className="mt-1 ">
                As principais novidades da moda em 2024?
              </h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                nulla dolor eius fuga esse explicabo dolore, veritatis
                voluptates dolorem corporis? Cumque numquam iure blanditiis,
                repellat voluptatibus suscipit adipisci veritatis aperiam.
              </p>

              <div className="flex-start-row my-5">
                <div className="profile mr-2">
                  <img
                    src={profile1}
                    className="profile-img"
                    alt="foto de perfil user"
                  />
                </div>
                <div className="flex-space-between w-100">
                  <div>
                    <p className="color-destaque">by Lucia Sans</p>
                    <p className="color-grayy">@luciasans</p>
                  </div>
                  <div>
                    <p className="p3">Aug 2, 2020 - 8 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-7">
              {main && main.map((item) => <MainPost key={item.id} {...item} />)}
            </div>
          </div>
        </section>
        <section className="">
          <h3>Mais vistos</h3>

          <div className="row mt-4">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <Banner />

        <Footer />
      </div>
    </>
  );
}
