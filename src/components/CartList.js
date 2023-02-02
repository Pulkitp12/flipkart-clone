import React from 'react';
import './css/cart.css';

function CartList(props) {

  return (
    <div className='cover'>
    <div className='row mt-4'>
    <div className='col-md-6 mt-3' id='a' style={{border:"2px solid black",marginRight:"100px",boxShadow:"7px 7px 15px 0px rgba(0,0,0,0.75)"}}>
        {
        props.productList.map((product,i)=>{
            return(      
                     
                        <div className="mt-3" style={product.quantity===0?{display:"none"}:{display:"block"}} key={i}>
                        <div className='d-flex justify-content-between py-3' >
                                <h2>
                                    {product.name}
                                </h2>
                        <span style={{width:"200px"}}>
                            <button type="button" className="btn btn-lg btn-secondary" onClick={() => {props.decre(i)}}>-</button>
                            <button type="button" className="btn btn-lg btn-warning">{product.quantity}</button>
                            <button type="button" className="btn btn-lg btn-secondary" onClick={() => {props.incre(i)}}>+</button>
                        </span> 
                        <span className="bg-white" style={{width:"150px"}}><h3>₹ {product.quantity*product.price}</h3></span> 
                        </div>
                    </div>
            )
      })  
      }
    </div>
    <div className='col-md-4 mt-3' style={{border: "2px solid black",height:"300px",boxShadow:"7px 7px 15px 0px rgba(0,0,0,0.75)"}}>
    <h2 className='mt-3'>Amount: {props.totalAmount}</h2>
    <h3 className='mt-3'>GST : {props.totalAmount*0.18}</h3>
    <h2 className='mt-3'>Total Amount : {props.totalAmount+props.totalAmount*0.18}</h2>
    <button className='btn btn-lg btn-success my-5'>Pay Now</button>
    </div>
    </div>
    </div>
  )
}

export default CartList;