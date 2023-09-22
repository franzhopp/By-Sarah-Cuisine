import Image from "../../assets/title-home.png";

const Homepage = () => {
  return (
    <section id="home">
      <div className="flex justify-center pt-72 mb-24 px-4">
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          src={Image}
          alt="Image name"
          className="px-3"
        />
      </div>
      <div className="text-transparent mb-12">Division invisible</div>
      <div id="about" className="mb-24 sm:mb-0"></div>
    </section>
  );
};

export default Homepage;
