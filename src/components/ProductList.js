import React from 'react';
import Product from './Product';

function ProductList(props) {
  return (
    <div className='mx-2' >
        { 
        props.productList.map((product,i)=>{
            return <div key={i}>
            <Product product={product} add={props.add} incre={props.incre} index={i} decre={props.decre}/>
            </div>
      })  
      }
    </div>
  )
}
export default ProductList;