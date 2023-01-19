import React from 'react';

function CartList(props) {

  return (
    <>
    <div>
        {
        props.productList.map((product,i)=>{
            return(
                        <div className="container mt-3" style={product.quantity===0?{display:"none"}:{display:"block"}}>
                        <div className='d-flex justify-content-around py-2' style={{border: "2px solid black"}}>
                                <h2>
                                    {product.name}
                                </h2>
                        <span style={{width:"200px"}}>
                            <button type="button" className="btn btn-lg btn-secondary" onClick={() => {props.decre(i)}}>-</button>
                            <button type="button" className="btn btn-lg btn-warning">{product.quantity}</button>
                            <button type="button" className="btn btn-lg btn-secondary" onClick={() => {props.incre(i)}}>+</button>
                        </span> 
                        <span className="bg-white" style={{border: "2px solid black",width:"150px"}}><h3>{product.quantity*product.price}</h3></span> 
                        </div>
                    </div>
            )
      })  
      }
    </div>
    <div className='row'>
    <h1 className='mt-5 col-md-6'>Total Amount: {props.totalAmount}</h1><button className='btn btn-sm btn-success col-md-2 mt-5'>Pay Now</button>
    </div>
    </>
  )
}

export default CartList;