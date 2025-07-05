import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import toast from 'react-hot-toast';

export default function CartModal({ onClose }) {
  const {
    cart,
    removeItem,
    updateQuantity,
    clearCart,
    totalPrice,
    totalCount,
  } = useCart();

  const [animateIn, setAnimateIn] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => setAnimateIn(true), 10);
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setAnimateIn(false);
    setTimeout(onClose, 300);
  };

  const handleClear = () => {
    clearCart();
    toast.success("Cart cleared!", {
      className: 'bg-brand text-dark shadow-md',
    });
  };

  return (
    <>
      {/* Blurred backdrop */}
      <div
        className={`fixed inset-0 backdrop-blur-sm bg-black/40 z-40 transition-opacity duration-300 ${
          isExiting ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
      />

      {/* Slide-in/out Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-dark text-white z-50 p-6 flex flex-col shadow-lg transform transition-transform duration-300 ease-in-out ${
          animateIn ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-logo text-brand">YOUR CART ({totalCount})</h2>
          <button
            onClick={handleClose}
            aria-label="Close cart"
            className="text-white text-2xl hover:text-brand cursor-pointer"
          >
            ×
          </button>
        </header>

        {/* Cart items */}
        <div className="flex-grow overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map(({ id, name, price, quantity }) => (
              <div
                key={id}
                className="flex justify-between items-center bg-card p-3 rounded-lg shadow"
              >
                <div>
                  <p className="font-semibold text-brand">{name}</p>
                  <p className="text-sm text-gray-400">${price.toFixed(2)}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(id, quantity - 1)}
                    className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600 cursor-pointer"
                    disabled={quantity <= 1}
                    aria-label={`Decrease quantity of ${name}`}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      updateQuantity(id, Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-12 text-center bg-input text-white border border-gray-600 rounded"
                    aria-label={`Quantity of ${name}`}
                  />
                  <button
                    onClick={() => updateQuantity(id, quantity + 1)}
                    className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600 cursor-pointer"
                    aria-label={`Increase quantity of ${name}`}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(id)}
                    className="text-red-500 hover:text-red-400 cursor-pointer"
                    aria-label={`Remove ${name} from cart`}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <footer className="mt-6 border-t border-gray-700 pt-4 flex flex-col space-y-3">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleClear}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded cursor-pointer"
            >
              Clear Cart
            </button>
          </footer>
        )}
      </div>
    </>
  );
}
