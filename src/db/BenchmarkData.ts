export type BenchmarkCardData = {
  title: string;
  m3Data: BenchmarkItemData;
  m2Data: BenchmarkItemData;
  m1Data: BenchmarkItemData;
  baselineData: BenchmarkItemData;
};

type BenchmarkItemData = {
  multiplier: string;
  value: number;
};

export const benchmarkData: BenchmarkCardData[] = [
  {
    title: "Faster ML image upscaling performance in Photomator",
    m3Data: {
      multiplier: "17.7x",
      value: 100,
    },
    m2Data: {
      multiplier: "14.9x",
      value: 84,
    },
    m1Data: {
      multiplier: "",
      value: 60,
    },
    baselineData: {
      multiplier: "",
      value: 5,
    },
  },
  {
    title: "Faster render performance in Final Cut Pro",
    m3Data: {
      multiplier: "7.4x",
      value: 100,
    },
    m2Data: {
      multiplier: "5.9x",
      value: 80,
    },
    m1Data: {
      multiplier: "",
      value: 55,
    },
    baselineData: {
      multiplier: "",
      value: 14,
    },
  },
  {
    title: "Faster image processing performance in Affinity Photo 2",
    m3Data: {
      multiplier: "5.9x",
      value: 100,
    },
    m2Data: {
      multiplier: "5.4x",
      value: 92,
    },
    m1Data: {
      multiplier: "",
      value: 60,
    },
    baselineData: {
      multiplier: "",
      value: 17,
    },
  },
  {
    title: "Faster project build performance in Xcode",
    m3Data: {
      multiplier: "3.7x",
      value: 100,
    },
    m2Data: {
      multiplier: "3.2x",
      value: 86,
    },
    m1Data: {
      multiplier: "",
      value: 65,
    },
    baselineData: {
      multiplier: "",
      value: 27,
    },
  },
  {
    title: "Faster spreadsheet performance in Excel",
    m3Data: {
      multiplier: "3.5x",
      value: 100,
    },
    m2Data: {
      multiplier: "2.9x",
      value: 83,
    },
    m1Data: {
      multiplier: "",
      value: 70,
    },
    baselineData: {
      multiplier: "",
      value: 29,
    },
  },
  {
    title: "More Amp Designer plug-ins with Logic Pro",
    m3Data: {
      multiplier: "2.3x",
      value: 100,
    },
    m2Data: {
      multiplier: "1.9x",
      value: 83,
    },
    m1Data: {
      multiplier: "",
      value: 75,
    },
    baselineData: {
      multiplier: "",
      value: 43,
    },
  },
];
