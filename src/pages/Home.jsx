import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Products from '../components/Products';

function Home() {

    const API_URL = "https://dummyjson.com/products";
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            const {products} = await res.json();
            console.log(products);
            setProducts(products);
        }
        catch(error){
            console.log("Kuch to Gadbad h bhiya");
            setProducts([]);
        }
        
        setLoading(false);
    }

    useEffect( () => {
        fetchProductData();
    },[])

  return (
    <div className="bg-gray-100 min-h-screen">
        {
            loading ? <Spinner/>
             : 
            products.length > 0 ?
             (<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto p-4">
                {
                    products.map( (product) => (
                        <Products key={product.id} product={product}/>
                    ))
                }
             </div>)
              :
             (<div className="flex justify-center items-center h-screen">
                <p>No data Found</p>
             </div>)
        }
    </div>
  )
}

export default Home