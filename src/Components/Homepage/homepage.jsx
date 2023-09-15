import Image from "../../assets/HOMEPAGE.png";

const Homepage = () => {
  return (
    <section>
      <div className="flex justify-center pt-72 mb-32 px-4 sm:mt-70">
        <img data-aos="fade-right" src={Image} alt="Image name" className="flex items-center" />
      </div>
      <div className="text-transparent mb-14">Division invisible</div>
      <div id="about"></div>
    </section>
  );
};

export default Homepage;
