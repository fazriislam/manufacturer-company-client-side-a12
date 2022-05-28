import React from 'react';

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3sfOm_sF9_EU-o-ib7UETPGmWugT7UkWhzQ&usqp=CAU" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRVZs-AB8dgo6lOKzO_qiLZ8uTFwlEX-ebQ&usqp=CAU" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANHM5Dp-L-gJbCMDBB1r2ZJ4fgBRAo09E-w&usqp=CAU" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEcqnnCz9EUaMA3cNjQVoivKeN_znjNanMA&usqp=CAU" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;