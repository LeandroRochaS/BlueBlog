import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  {
    name: "Seja Bem Vindo",
    url: "https://images.unsplash.com/photo-1618249607604-f5ce05635aaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm90b2dyYWZpYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Seja Bem Vindo",
    url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    name: "Seja Bem Vindo",

    url: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2luZW1hfGVufDB8fDB8fHww",
  },
];

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        interval={3000} // Intervalo de mudança de slide em milissegundos (opcional)
        showStatus={false}
        // Exibir ou não informações de status (opcional)
      >
        {images.map((image, index) => (
          <div key={index} className="div-carousel">
            <img src={image.url} alt={image.name} />
            <p className="title-carousel">Seja bem-vindo ao blog.</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
