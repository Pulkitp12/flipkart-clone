import React from 'react';

function Product(props) {
  
  
  return (
    <div className='my-5'>
      <div className="card" style={{border: "4px solid black"}}>
        <img src={props.product.image} className="card-img-top" height={200} alt="..."/>
        <div className="card-body">
            <h5 className="card-title mr-3"> {props.product.name} <span className='badge bg-info py-3'>₹{props.product.price}</span></h5>
           <a className='btn btn-lg btn-info abc' onClick={()=>{props.add(props.index)}} >Add To Cart</a>
        </div>
      </div>
    </div>
  )
}

export default Product;