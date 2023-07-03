import React from 'react'
import { useSelector } from 'react-redux'
import ItemDetail from '../components/ItemDetail';

function Item() {
    const { item } = useSelector((state) => state);
    console.log("item");
    console.log(item);

  return (
    <div>
        <div>
            {item.map((item, index) => (
                <ItemDetail item={item} key={index} itemIndex={index}></ItemDetail>
            ))}
        </div>
    </div>
  )
}

export default Item