import React from 'react';

const Banner = () => {
  return (
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3sfOm_sF9_EU-o-ib7UETPGmWugT7UkWhzQ&usqp=CAU" class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRVZs-AB8dgo6lOKzO_qiLZ8uTFwlEX-ebQ&usqp=CAU" class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANHM5Dp-L-gJbCMDBB1r2ZJ4fgBRAo09E-w&usqp=CAU" class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEcqnnCz9EUaMA3cNjQVoivKeN_znjNanMA&usqp=CAU" class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;