import Image from "../../assets/HOMEPAGE.png";

const Homepage = () => {
  return (
    <div className="flex justify-center mt-72 mb-32 px-4 sm:mt-72">
      <img src={Image} alt="" />
      {/* <h1 className="font-home text-4xl sm:text-5xl md:text-6xl">
        <span className="stroke block xl:inline">By Sarah Cuisine</span>
      </h1>
      <p className="sub-font-home max-w-sm mx-auto sm:text-lg md:mt-5 md:text-xl md:max-w-2xl lg:max-w-3xl">
        <div className="flex justify-center">
          <p className="line">
            “Recettes pour un mode de vie sain et gourmand.”
          </p>
        </div>
      </p> */}
    </div>
  );
};

export default Homepage;
