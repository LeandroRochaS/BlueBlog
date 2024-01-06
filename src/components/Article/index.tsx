import "./styles.scss";

type ArticleProps = {
  title: string;
  subtitle: string;
  imgArticle: string;
};

export default function Article({ title, subtitle, imgArticle }: ArticleProps) {
  return (
    <>
      <section className="container mt-5">
        <div className="article-container">
          <div className="flex-space-between">
            <div className="article-left">
              <div className="flex mb-2">
                <div className="article-img  mr-2">
                  <img className="article-img-content" src={imgArticle}></img>
                </div>
                <h3 className="">
                  {title}
                  <span>.</span>
                </h3>
              </div>
              <div>
                <p>{subtitle}</p>
              </div>
            </div>
            <div className="article-right">
              <a
                className="flex-aling-center color-primary nav-link"
                style={{ cursor: "pointer" }}
              >
                Explorar mais artigos {">"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
