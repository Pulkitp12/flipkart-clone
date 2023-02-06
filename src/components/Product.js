import React from 'react';

function Product(props) {
  
  
  return (
    <div className='my-3 mx-2'>
      <div className="card mb-3 py-3 px-3" id={props.product.id}>
       <div className='row g-0'>
        <div className='col-md-2'>
        <img src={props.product.image} className="card-img-top" height={200} alt="..."/>
        </div>
        <div className='col-md-7'>
         <h3 className='text-center'><u> {props.product.name} </u></h3>
         <ol><li>{props.product.description[0]}</li>
         <li>{props.product.description[1]}</li>
         <li>{props.product.description[2]}</li></ol>
        </div>
        <div className='col-md-3'>
        <div className="card-body">
            <h3 className="card-title mr-1 mb-5 mt-2"><span className=''>₹{props.product.price}</span></h3>
           <button className='btn btn-lg btn-info abc' onClick={()=>{props.add(props.index)}} >Add To Cart</button>
        </div></div>
      </div>
      </div>
    </div>
  )
}

export default Product;