import Image from "next/image";
import Home from "./components/Home";
import { ThemeSection } from "./components/ThemeSection";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <Home />
      <ThemeSection />
    </main>
  );
}
