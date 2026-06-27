"use client";

import { useEffect, useState } from "react";
import { useStore } from "../store/store";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useStore((state: any) => state.mode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (mode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [mode, mounted]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
