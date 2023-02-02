import Navbar from './components/Navbar';
import './App.css';
import Carousel from './components/Carousel';
import Category from './components/Category';
import ProductList from './components/ProductList';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CartList from './components/CartList';

const App=()=> {
  
  const products =[
    { 
    price: 120000,
    name: "Iphone",
    quantity: 0,
    image: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G390830_View_1/mobiles/smartphones/apple-iphone-14-pro-256-gb-deep-purple-6-gb-ram-.jpg",
    description: ["iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity.","The lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension." ,"A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience."]
    },
    { 
    price: 35000,
    name: "Lenovo Laptop",
    quantity: 0,
    image: "https://www.lenovo.com/medias/Yoga-Slim-7i-Pro-Gen-7-14-SS-Hero.png?context=bWFzdGVyfHJvb3R8NTkzNTJ8aW1hZ2UvcG5nfGhlMi9oYmMvMTY1Nzc3ODkwNjcyOTQucG5nfDRjOWI1YTY1YzBlOTI1ODI2NTNhNDEzYzY3ZTRlYTUwNDMxOTRiMGM3ZmI5NDQ3OThmNzQ0MDc3MGQzNjE0OTA",
    description: ["Get an opportunity to work anytime and from anywhere as you bring home the Lenovo IdeaPad 3 Core i3 11th Gen laptop.", "It features a slim 19.9 mm body and weight of about 1.41 kg to ensure flexible portability and stylish looks no matter where you go.", "Its 35.56 cm (14) Full HD display with four-sided narrow bezels renders immersive visuals.","This laptop is powered by an 11th generation processor and high speed SSD storage that allows you to enjoy efficient performance and massive storage."]
    },

    { 
      price: 1500,
      name: "Clothes",
      quantity: 0,
      image: "https://www.shutterstock.com/image-photo/clothing-collage-consists-fashionable-clothes-260nw-1698615172.jpg",
      description: ["Special occasions call for a special wardrobe. Explore a wide range of lehengas in the ethnic clothing collection.", "Investing in these lovely and lightweight ethnic dresses can help you enhance your fashion appeal. You can quickly get ready for any occasion with the help of this piece of pre-designed clothing with a majestic appearance." ,"Ethnic clothing comes in a variety of designs and styles and can be a terrific choice to dress up for any event."]
      },
      { 
      price: 30000,
      name: "Washing Machine",
      quantity: 0,
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/ww70t4020cx-tl/gallery/in-front-loading-washer-ww70t4020cheo-ww70t4020cx-tl-383435730?$1300_1038_PNG$",
      description: ["With features that ensure a great wash every time, this IFB Front Load Washing Machine lets you relax while enjoying a fantastic washing session." ,"IFB's Front Load Washing Machine keeps track of all your laundry needs, from Aqua Energie, a filtration procedure for hard water, to up to 2x Power Dual Steam for a sanitary wash and power cleaning.", "Additionally, other features like Active Color Protection, Auto Tub Clean, Laundry Add, and Time Saver improve your entire washing experience while saving water, power, detergent, and time."]
      },
      { 
        price: 60000,
        name: "L-Shaped Sofa",
        quantity: 0,
        image: "https://cdn2.vectorstock.com/i/1000x1000/41/01/sofa-bed-with-isolated-white-background-vector-27214101.jpg",
        description: ["Bharat Lifestyle brings to you modern and comfortable sofa set for your living room.Bharat Lifestyle Nano Black Grey Soft Touch Fabric 2+1+D Sofa Set is made of Acacia wood." ,"It has an elegant design which enhances the interior decor of your living room. Designed in such a way, the sofa is comfortable to sit.", "The best part it, it comes with good price without compromising on quality. Buy this sofa today!"]
        },
        { 
        price: 100,
        name: "Veggies",
        quantity: 0,
        image: "https://thumbs.dreamstime.com/b/paper-bag-groceries-white-background-156847921.jpg",
        description:["We at Neo, believe in ethical standards and greatly focus on producing products of the highest quality in order to provide only the finest to our customers.", "Neo Foods Sliced Red Paprika is made following the natural processes to give your recipes the natural deep colour and zingy spiciness." ,"Ready to invigorate the taste and texture of any meal, this Red Paprika will be on your next must-have ingredients list." ,"It can be used in Mediterranian cuisines, sandwiches, burgers, pizza, pasta, salad, etc., to add a touch of zest."]
        }
   ]

   let [productList , setProductList] = useState(products);
   let [totalAmount , setTotalAmount] = useState(0);
    const add = (e) =>{
      let a= document.getElementsByClassName('abc');
      let newProductList=[...productList]
      let newTotalAmount= totalAmount;
      newProductList[e].quantity=1;
      newTotalAmount += newProductList[e].price;
      setProductList(newProductList);
      setTotalAmount(newTotalAmount);
      a[e].innerHTML="Added to cart";
      a[e].style.backgroundColor="white";
      a[e].style.border="none";
      a[e].style.fontSize="22px";
      a[e].style.cursor="default";
  }
   
   const incre = (e) =>{
        let newProductList=[...productList]
        let newTotalAmount= totalAmount;
        newProductList[e].quantity++
        newTotalAmount += newProductList[e].price;
        setProductList(newProductList);
        setTotalAmount(newTotalAmount);
   }
   const decre = (e) =>{
    let newProductList=[...productList];
    let newTotalAmount=totalAmount;
    if(newProductList[e].quantity > 0 ){
      newProductList[e].quantity--;
      newTotalAmount -= newProductList[e].price;
    }  
    else{
      newProductList[e].quantity=0
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
}
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>           
        <Route path='/' element={<><Category/>
      <Carousel/>
      <ProductList add={add} productList={productList} incre={incre} decre={decre}/></>}/>
      <Route path='/cart' element={<CartList totalAmount={totalAmount} productList={productList} incre={incre} decre={decre}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
