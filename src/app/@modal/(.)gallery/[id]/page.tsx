"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/ModalComponent";

function Page() {
  const router = useRouter();
  return <Modal onClose={() => router.back()} />;
}

export default Page;
