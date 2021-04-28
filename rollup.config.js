import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

import { name } from "./package.json";

export default [
  {
    input: "src/index.js",
    output: [
      {
        exports: "named",
        file: `esm/${name}.esm.js`,
        format: "esm",
      },
    ],
    plugins: [
      nodeResolve({
        mainFields: ["module", "main"],
      }),
      commonjs({
        include: "node_modules/**",
      }),
      babel({
        exclude: "node_modules/**",
      }),
      terser(),
    ],
  },
];
