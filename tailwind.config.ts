import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "button-primary-color": "#0070f3",
        "night-blue": "#1B2745",
        "button-footer": "#7A4C97",
        "footer-box": "#001E4F",
        "footer-text": "#F5F5F5",
      },
      backgroundImage: {
        "work-explain-page-bg":
          "url('../../assets/images/view-water-splash.svg')",
      },
      fontFamily: {
        'neue': ["NeueMontreal"], 
        'neue-bold': ["NeueMontreal-Bold"], 
        'neue-light': ["NeueMontreal-Light"],
      },
    },
  },
  plugins: [],
};
export default config;
