import Image from "../../assets/title-contact.png";

const TitleForm = () => {
  return (
    <div>
      <div
        loading="lazy"
        className="image-client-by-sarah-cuisine border-t sm:py-16 sm:px-24 lg:px-8"
      >
        <span className="flex justify-center">
          <img
            data-aos="fade-down-right"
            src={Image}
            alt="Img bysarahcuisine"
            className="px-16 mt-24 mb-24 sm:mb-10 sm:mt-4"
          />
        </span>
      </div>
    </div>
  );
};

export default TitleForm;
