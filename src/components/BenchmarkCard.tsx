import { BenchmarkCardData } from "@/db/BenchmarkData";
import { motion } from "framer-motion";
import React from "react";

const BenchmarkCard: React.FC<BenchmarkCardData> = ({
  title,
  m3Data,
  m2Data,
  m1Data,
  baselineData,
}) => {
  return (
    <motion.div
      className="flex flex-col gap-12"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-200px" }}
      variants={cardVariants}
    >
      <h2 className="text-white font-medium text-3xl">{title}</h2>
      <BenchmarkItem
        title="14-inch MacBook Pro with M3"
        multiplier={m3Data.multiplier}
        value={m3Data.value}
        color="purple"
      />
      <BenchmarkItem
        title="14-inch MacBook Pro with M2"
        multiplier={m2Data.multiplier}
        value={m2Data.value}
        color="blue"
      />
      <BenchmarkItem
        title="13-inch MacBook Pro with M1"
        multiplier={m1Data.multiplier}
        value={m1Data.value}
        color="gray"
      />
      <BenchmarkItem
        title="13-inch MacBook Pro with Intel Core i7 (baseline)"
        multiplier={baselineData.multiplier}
        value={baselineData.value}
      />
    </motion.div>
  );
};

interface BenchmarkItemProps {
  title: string;
  multiplier: string;
  value: number;
  color?: "purple" | "blue" | "gray" | "baseline";
}

const BenchmarkItem: React.FC<BenchmarkItemProps> = ({
  title,
  multiplier,
  value,
  color = "baseline",
}) => {
  return (
    <div className="flex justify-between items-center gap-6">
      <div className="flex-1 flex flex-col gap-2">
        <motion.div
          variants={benchmarkVariants}
          className={`h-[0.375rem] rounded-full ${
            color == "purple"
              ? "bg-purple-gradient"
              : color == "blue"
              ? "bg-blue-gradient"
              : color == "gray"
              ? "bg-gray-gradient"
              : "bg-neutral-400"
          }`}
          style={{ width: `${value}%` }}
        />
        <span
          className={`font-medium ${
            color == "baseline" ? "text-neutral-400" : "text-white"
          }`}
        >
          {title}
        </span>
      </div>
      <span
        className={`text-5xl w-32 font-medium ${
          color == "purple"
            ? "text-purple-500"
            : color == "blue"
            ? "text-blue-500"
            : color == "gray"
            ? "text-gray-500"
            : "text-neutral-500"
        }`}
      >
        {multiplier}
      </span>
    </div>
  );
};

const cardVariants = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const benchmarkVariants = {
  initial: {
    scaleX: 0,
    opacity: 0,
    transformOrigin: "center left",
  },
  whileInView: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export default BenchmarkCard;
