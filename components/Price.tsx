"use client";
import { useStore } from "@/lib/store";
export default function Price({ value }: { value: number }) {
  const { t } = useStore();
  return <>{value > 0 ? `${value} MAD` : t.onRequest}</>;
}
