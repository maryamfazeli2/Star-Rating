import React, { useState } from "react";
import { StarFill } from 'react-bootstrap-icons';

import "./App.css";
export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          ><StarFill className="star" size={40} />
          </button>
        );
      })}
    </div>
  );
};
