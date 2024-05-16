import { extname } from "node:path";

export function markdown() {
  return {
    name: "markdown",
    enforce: "pre",
    transform(code, id) {
      if (extname(id) !== ".md") return null;

      return {
        code: `export default \`${code
          .replace(/`/g, "\\`")
          .replace(/\$\{/g, "$\\{")}\`;`,
      };
    },
  };
}
