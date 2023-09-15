import Image from "../../assets/svg-contact.png";
import Form from "./form.jsx";

const TitleForm = () => {
  return (
    <section id="contact">
      <div className="py-28">
        <div className="max-w-4xl mx-auto px-4 sm:py-20 sm:px-6 lg:px-8">
          <span className="flex justify-center">
            <img data-aos="fade-right" src={Image} alt="" />
          </span>
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default TitleForm;