import React from 'react';
import "./css/banner.css";
const BannerItem = ({ data }) => {
    // console.log(data)
    const { image, id, prev, next } = data;
    // console.log(id,prev,next)
    
  return (
    <div id={`#slide${id}`} className="carousel-item relative w-full">
      <div className="carosel">
        <img src={image} className="w-full rounded-xl" alt="banner images not found" />
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-6 top-1/4 ">
        <h1 className="text-6xl text-white font-semibold">
          Affordable <br />
          Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-6 top-2/4 ">
        <p className="text-xl text-white font-semibold">
          There are many variations of passages of available <br /> but the
          majority have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-6 top-3/4 ">
        <button className="btn btn-warning mr-5">Warning</button>
        <button class="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-6">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;