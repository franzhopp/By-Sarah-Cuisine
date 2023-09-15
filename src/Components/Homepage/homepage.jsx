import Image from "../../assets/HOMEPAGE.png";

const Homepage = () => {
  return (
    <section>
      <div className="flex justify-center mt-72 mb-32 px-4 sm:mt-70">
        <img data-aos="fade-right" src={Image} alt="" />
      </div>
      <div className="text-transparent">Division invisible</div>
      <div id="about"></div>
    </section>
  );
};

export default Homepage;
