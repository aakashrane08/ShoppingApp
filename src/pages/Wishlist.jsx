import React from "react";
import { useSelector } from "react-redux";
import WishItem from "../components/WishItem";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wish } = useSelector((state) => state);
  console.log("wish");
  console.log(wish);

  return (
    <div className="min-h-screen m-10">
      <div>
        <div className=" max-w-3xl mx-auto">
          {wish.length > 0 ? (
            <div className=" flex justify-center">
              <div className="border p-4 shadow-md shadow-black">
                <div className="flex gap-3 items-center mt-4">
                <img src="../icon-wishlist.png" />
                <h1 className="text-3xl font-bold text-gray-800">
                  Your Wishlist
                </h1>
                </div>
                <div className="p-4">
                  {wish.map((item, index) => {
                    return (
                      <WishItem key={index} item={item} itemIndex={index} />
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-max bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-2xl font-medium text-gray-900 mb-4">
                  WishList is Empty
                </h1>
                <Link to={"/"}>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 border border-green-600 rounded-md shadow-sm">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
