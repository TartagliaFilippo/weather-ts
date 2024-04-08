import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/app.ts",
  output: {
    file: "dist/main.js",
    format: "life",
    sourcemap: true,
  },
  plugins: [typescript()],
};
