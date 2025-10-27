"use client";

import { ImageComponentProps } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiZoomIn } from "react-icons/fi";

export default function ImageComponent({ src, alt, id }: ImageComponentProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      href={`/gallery/${id}`}
      className="mb-1 break-inside-avoid block w-full rounded-lg overflow-hidden shadow-lg dark:shadow-teal-900/30 transition-all duration-300 relative group"
    >
      <Image
        src={src}
        width={500}
        height={500}
        alt={alt}
        loading="lazy"
        className={`w-full h-auto rounded-lg transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadingComplete={() => setLoaded(true)}
      />

      <div className="absolute inset-0 flex items-center justify-center bg-teal-500/30 dark:bg-teal-700/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <FiZoomIn className="text-white text-3xl" />
      </div>
    </Link>
  );
}
