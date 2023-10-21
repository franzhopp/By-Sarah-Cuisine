import Image from "../../assets/title-contact.png";

const TitleForm = () => {
  return (
    <div>
      <div loading="lazy" className="image-contact-by-sarah-cuisine border-t">
        <span className="flex justify-center">
          <img
            data-aos="fade-down-right"
            src={Image}
            alt=""
            className="px-16 mt-24 sm:mt-20 p-1"
          />
        </span>
      </div>
    </div>
  );
};

export default TitleForm;
