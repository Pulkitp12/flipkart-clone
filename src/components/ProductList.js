import React from 'react';
import Product from './Product';

function ProductList(props) {
  return (
    <div className='container'>
      
    <div className='row'>
        {
          
        props.productList.map((product,i)=>{
            return <div className='col-md-4'key={i}>
            <Product product={product} add={props.add} incre={props.incre} index={i} decre={props.decre}/>
            </div>
      })  
      }
    </div>
    </div>
  )
}
export default ProductList;