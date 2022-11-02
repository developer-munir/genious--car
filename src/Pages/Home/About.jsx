import React from "react";
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero my-32">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="w-1/2 relative">
          <img
            src={person}
            alt=""
            className=" rounded-lg shadow-2xl w-[460px] h-full"
          />
          <img
            src={parts}
            alt=""
            className=" rounded-lg shadow-2xl w-[327px] absolute right-5 top-3/4 border-gray-100 border-8"
          />
        </div>
        <div className="w-1/2">
          <p className="text-[#FF3811] font-bold text-lg">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="bg-[#FF3811] text-white py-2 px-4">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
