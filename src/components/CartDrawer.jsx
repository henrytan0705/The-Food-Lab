import React, { useState, useEffect } from "react";

const CartDrawer = ({ cartItems, setCartItems }) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-[#646cff] cursor-pointer focus:outline-none font-medium hover:text-[#535bf2]"
        aria-label="Open cart drawer"
      >
        Cart
        <div className="badge badge-sm badge-secondary">{cartItemCount}</div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-opacity-40 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          ></div>

          <aside className="fixed top-0 right-0 w-80 h-full bg-base-200 text-base-content z-50 p-4 overflow-auto shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Close cart drawer"
              >
                ✕
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p>No items in cart. Please add something from the menu.</p>
            ) : (
              <ul className="menu space-y-3">
                {cartItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center border-b border-gray-300 pb-2"
                  >
                    <span className="font-medium">{item.name}</span>
                    <div className="flex items-center gap-4 text-sm">
                      <span>Qty: {item.quantity}</span>
                      <span>Cost: ${item.quantity * item.price}</span>
                      <button
                        className="btn btn-xs bg-red-500 hover:bg-red-600 focus:outline-none"
                        onClick={() => handleRemove(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {cartItems.length > 0 && (
              <div className="mt-6">
                <div className="flex justify-between font-semibold mb-4">
                  <span>Total Items:</span>
                  <span>{cartItemCount}</span>
                </div>
                <div className="flex justify-between font-semibold mb-6">
                  <span>Total Cost:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  className="btn btn-error w-full mb-2"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
                <button className="btn btn-primary w-full">Checkout</button>
              </div>
            )}
          </aside>
        </>
      )}
    </>
  );
};

export default CartDrawer;
