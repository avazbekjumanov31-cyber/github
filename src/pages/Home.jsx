import React, { useEffect, useState } from 'react';

function Home() {
  const [product, setproduct] = useState([]);

  const getProduct = async () => {
    const res = await fetch("http://localhost:3000/product");
    const data = await res.json();

    setproduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div>
        {product.map((product) => (
          <div key={product.id}>
            <img src={product.img} alt="" />
            <p>{product.narxi}</p>
            <p>{product.oyiga}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;