import React, { useState, useEffect } from "react";

const CartDrawer = ({ cartItems, setCartItems }) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);

  // clear out cart list
  const handleClearCart = () => {
    setCartItems([]);
  };

  // remove items from cart and update cart information
  const handleRemove = (item) => {
    const newCartList = cartItems.filter(
      (cartItem) => cartItem.name != item.name
    );

    setCartItems(newCartList);
  };

  // update cart information whenever change is deteced in cart items list
  useEffect(() => {
    const totalCost = cartItems.reduce((acc, currItem) => {
      return acc + currItem.quantity * currItem.price;
    }, 0);

    const totalItems = cartItems.reduce((acc, currItem) => {
      return acc + currItem.quantity;
    }, 0);

    setCartTotal(totalCost);
    setCartItemCount(totalItems);
  }, [cartItems]);

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="flex items-center gap-2 text-[#646cff] transition font-medium hover:cursor-pointer"
        >
          Cart{" "}
          <div className="badge badge-sm badge-secondary">{cartItemCount}</div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center py-2 border-b border-gray-200"
              >
                <a className="font-medium">{item.name}</a>
                <div className="text-sm flex justify-between w-full">
                  <span>Quantity: {item.quantity}</span>
                  <span>Cost: ${item.quantity * item.price} </span>
                  <div
                    className="btn btn-xs bg-red-500"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>No items in cart. Please add something from the menu.</li>
          )}

          {cartItems.length > 0 ? (
            <>
              <li className="flex justify-between items-center my-5">
                <span>Total Items: {cartItemCount}</span>
                <span>Total Cost: ${cartTotal}</span>
              </li>
              <div className="btn btn-error mb-2" onClick={handleClearCart}>
                Clear Cart
              </div>
              <div className="btn btn-primary">Checkout</div>
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default CartDrawer;
