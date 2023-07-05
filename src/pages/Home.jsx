import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Products from '../components/Products';
import Category from '../components/Category';

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
    <div className='grid grid-cols-12'>
        <div className=' col-span-2 border-gray-300 border-[1px] m-1'>
            <Category/>
        </div>
        <div className=" col-span-10 bg-gray-100 min-h-screen">
        {
            loading ? <Spinner/>
             : 
            products.length > 0 ?
             (<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
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
    </div>
    
  )
}

export default Home