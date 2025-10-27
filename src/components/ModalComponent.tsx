"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useParams } from "next/navigation";
import { gallery } from "@/data/gallery";
import { GalleryItemInterface, ModalProps } from "@/types/global";

function Modal({ onClose }: ModalProps) {
  const params = useParams();
  const { id } = params;
  const [loaded, setLoaded] = useState(false);

  const data = gallery.find(
    (item) => item.id === Number(id)
  ) as GalleryItemInterface;

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-lg flex justify-center items-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        className="absolute cursor-pointer top-4 left-4 sm:top-6 sm:left-6 bg-white/10 backdrop-blur-md w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 border border-white/20 z-10"
        onClick={onClose}
      >
        <IoClose className="text-white text-lg sm:text-xl" />
      </button>

      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        className="bg-white dark:bg-gray-900 w-full h-auto sm:w-auto sm:h-[calc(100vh-100px)] md:h-[80vh] lg:h-[70vh] rounded-xl overflow-hidden sm:max-w-4xl shadow-2xl border border-white/10 relative"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {!loaded && (
          <div className="absolute inset-0 flex justify-center items-center bg-black/20 dark:bg-black/50 z-10">
            <div className="w-10 h-10 border-4 border-white/30 dark:border-gray-500 border-t-white dark:border-t-gray-200 rounded-full animate-spin"></div>
          </div>
        )}

        <motion.img
          src={data.src}
          alt={data.location}
          className="w-full h-auto sm:w-auto sm:h-[calc(100vh-100px)] md:h-[80vh] lg:h-[70vh] object-cover mx-auto"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={loaded ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onLoad={() => setLoaded(true)}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 text-right">
            {data.location}
          </h1>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/80 justify-end mb-2 sm:mb-3">
            <span className="flex items-center gap-1">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              {data.elevation}
            </span>
            <span>{data.province}</span>
            <span>{data.difficulty}</span>
          </div>

          <p className="text-white/90 text-xs sm:text-sm leading-relaxed text-right mb-2 sm:mb-4">
            {data.description}
          </p>

          <div className="flex flex-wrap gap-1 sm:gap-2 justify-end">
            {data.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
