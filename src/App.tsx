import Article from "./components/Article";
import Header from "./components/Header";
import starSvg from "./images/svg/star.svg";
import likeSvg from "./images/svg/like.svg";
import Post from "./components/Post";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Article
          title="Destaques"
          subtitle="Últimas notícias, fotos, vídeos e reportagens especiais"
          imgArticle={starSvg}
        />
        <div className="mt-5 mb-5 posts-container container">
          <Post
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
          </Post>
          <Post
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
          </Post>
          <Post
            className="item-3"
            imgProfile="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVzc29hfGVufDB8fDB8fHww"
            img="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subtitle="cinema"
            title="Os 10 filmes com maior bilheteria"
          >
            3Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nulla dolor eius fuga esse explicabo dolore, veritatis voluptates
            dolorem corporis? Cumque numquam iure blanditiis, repellat
            voluptatibus suscipit adipisci veritatis aperiam.
          </Post>
          <Post
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
          </Post>
        </div>
        <Article
          title="Destaques"
          subtitle="Últimas notícias, fotos, vídeos e reportagens especiais"
          imgArticle={likeSvg}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
