import React from "react";

export default function ColorSelector({ colors, selected, onSelect }) {
  return (
    <div className="flex space-x-4 p-4 bg-neutral-800 rounded-xl">
      {colors.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c.color)}
          className={`w-10 h-10 rounded-full border-2 transition ${
            selected === c.color ? "border-yellow-400 scale-110" : "border-transparent"
          }`}
          style={{ backgroundColor: c.color }}
        />
      ))}
    </div>
  );
}
