import React from "react";
import css from "./ImageCard.module.css";

export default function ImageCard({ item, onClick }) {
  const handleClick = () => {
    onClick(item); // Передаємо об'єкт зображення в обробник подій onClick
  };

  return (
    <li  key={item.id} className={css.imageCard}>
      <img onClick={handleClick} src={item.urls.small} alt={item.description} className={css.img} />
    </li>
  );
}
