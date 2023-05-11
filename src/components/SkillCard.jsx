import React from "react";

const SkillCard = ({ icon, title, subtitle }) => {
  return (
    <div className=" bg-secondary shadow-lg overflow-hidden rounded-md h-72 w-40 xs:w-44 sm:w-56 md:w-64">
      <div className="p-3 sm:p-5 flex flex-col h-full w-full justify-around">
        <div className=" rounded-full bg-primary w-12 h-12 flex justify-center items-center">
          {icon}
        </div>
        <div className="h-36">
          <h1 className=" text-brightText mb-3 text-xl">{title}</h1>
          <p className=" font-thin text-dimText text-md sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
