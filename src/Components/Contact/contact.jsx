import Image from "../../assets/svg-contact.png";
// import Form from "./form.jsx";

const TitleForm = () => {
  return (
    <div>
      <div className="image-contact-by-sarah-cuisine max-w-4xl mx-auto sm:py-20 sm:px-6 lg:px-8">
        <span className="flex justify-center">
          <img data-aos="fade-right" src={Image} alt="" className="mt-24 sm:mt-4 px-9" />
        </span>
      </div>
    </div>
  );
};

export default TitleForm;
