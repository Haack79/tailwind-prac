import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <Card />
      </div>
    </main>
  );
}
