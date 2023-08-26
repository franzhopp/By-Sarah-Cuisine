import React from "react";

const SectionDuplicate = () => {
  return (
    <section className="bg-pink-500 py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">
        Une cuisine dont vous vous rappelez
      </h2>
      <p className="mt-3 px-4 text-md sm:text-1 text-black-200 sm:mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio labore
        possimus animi est perferendis deserunt, maiores libero quam!
      </p>

      <div className="flex justify-center items-center mt-10 flex-col sm:flex-row">

        {/* 1 step */}
        <div className="flex flex-col justify-start items-center w-40">
          <div className="text-5xl font-extrabold text-white">100%</div>
          <div className="mt-2 text-lg font-medium text-white">ejhuzehye</div>
        </div>
        {/* 2 step */}
        <div className="flex flex-col justify-start items-center w-40">
          <div className="text-5xl font-extrabold text-white">100%</div>
          <div className="mt-2 text-lg font-medium text-white">ejhuzehye</div>
        </div>
        {/* 3 step */}
        <div className="flex flex-col justify-start items-center w-40">
          <div className="text-5xl font-extrabold text-white">100%</div>
          <div className="mt-2 text-lg font-medium text-white">ejhuzehye</div>
        </div>
      </div>
    </section>
  );
};

export default SectionDuplicate;
