import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--primary-font,'Mulish', serif)",
      },

      spacing: {
        0: "0",
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        50: "50px",
        55: "55px",
        60: "60px",
        65: "65px",
        70: "70px",
        75: "75px",
        80: "80px",
        85: "85px",
        90: "90px",
        95: "95px",
        100: "100px",
      },

      colors: {
        white: "var(--white)",
        primary: "var(--primary)",
        black: "var(--black)",
        stroke: "var(--stroke)",
        secondary: "var(--secondary)",
        "header-black": "var(--header-black)",
        "para-black": "var(--para-black)",
        "para-white": "var(--para-white)",
        "para-italic": "var(--para-italic)",
        "para-input": "var(--para-input)",
      },

      boxShadow: {
        "card-image": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        blog: "0px 0px 20px 0px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
