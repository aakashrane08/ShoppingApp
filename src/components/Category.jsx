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
                <label htmlFor="smartphone"> Smartphones</label>
            </div>

            <div className='check cursor-pointer space-x-3'>
                <input type='checkbox' id='laptops'></input>
                <label htmlFor="laptops"> Laptops</label>
            </div>

            <div className='check cursor-pointer space-x-3'>
                <input type='checkbox' id="fragrances"></input>
                <label htmlFor="fragrances"> Fragrances</label>
            </div>

            <div className='check cursor-pointer space-x-3'>
                <input type='checkbox' id='skincare'></input>
                <label htmlFor="skincare"> Scincare</label>
            </div>

            <div className='check cursor-pointer space-x-3'>
                <input type='checkbox' id='groceries'></input>
                <label htmlFor="groceries"> Groceries</label>
            </div>

            <div className='check cursor-pointer space-x-3'>
                <input type='checkbox' id='home-decoration'></input>
                <label htmlFor="home-decoration"> Home-Decoration</label>
            </div> 
        </div>
    </div>
  )
}

export default Category