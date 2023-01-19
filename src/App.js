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
    },
    { 
    price: 35000,
    name: "Lenovo Laptop",
    quantity: 0,
    image: "https://www.lenovo.com/medias/Yoga-Slim-7i-Pro-Gen-7-14-SS-Hero.png?context=bWFzdGVyfHJvb3R8NTkzNTJ8aW1hZ2UvcG5nfGhlMi9oYmMvMTY1Nzc3ODkwNjcyOTQucG5nfDRjOWI1YTY1YzBlOTI1ODI2NTNhNDEzYzY3ZTRlYTUwNDMxOTRiMGM3ZmI5NDQ3OThmNzQ0MDc3MGQzNjE0OTA",
    },
    { 
      price: 1500,
      name: "Clothes",
      quantity: 0,
      image: "https://www.shutterstock.com/image-photo/clothing-collage-consists-fashionable-clothes-260nw-1698615172.jpg",
      },
      { 
      price: 30000,
      name: "Washing Machine",
      quantity: 0,
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/ww70t4020cx-tl/gallery/in-front-loading-washer-ww70t4020cheo-ww70t4020cx-tl-383435730?$1300_1038_PNG$",
      },
      { 
        price: 60000,
        name: "L-Shaped Sofa",
        quantity: 0,
        image: "https://cdn2.vectorstock.com/i/1000x1000/41/01/sofa-bed-with-isolated-white-background-vector-27214101.jpg",
        },
        { 
        price: 100,
        name: "Veggies",
        quantity: 0,
        image: "https://thumbs.dreamstime.com/b/paper-bag-groceries-white-background-156847921.jpg",
        }
   ]

   let [productList , setProductList] = useState(products);
   let [totalAmount , setTotalAmount] = useState(0);
   
    const add = (e) =>{
      let a= document.getElementsByClassName('abc');
      if(a[e].textContent==="Add To Cart"){
      let newProductList=[...productList]
      let newTotalAmount= totalAmount;
      newProductList[e].quantity=1;
      newTotalAmount += newProductList[e].price;
      setProductList(newProductList);
      setTotalAmount(newTotalAmount);
      a[e].textContent="Go To Cart";}
      else{
        a[e].setAttribute("href","#cart");
      }
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
