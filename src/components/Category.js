import React from 'react';
import "../components/css/category.css";

function Category() {
  return (
    <div className='category d-flex justify-content-between' style={{backgroundColor:"white",paddingBottom:"100px"}}>
        <span></span>
        <figure>
        <a href='#phone'><img src="https://img5.gadgetsnow.com/gd/images/products/additional/large/G390830_View_1/mobiles/smartphones/apple-iphone-14-pro-256-gb-deep-purple-6-gb-ram-.jpg" height={70} alt=".."/>
        <figcaption>Iphone</figcaption></a>
        </figure>
        <figure>
        <a href='#lap'><img src="https://www.lenovo.com/medias/Yoga-Slim-7i-Pro-Gen-7-14-SS-Hero.png?context=bWFzdGVyfHJvb3R8NTkzNTJ8aW1hZ2UvcG5nfGhlMi9oYmMvMTY1Nzc3ODkwNjcyOTQucG5nfDRjOWI1YTY1YzBlOTI1ODI2NTNhNDEzYzY3ZTRlYTUwNDMxOTRiMGM3ZmI5NDQ3OThmNzQ0MDc3MGQzNjE0OTA" height={70} alt=".."/>
        <figcaption>Laptop</figcaption></a>
        </figure>
        <figure>
        <a href='#clo'><img src="https://www.shutterstock.com/image-photo/clothing-collage-consists-fashionable-clothes-260nw-1698615172.jpg" height={70} alt=".."/>
        <figcaption>Clothes</figcaption></a>
        </figure>
        <figure>
        <a href='#wash'><img src="https://images.samsung.com/is/image/samsung/p6pim/in/ww70t4020cx-tl/gallery/in-front-loading-washer-ww70t4020cheo-ww70t4020cx-tl-383435730?$1300_1038_PNG$" height={70} alt=".."/>
        <figcaption>Washing Machine</figcaption></a>
        </figure>
        <figure>
        <a href='#sofa'><img src="https://cdn2.vectorstock.com/i/1000x1000/41/01/sofa-bed-with-isolated-white-background-vector-27214101.jpg" height={70} alt=".."/>
        <figcaption>Sofa</figcaption></a>
        </figure>
        <figure>
        <a href='#veggi'><img src="https://thumbs.dreamstime.com/b/paper-bag-groceries-white-background-156847921.jpg" height={70} alt=".."/>
        <figcaption>Veggies</figcaption></a>
        </figure>      
        <span></span>
    </div>
  )
}

export default Category;