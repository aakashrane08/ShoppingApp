import React from 'react'

const Category = () => {
  return (
    <div className=' m-5 space-y-5'>
        <div className=' uppercase font-semibold text-gray-800'>
            Category
        </div>
        <div className='flex flex-col gap-2'>
            <div className=' check cursor-pointer space-x-3'>
                <input type='checkbox' id='smartphone'></input>
                <label for="smartphone"> Smartphones</label>
            </div>

            <div className='check cursor-pointer space-x-3'>
                <input type='checkbox' id='laptops'></input>
                <label for="laptops"> Laptops</label>
            </div>

            <div className='check cursor-pointer space-x-3'>
                <input type='checkbox' id="fragrances"></input>
                <label for="fragrances"> Fragrances</label>
            </div>

            <div className='check cursor-pointer space-x-3'>
                <input type='checkbox' id='skincare'></input>
                <label for="skincare"> Scincare</label>
            </div>

            <div className='check cursor-pointer space-x-3'>
                <input type='checkbox' id='groceries'></input>
                <label for="groceries"> Groceries</label>
            </div>

            <div className='check cursor-pointer space-x-3'>
                <input type='checkbox' id='home-decoration'></input>
                <label for="home-decoration"> Home-Decoration</label>
            </div> 
        </div>
    </div>
  )
}

export default Category