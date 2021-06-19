import React from "react";
import { FaTrash } from "react-icons/fa";
import "./Image.css";
export default function Image({ image, index, title, time, handleRemove }) {
  let i = (index % 10) + 1;
  let className = `gallery__item gallery__item--${i}`;
  return (
    <div className={className}>
      <img src={image} alt={title} className="gallery__img" />
      <div className="gallery__delete" onClick={() => handleRemove(index)}>
        <FaTrash />
      </div>
      <div className="gallery__content">
        <h3 className="gallery__title">
          {title !== null && title.length > 10
            ? title.slice(0, 15) + "..."
            : title}
        </h3>
      </div>
      <p className="gallery__time">{time.slice(0, 10)}</p>
    </div>
  );
}
