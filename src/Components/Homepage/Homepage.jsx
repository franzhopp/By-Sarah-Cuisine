import Image from "../../assets/title-home.png";

const Homepage = () => {
  return (
    <section id="home">
      <div className="flex flex-col justify-center h-my-screen pt-40 sm:pt-32">
        <p
          data-aos="fade-down-left"
          className="text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-beige tracking-wider font-sans-recursive stroke"
        >
          By Sarah Cuisine
        </p>
        <div className="flex justify-center mt-2 sm:mt-0">
          <img
            data-aos="fade-down-right"
            src={Image}
            alt="Icône bysarahcuisine"
            className="px-6"
          />
        </div>
      </div>
      <div id="about" className="mb-10 sm:mb-0"></div>
    </section>
  );
};

export default Homepage;
