import React from "react";
import { useDispatch } from "react-redux";
import { ImCart } from "react-icons/im";
import { BsLightningFill } from "react-icons/bs"
import { MdDelete } from "react-icons/md"
import { toast } from "react-hot-toast";
import { remove1 } from "../redux/Slices/WishSlice";
import { add } from "../redux/Slices/CartSlice";

function WishItem({ item }) {
    
    const dispatch = useDispatch();

    const removeFromWishlist = () => {
        dispatch(remove1(item.id));
        toast.success("Item Removed");
    };

    const addToCart = () => {
        dispatch(add(item));
        dispatch(remove1(item.id));
        toast.success("Item Added to Cart");
    }

    return (
        <div className="flex border shadow-lg  hover:shadow-cyan-500/50 hover:scale-105 hover:border-[1px] border-gray-400 transition duration-300 ease-in gap-3 p-4 mt-10 rounded-xl">
            <div className="w-full sm:w-1/4">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-fit rounded-md"
                />
            </div>
            <div className="w-full sm:w-3/4 ml-0 sm:ml-4">
                <div className="flex justify-between">
                    <h1 className="text-gray-700 font-semibold text-lg text-left truncate">
                        {item.title}
                    </h1>
                    <MdDelete onClick={removeFromWishlist} className=" cursor-pointer"/>
                </div>
                <h1 className="text-gray-700 font-medium text-[15px] text-left">
                    {item.description}
                </h1>
                <div className="flex justify-between gap-4 items-center w-full mt-2">
                    <div className="flex gap-3 items-center">
                        <p className="text-black font-semibold">${item.price}</p>
                        <p className=" text-green-700 text-sm">{item.discountPercentage}% off</p>
                    </div>
                    <div className="flex items-center mt-2 gap-4">
                        <button
                            className="text-sm text-white font-semibold bg-green-700 hover:bg-green-800 py-2 px-4 rounded-md shadow-sm transition duration-300 ease-in cursor-pointer"
                        >
                            <BsLightningFill className="inline-block transition duration-300 ease-in cursor-pointer"/>
                            Buy Now
                        </button>
                        <button
                            onClick={addToCart}
                            className="text-sm text-white font-semibold bg-orange-600 hover:bg-orange-700 py-2 px-4 rounded-md shadow-sm transition duration-300 ease-in cursor-pointer"
                        >
                            <ImCart className="inline-block mr-2 hover:text-orange-600 transition duration-300 ease-in cursor-pointer" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishItem;
