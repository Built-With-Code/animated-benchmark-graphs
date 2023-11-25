import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "purple-gradient": "linear-gradient(45deg,#E1CBFF,#9B62FF 50%,#5B03FF)",
        "blue-gradient": "linear-gradient(45deg,#CAEEFF,#7CAAFE 50%,#3067FF)",
        "gray-gradient": "linear-gradient(45deg,#D3D3D3,#707070)",
      },
    },
  },
  plugins: [],
};
export default config;
