import BenchmarkCard from "@/components/BenchmarkCard";
import { benchmarkData } from "@/db/BenchmarkData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-20 py-24 px-48 bg-neutral-800">
      <h1 className="text-white font-semibold text-6xl max-w-[24ch]">
        M3 compared to previous MacBook Pro models.
      </h1>
      {benchmarkData.map((benchmark) => (
        <BenchmarkCard {...benchmark} />
      ))}
    </main>
  );
}
