import React, { useEffect, useState } from 'react'

function Home() {
    const  [product, setproduct]= useState();

    const getProduct = async () => {
      const res = await fetch("http://localhost:3000/product");
      const datac = res.json();

      setproduct(data);
    };

    useEffect(()=>{
      getProduct();
    },[]);
  return (
  
  <>
     <div>
      {product.map((product)=>(

      ))}
     </div>
  </>
  )
}

export default Home