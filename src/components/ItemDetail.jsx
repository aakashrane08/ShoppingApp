import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

function ItemDetail({item}) {
    const dispatch = useDispatch();

  return (
    <div>
        <div>
            <img 
            src={item.thumbnail}
            alt={item.title}
            />

            <div>
                <Link to="/cart">
                <button>Add to Cart</button>
                </Link>
                
                <button>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail