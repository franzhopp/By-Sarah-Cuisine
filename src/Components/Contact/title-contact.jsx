import Image from "../../assets/title-contact.png";
// import Form from "./form.jsx";

const TitleForm = () => {
  return (
    <div>
      <div
        loading="lazy"
        className="image-contact-by-sarah-cuisine"
      >
        <span className="flex justify-center">
          <img
            data-aos="fade-right"
            src={Image}
            alt=""
            className="px-16 mt-28 sm:mt-24 p-1"
          />
        </span>
      </div>
    </div>
  );
};

export default TitleForm;
