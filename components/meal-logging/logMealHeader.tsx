import React from "react";
import { useRouter } from "next/navigation";

export default function LogMealHeader() {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center py-4 bg-primary text-white px-4">
      <button onClick={() => router.push("/home")}>Cancel</button>
      <h1 className="text-lg font-semibold">Log a Meal</h1>
      <div />
    </header>
  );
}
