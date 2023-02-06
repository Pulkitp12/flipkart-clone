import React from 'react';

function Carousel() {
  return (
            <div id="carouselExampleAutoplaying" className="carousel slide pt-3" data-bs-ride="carousel" >
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
            <img src="https://storiesflistgv2.blob.core.windows.net/stories/2017/08/Perfectbuy_banner.jpg" height={300} width={1000} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src="https://i.ytimg.com/vi/NzP3vmABTD0/maxresdefault.jpg" height={300} width={1000} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src="https://img.global.news.samsung.com/in/wp-content/uploads/2022/06/home-cover.jpg" height={300} width={800} className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            </button>
            </div>
  )
}

export default Carousel;