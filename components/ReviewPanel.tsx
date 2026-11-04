"use client";
import { useState } from "react";

export default function ReviewPanel() {
  const [stars, setStars] = useState(0);
  return (
    <section>
      <p>Rate this recipe: {stars} star(s)</p>
      <button onClick={() => setStars(stars + 1)}>Add a star</button>
    </section>
  );
}
