"use client";

import ImageComponent from "@/components/ImageComponent";
import { gallery } from "@/data/gallery";

export default function Home() {
  return (
    <div className=" columns-3 gap-1 p-2 lg:p-0 lg:mt-2 mb-10">
      {gallery.map((el) => (
        <ImageComponent
          id={el.id}
          key={el.src}
          src={el.src}
          alt={el.location}
        />
      ))}
    </div>
  );
}
