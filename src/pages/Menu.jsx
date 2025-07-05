import React, { useState } from "react";
import menuItems from "../data/menuItems";
import MenuItemCard from "../components/MenuItemCard";

export default function Menu() {
  const [quantities, setQuantities] = useState({});

  const changeQuantity = (id, delta = 0, manualValue) => {
    setQuantities((prev) => {
      const currentQty = prev[id] || 1;
      let newQty;

      if (manualValue !== undefined) {
        const parsed = parseInt(manualValue);
        newQty = !isNaN(parsed) && parsed > 0 ? parsed : currentQty;
      } else {
        newQty = Math.max(1, currentQty + delta);
      }

      return { ...prev, [id]: newQty };
    });
  };

  return (
    <section className="bg-dark min-h-screen max-w-5xl mx-auto text-white py-12 px-4 sm:px-8">
      <title>Sizzle & Steam | Menu</title>
      <h1 className="text-8xl font-logo text-brand mb-8 text-center">MENU</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuItems.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            quantity={quantities[item.id] || 1}
            onQuantityChange={changeQuantity}
          />
        ))}
      </div>
    </section>
  );
}
