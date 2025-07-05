import React from "react";
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

export default function MenuItemCard({ item }) {
  const { id, name, description, price, image } = item;
  const { addItem } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  const increment = () => setQuantity(q => Math.min(q + 1, 99));
  const decrement = () => setQuantity(q => Math.max(q - 1, 1));
  const handleChange = (e) => {
    const val = parseInt(e.target.value);
    setQuantity(!isNaN(val) && val > 0 ? val : 1);
  };

  const handleAddToCart = () => {
    addItem(item, quantity);
    toast.success(`${item.name} added to cart!`, {
      className: 'bg-brand text-dark shadow-md',
    });
    setQuantity(1);
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-200 ease-in-out">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold text-brand mb-2">{name}</h2>
      <div className="flex justify-between items-center text-sm mb-3">
        <p className="text-gray-300">{description}</p>
        <p className="text-brand text-xl font-semibold">${price.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={decrement}
            className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 btn-qty cursor-pointer"
          >
            −
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleChange}
            className="quantity-input w-12 text-center bg-input text-white border border-gray-600 rounded input-qty cursor-pointer"
          />
          <button
            onClick={increment}
            className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 btn-qty cursor-pointer"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-brand text-black px-4 py-1 rounded hover:bg-yellow-500 font-semibold text-sm btn-add-cart cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
