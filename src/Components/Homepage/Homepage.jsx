import Image from "../../assets/title-home.png";

const Homepage = () => {
  return (
    <section id="home">
      <div className="flex flex-col justify-center h-my-screen px-4 pt-44">
        <p
          data-aos="fade-in"
          className="text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-beige tracking-wider font-sans-recursive stroke"
        >
          By Sarah Cuisine
        </p>
        <div className="flex justify-center">
          <img
            data-aos="fade-down-right"
            src={Image}
            alt="Icône bysarahcuisine"
            className="px-3"
          />
        </div>
      </div>
      <div className="text-transparent">Division invisible</div>
      <div id="about" className="mb-24 sm:mb-0"></div>
    </section>
  );
};

export default Homepage;
