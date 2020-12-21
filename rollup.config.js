import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import resolve from "rollup-plugin-node-resolve";
import ts from "@wessberg/rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";
import analyze from "rollup-plugin-analyzer";

export default {
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        postcss: {
          plugins: [
            require("autoprefixer")({
              grid: "autoplace",
            }),
          ],
        },
      }),
      emitCss: false,
    }),
    ts({
      transpiler: "babel",
      babelConfig: {
        presets: [
          "@babel/typescript",
          ["@babel/env", { modules: false, loose: true }],
        ],
      },
      tsconfig: "tsconfig.json",
    }),
    resolve(),
    !!process.env.ANALYZE &&
      analyze({
        summaryOnly: true,
      }),
    process.env.NODE_ENV === "production" && terser(),
  ],
  input: "src/index.ts",
  output: {
    dir: "dist",
    sourcemap: true,
    format: "umd",
    name: "app",
  },
};
