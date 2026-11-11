import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: { extend: { colors: { coffee: { 900: "#2a1810", 800: "#3b2417", 700: "#5a3a22" }, cream: { DEFAULT: "#f5ecdc", dark: "#e8dac0" }, gold: "#c8a24a" },
    fontFamily: { serif: ["Georgia", "Amiri", "serif"] } } },
  plugins: [],
} satisfies Config;
