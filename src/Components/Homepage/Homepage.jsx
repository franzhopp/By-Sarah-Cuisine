import Image from "../../assets/title-home.png";
import fb from "../../assets/FACEBOOK.svg";
import insta from "../../assets/INSTAGRAM.svg";
import ws from "../../assets/WHATSAPP.svg";

const Homepage = () => {
  return (
    <section id="home">
      <div className="flex justify-center pt-72 mb-20 px-4">
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          src={Image}
          alt="Image name"
          className="px-3"
        />
      </div>
      {/* <div className="flex justify-center">
        <div className="flex space-x-3">
          <img
            src={fb}
            alt="Image name"
            className="h-12 w-12 transition ease duration-300 group hover:translate-y-5 cursor-pointer"
          />
          <img
            src={insta}
            alt="Image name"
            className="h-12 w-12 transition ease duration-300 group hover:translate-y-5 cursor-pointer"
          />
          <img
            src={ws}
            alt="Image name"
            className="h-12 w-12 transition ease duration-300 group hover:translate-y-5 cursor-pointer"
          />
        </div>
      </div> */}
      <div className="text-transparent mb-12">Division invisible</div>
      <div id="about" className="mb-24 sm:mb-0"></div>
    </section>
  );
};

export default Homepage;
