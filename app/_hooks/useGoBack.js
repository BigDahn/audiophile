"use client";

import { useRouter } from "next/navigation";

export default function useGoBack() {
  const router = useRouter();
  return () => router.back();
}
