import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartSlice";
import { add1, remove1 } from "../redux/Slices/WishSlice";
import { GrStar } from "react-icons/gr";
import { BsLightningFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Products = ({ product }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { cart } = useSelector((state) => state);
    const { wish } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(product));
        toast.success("Item Added to Cart");
    };
    const removeFromCart = () => {
        dispatch(remove(product.id));
        toast.error("Item Removed from Cart");
    };

    const addToWishlist = () => {
        dispatch(add1(product));
        toast.success("Item Added to Wishlist");
    };
    const removeFromWishlist = () => {
        dispatch(remove1(product.id));
        toast.error("Item Removed from Wishlist");
    };

    const next = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const prev = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
      };

    return (
        <div className="flex flex-col shadow-lg  hover:shadow-cyan-500/50 hover:border-[1px] border-gray-400 transition duration-200 ease-in gap-3 p-4 mt-6 ml-5">
            <div className="flex items-center justify-evenly">
                <MdKeyboardDoubleArrowLeft  fontSize="1.75rem"
                onClick={prev}
                className=" cursor-pointer"
                />
                <div className="h-[180px] w-[300px] relative">
                    <img
                        src={product.images[currentImageIndex]}
                        alt={product.title}
                        className="object-fit h-full w-full rounded-lg scroll-smooth"
                    />
                    <div className=" absolute top-2 right-3">
                    {wish.some((p) => p.id === product.id) ? (
                        <button
                            onClick={removeFromWishlist}
                            className=" text-red-600"
                        >
                            <IoMdHeart fontSize="1.75rem" />
                        </button>
                    ) : (
                        <button
                            onClick={addToWishlist}
                            className=" text-gray-400"
                        >
                            <IoMdHeart fontSize="1.75rem" />
                        </button>
                    )}
                    </div>
                </div>
                <MdKeyboardDoubleArrowRight  fontSize="1.75rem"
                onClick={next}
                className=" cursor-pointer"
                />
            </div>
            
            <div className=" uppercase text-gray-500">
                {product.brand}
            </div>
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate">
                    {product.title}
                </p>
            </div>
            <div className="flex gap-1 items-center bg-green-700 text-white w-min px-1 rounded ">
                <p className="text-sm">{product.rating}</p>
                <GrStar className="top-5" />
            </div>
            <div>
                <p className=" text-gray-600 font-normal text-[11px] text-left">
                    {product.description.slice(0, 35) + "..."}
                </p>
            </div>
            <div className="flex gap-6 items-center">
                <p className="text-black text-lg font-semibold">${product.price}</p>
                <p className=" text-green-700 text-sm">
                    {product.discountPercentage}% off
                </p>
            </div>

            {/*  */}
            <div className="flex items-center ">
                {cart.some((p) => p.id === product.id) ? (
                    <button
                        onClick={removeFromCart}
                        className="text-sm w-full text-white font-semibold bg-red-600 hover:bg-red-700 py-1 px-4 rounded-md shadow-sm transition duration-300 ease-in cursor-pointer"
                    >
                        Remove
                    </button>
                ) : (
                    <button
                        onClick={addToCart}
                        className="text-sm w-full text-black border border-black font-semibold py-1 px-4 rounded-md shadow-sm transition duration-300 ease-in cursor-pointer"
                    >
                        <ImCart className="inline-block mr-2 transition duration-300 ease-in cursor-pointer" />
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default Products;
