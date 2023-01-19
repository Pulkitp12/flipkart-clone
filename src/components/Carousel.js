import React from 'react';

function Carousel() {
  return (
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://storiesflistgv2.blob.core.windows.net/stories/2017/08/Perfectbuy_banner.jpg" height={300} width={1000} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://i.ytimg.com/vi/NzP3vmABTD0/maxresdefault.jpg" height={300} width={1000} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://img.global.news.samsung.com/in/wp-content/uploads/2022/06/home-cover.jpg" height={300} width={800} className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
            </div>
  )
}

export default Carousel;